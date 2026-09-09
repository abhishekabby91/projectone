/**
 * The objections a firm actually has before sending this form.
 *
 * Taken from AI-WEBSITE-GUIDE.md principle 7 ("use objections as content
 * opportunities") and answered practically rather than defensively. The guide
 * also bans manufactured urgency and exaggerated outcomes, so there is no
 * scarcity language here and no promised percentage saved.
 */
export const CONTACT_FAQS = [
  {
    question: 'What actually happens after I send this?',
    answer:
      'It reaches a person, not a queue, and the first exchange is about scope rather than price: what work you are describing, which parts of it can be prepared and which have to stay with your team. If a call helps, we book half an hour. There is no charge and no obligation at the end of it. We do not advertise a response time, because the honest answer depends on when it arrives and which market it names \u2014 what is fixed is that turnaround on the work itself is agreed in writing at onboarding rather than promised here.',
  },
  {
    question: 'Will I end up spending more time reviewing than doing it myself?',
    answer:
      'That is the right question to ask, and for the first few files it can genuinely be true. The test worth agreeing up front is not turnaround, it is review time: whether a delivered file takes your reviewer less time to sign than one your own team prepared. If it does not, the arrangement has moved cost rather than removed it, and that shows up in the first month if anyone is measuring it.',
  },
  {
    question: 'We do not have time to train another team. Is this worth starting now?',
    answer:
      'The handover needs enough detail to understand your process, but it does not have to become a second project. Existing checklists, prior-year files, review notes and a couple of worked examples usually carry most of it. If your process only lives in one senior person\u2019s head, adding hands makes that person busier rather than freer, and a scoped cleanup with a defined end is normally the better first step. We would rather say so at the scoping call than in March.',
  },
  {
    question: 'What if our books are already behind?',
    answer:
      'Most first engagements start there. A backlog is a defined piece of work with an end, which makes it easier to scope and easier to judge us on than an open-ended retainer. It is usually the better place to start precisely because both sides can see whether it worked.',
  },
  {
    question: 'Who keeps control of the client relationship and the sign-off?',
    answer:
      'Your firm, in every market we work in. We prepare; your team reviews, advises and signs. We do not hold filing credentials, we do not contact your clients without your say-so, and we do not release payments. The section above sets out the full list of what we will not do.',
  },
  {
    question: 'Do we have to commit to a volume or a contract length?',
    answer:
      'No. Most engagements start with one client, one month of close work or a single backlog, which is small enough to judge honestly. Scaling something that already works is a much smaller decision than unwinding something that does not.',
  },
  {
    question: 'How is our client data handled?',
    answer:
      'Engagements are NDA-backed, and system access is limited to the people working on the relevant account, through the access your firm grants rather than credentials of our own. On certification: we are working toward SOC 2 and do not hold it yet. Anyone telling you otherwise about their own status is worth verifying directly rather than taking on trust.',
  },
  {
    question: 'Can you work inside the systems we already use?',
    answer:
      'That is the intention. We work in QuickBooks, Xero, Sage, NetSuite, MYOB, Drake Tax and CCH Axcess, inside the file your firm or client already runs. What we do not do is implement, configure or migrate any of them \u2014 that is an implementation partner\u2019s job, and a different skill.',
  },
];
