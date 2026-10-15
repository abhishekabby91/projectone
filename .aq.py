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
def f(p):
    try:
        with op.open('http://localhost:3100'+p,timeout=90) as r:
            s=r.read().decode('utf-8','replace')
            if r.status!=200: return None
    except Exception: return None
    if 'noindex' in s: return None
    d={'route':p}
    d['faq']='FAQPage' in s
    mm=re.search(r'<main.*?</main>',s,re.S); main=mm.group(0) if mm else ''
    body=re.sub(r'<(script|style|svg)[^>]*>.*?</\1>',' ',main,flags=re.S)
    d['words']=len(html.unescape(re.sub('<[^>]+>',' ',body)).split())
    heads=[(int(x.group(1)),strip(x.group(2))) for x in re.finditer(r'<h([1-6])[^>]*>(.*?)</h\1>',body,re.S)]
    d['q']=[t for lv,t in heads if t.rstrip().endswith('?')]
    return d
with ThreadPoolExecutor(max_workers=6) as ex: out=[x for x in ex.map(f,sorted(set(routes))) if x]
json.dump(out,open('.aq.json','w'))
no=[x for x in out if not x['faq']]
print(f"indexable={len(out)}  without FAQPage={len(no)}")
import collections
g=collections.Counter('/'+(x['route'].strip('/').split('/')[0] or 'home') for x in no)
for k,v in g.most_common(): print(f"  {v:>3}  {k}")
print("\nof those, how many already have question-form headings on the page?")
withq=[x for x in no if x['q']]
print(f"  {len(withq)} pages carry {sum(len(x['q']) for x in withq)} question headings with no FAQPage markup")
for x in sorted(withq,key=lambda z:-len(z['q']))[:12]:
    print(f"   {len(x['q'])}q {x['words']:>5}w  {x['route']}")
