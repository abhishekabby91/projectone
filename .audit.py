import re, html, json, urllib.request, os
from concurrent.futures import ThreadPoolExecutor
class NR(urllib.request.HTTPRedirectHandler):
    def redirect_request(self,*a,**k): return None
op=urllib.request.build_opener(NR)
routes=[]
for dp,_,f in os.walk('app'):
    if 'page.tsx' in f:
        r='/'+os.path.relpath(dp,'app').replace('\\','/'); r='/' if r in ('/.','/') else r.rstrip('/')
        routes.append(r)
def strip(x): return html.unescape(re.sub('<[^>]+>',' ',x)).strip()
def fetch(p):
    try:
        with op.open('http://localhost:3100'+p,timeout=90) as r:
            s=r.read().decode('utf-8','replace'); code=r.status
    except Exception as e: return {'route':p,'status':getattr(e,'code',0)}
    d={'route':p,'status':code}
    nosvg=re.sub(r'<svg.*?</svg>',' ',s,flags=re.S)
    t=re.search(r'<title>(.*?)</title>',nosvg,re.S); d['title']=html.unescape(t.group(1)).strip() if t else ''
    m=re.search(r'<meta name="description" content="(.*?)"',s,re.S); d['desc']=html.unescape(m.group(1)) if m else ''
    d['noindex']='noindex' in s
    d['faq']='FAQPage' in s
    d['dateModified']='"dateModified"' in s
    d['article']='"Article"' in s
    d['has_main']='<main' in s
    mm=re.search(r'<main.*?</main>',s,re.S); main=mm.group(0) if mm else ''
    body=re.sub(r'<(script|style|svg)[^>]*>.*?</\1>',' ',main,flags=re.S)
    d['words']=len(html.unescape(re.sub('<[^>]+>',' ',body)).split())
    heads=[(int(x.group(1)),strip(x.group(2))) for x in re.finditer(r'<h([1-6])[^>]*>(.*?)</h\1>',body,re.S)]
    d['h1']=[t for lv,t in heads if lv==1]
    sk=[];prev=0
    for lv,t in heads:
        if prev and lv>prev+1: sk.append(f'h{prev}->h{lv}')
        prev=lv
    d['skips']=sk
    d['links']=sorted(set(re.findall(r'href="(/[^"#?]*)"',body)))
    return d
with ThreadPoolExecutor(max_workers=6) as ex: out=list(ex.map(fetch,sorted(set(routes))))
json.dump(out,open('.audit.json','w'))
idx=[x for x in out if x.get('status')==200 and not x.get('noindex')]
print(f"live 200={sum(1 for x in out if x.get('status')==200)}  indexable={len(idx)}")
print(f"titles>60: {sum(1 for x in idx if len(x['title'])>60)}")
print(f"desc out of 110-160: {sum(1 for x in idx if not(110<=len(x['desc'])<=160))}")
print(f"missing h1: {sum(1 for x in idx if not x['h1'])}   heading skips: {sum(1 for x in idx if x['skips'])}   no main: {sum(1 for x in idx if not x['has_main'])}")
print(f"FAQPage: {sum(1 for x in idx if x['faq'])}/{len(idx)}")
print(f"Article with dateModified: {sum(1 for x in idx if x['article'] and x['dateModified'])}/{sum(1 for x in idx if x['article'])}")
print(f"thin <650w: {sum(1 for x in idx if x['words']<650)}")
import statistics as st
print(f"median words: {int(st.median(x['words'] for x in idx))}")
