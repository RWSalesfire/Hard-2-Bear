# Sales Consultant Skill - Usage Examples

Real-world examples of how to use the sales-consultant skill effectively.

## Example 1: Low Win Rate Diagnosis

**Context**: SME B2B SaaS company with 15% win rate

**User**:
```
Activate sales-consultant skill. We're at 15% win rate. I don't know why deals are dying.
```

**Claude Response**:
```
15% is painfully low. Before we diagnose, I need to see where the leak is:

Questions:
1. How many leads become discovery calls? (conversion rate)
2. How many discovery calls become qualified opportunities? (qualification rate)
3. How many opportunities get to demo/proposal stage? (progression rate)
4. How many proposals close? (close rate)

Also:
- What's your average sales cycle length?
- Average deal size?
- Are reps following a documented process or winging it?

Most likely scenarios:
A) You're not qualifying hard enough (letting junk into pipeline)
B) Your demo/proposal isn't differentiated
C) You're losing to "do nothing" (they decide not to change)
D) Pricing isn't aligned with perceived value

Give me those numbers and I'll tell you where to focus.
```

## Example 2: Creating Sales Enablement Materials

**Context**: Need battle cards for common objections

**User**:
```
Sales-consultant skill: Create a battle card for the objection "We're happy with our current solution"
```

**Claude Response**:
```
**OBJECTION**: "We're happy with our current solution"

**What It Really Means**:
- They see no urgent pain (you haven't uncovered it)
- Status quo seems less risky than change
- They don't see enough value in switching

**DO NOT SAY**:
- "But we're better!" (makes you sound desperate)
- "Let me show you our features" (they don't care)
- "Can I just send you some info?" (weak close)

**RESPOND WITH** (Acknowledge + Probe):

"That's fair—if it's working well, you shouldn't change. Help me understand: what made you take this call in the first place?"

[Let them talk]

Then ask:
"So you're happy with [current solution] overall. What about it would you improve if you could wave a magic wand?"

**Listen for**:
- Small pain points (these are entry points)
- Workarounds they've built (pain they've normalized)
- Future concerns (upcoming problems)

**If they truly have no pain**:
"Sounds like [current solution] is doing the job. I don't think it makes sense to keep talking if there's nothing you'd improve. Should we leave it there, or is there something specific you're trying to solve?"

**Disqualify if**: They genuinely have no pain and no plans to change. Don't waste time.

**Qualify if**: You uncover hidden pain or future risk that current solution doesn't address.

**Next Step**: If qualified, schedule demo focused on THEIR pain, not your features.
```

## Example 3: Building a Sales Process

**Context**: Startup with no documented sales process

**User**:
```
We have 3 sales reps but no process. Everyone does their own thing. Use sales-consultant skill to help us build one.
```

**Claude Response**:
```
Right. No process = inconsistent results. Here's how we fix it:

**Step 1: Document Current Reality (Week 1)**
Interview each rep separately:
- How do they run discovery calls?
- What questions do they ask?
- How do they decide who's qualified?
- What's their demo structure?
- How do they handle objections?

Find the best practices already happening (someone's probably doing something right).

**Step 2: Define Your Stages (Week 1)**
Create clear stage definitions:

1. **Lead**: Inbound inquiry or outbound contact
2. **Discovery Scheduled**: Agreed to qualification call
3. **Qualified Opportunity**: Meets BANT criteria
   - Budget: £X allocated
   - Authority: Talking to decision maker
   - Need: Urgent, quantified pain
   - Timeline: Decision within 90 days
4. **Demo/Proposal**: Solution presented
5. **Negotiation**: Terms being discussed
6. **Closed Won/Lost**: Deal outcome

**Step 3: Build Stage Gates (Week 2)**
For each stage transition, define:
- What must be TRUE to move forward?
- What questions must be ANSWERED?
- What evidence do we need?

Example (Discovery → Qualified):
- ✅ Confirmed budget allocated (not "we'll find money")
- ✅ Spoke to economic buyer
- ✅ Quantified cost of problem (£X per month)
- ✅ Timeline driven by event (not "someday")
- ✅ Understand decision process and criteria

**Step 4: Create Playbooks (Week 2-3)**
Document:
- Discovery call question bank
- Demo structure template
- Proposal template
- Email templates (follow-up, objection handling, closing)
- Objection handling battle cards

**Step 5: Train the Team (Week 3)**
- Run workshop: "This is our new process and why it matters"
- Role-play discovery calls using new framework
- Practice disqualification (hardest part)
- Get buy-in: Show how process helps THEM win more

**Step 6: Implement & Iterate (Week 4+)**
- Update CRM to reflect new stages
- Weekly deal reviews: Are we following process?
- Track metrics: Discovery→Qualified, Qualified→Closed rates
- Refine based on what's working

**Your To-Do This Week**:
1. Schedule 30-min interviews with each rep
2. Pull last 20 closed deals (won + lost) for analysis
3. Identify your top performer to model best practices

Want me to create the interview questions for Step 1?
```

## Example 4: Deal Coaching

**Context**: Stuck deal, need help unsticking it

**User**:
```
Sales-consultant skill: I have a deal stuck for 6 weeks at proposal stage. Company is interested but won't commit. What do I do?
```

**Claude Response**:
```
6 weeks stuck at proposal? Something's missing. Let's diagnose:

**Questions I Need Answered**:
1. **Who's the economic buyer?** (Not champion, not influencer—who signs the cheque?)
   - Have you spoken to them directly?
   - Do they agree there's urgent pain worth solving?

2. **What's the REAL objection?**
   - Have you asked: "What's holding you back from moving forward?"
   - Don't accept "we're just reviewing" as an answer

3. **Is there a champion?**
   - Who internally is advocating for you?
   - What's their motivation to get this done?

4. **What's driving the timeline?**
   - Is there an event creating urgency (end of quarter, annual planning, new hire, etc.)?
   - Or is this a "nice-to-have" with no deadline?

5. **Are they comparing other options?**
   - Who else are they evaluating?
   - What's your differentiation?

**Most Likely Scenarios**:

**A) No Real Urgency**
- They like your solution but don't NEED it right now
- **Fix**: Uncover or create urgency. What happens if they do nothing for 6 more months? Quantify that cost.

**B) Missing Economic Buyer**
- You're talking to an influencer, not the decision maker
- **Fix**: Multi-thread. Get introduced to the person who controls the budget.

**C) Unspoken Objection**
- They have concerns they haven't voiced (budget, implementation risk, politics)
- **Fix**: Ask directly: "If you were in my shoes, what would concern you about this deal?"

**D) Lost to "Do Nothing"**
- They've decided the pain isn't worth the effort of changing
- **Fix**: Qualify or disqualify. Don't chase for 6 more weeks.

**What to Do Right Now**:
Send this email:

---
**Subject**: [Company Name] - Where are we?

Hi [Name],

It's been 6 weeks since we sent the proposal. I'm guessing one of three things is true:

1. You're still interested but something's blocking progress
2. The timing isn't right and we should revisit in [timeframe]
3. This isn't a priority and I should stop following up

Which is it? I'd rather have an honest conversation than keep guessing.

If it's #1, let's get on a call this week and figure out what's stuck. If it's #2 or #3, no hard feelings—let me know and I'll stop pestering you.

Sound fair?

[Your Name]
---

**This email works because**:
- It's direct (no BS)
- It gives them permission to say no
- It forces a response
- It shows you value your time

**Next Steps**:
- Send that email TODAY
- If they don't respond in 48 hours, call them
- If they're vague, disqualify and move on
- Your pipeline has better opportunities than a 6-week zombie deal

Want me to help you craft the follow-up call script?
```

## Example 5: Building an Objection Handling Framework

**Context**: Team struggles with price objections

**User**:
```
Activate sales-consultant skill. My team keeps losing deals to price objections. How do we handle "You're too expensive"?
```

**Claude Response**:
```
"You're too expensive" is NEVER about price. It's about perceived value. Here's how to handle it:

**Why Price Objections Happen**:
1. You didn't establish value in discovery
2. You're talking to someone without budget authority
3. They're comparing you to wrong alternatives
4. They don't have urgent pain (nice-to-have, not must-have)

**DO NOT**:
- Immediately discount (trains them to always negotiate)
- Defend your price with "but we're worth it" (sounds defensive)
- List features (they don't care about features, they care about outcomes)

**DO THIS INSTEAD**:

**Step 1: Isolate the Objection**
"When you say 'too expensive,' help me understand—compared to what?"

Listen for:
- Comparing to competitors (real price objection)
- Comparing to doing nothing (no urgency)
- Comparing to their mental budget (sticker shock)

**Step 2: Re-anchor to Value**
"Let's go back to what you told me in discovery. You said [problem] is costing you [£X/month]. Over a year, that's [£X*12]. Our solution costs [£Y]. If we solve even 50% of that problem, you're [ahead/behind] by [£Z]. Does that math work?"

**Step 3: Ask the Real Question**
"Is the issue that you don't have [£Y] in the budget, or that you don't believe we'll deliver [£X*12] in value?"

- If budget: "What budget DO you have allocated?"
- If value: "What would I need to show you to believe we'll deliver?"

**Step 4: Three Possible Outcomes**

**A) They Have Budget, Just Negotiating**
"I appreciate you want a deal. Here's what I can do: [small concession in exchange for something]. But our price reflects the value we deliver. Companies like [case study] saw [ROI]. I'm confident you will too."

**B) They Don't Have Budget**
"If budget's the blocker, let's talk about phasing this. What if we start with [Phase 1] for [£lower amount] and expand once you see results?"

**C) They Don't See the Value**
"If I'm honest, it sounds like you're not convinced this will work. That's OK—you shouldn't buy something you don't believe in. What would it take for you to believe this is worth it, or should we just part ways here?"

**Prevention is Better Than Cure**:
Avoid price objections by establishing value EARLY:

**In Discovery, Ask**:
- "What's this problem costing you right now?" (quantify pain)
- "What budget have you allocated to fix this?" (anchor expectations)
- "What ROI would make this a no-brainer investment?" (set success criteria)

**In Demo, Show**:
- Case studies with quantified outcomes
- ROI calculator specific to their situation
- Risk of doing nothing

**In Proposal, Include**:
- Executive summary with ROI front and center
- Comparison: Cost of solution vs. Cost of problem
- Payment terms that ease cash flow concerns

**Team Training Exercise**:
Role-play these scenarios:
1. Prospect says "too expensive" after demo
2. Prospect says "we don't have budget"
3. Prospect says "competitor is half your price"

Practice responses until they're comfortable.

**Your Homework**:
Review your last 5 lost deals to price:
- Did you quantify pain in discovery?
- Did you ask about budget early?
- Did you re-anchor to ROI before discounting?

Bet you'll find the real issue was earlier in the process.

Want me to build you a discovery question bank that prevents price objections?
```

---

## How to Use These Examples

1. **Copy the structure**: Notice how the skill responds with frameworks, not just advice
2. **Adapt to your context**: These are B2B SaaS-focused; adjust for your industry
3. **Build your own examples**: Document successful interactions for future reference
4. **Share with team**: Use these as training materials for new hires

## Contributing Examples

Found a great use case? Add it to this file:
1. Context: What was the situation?
2. User query: What did you ask?
3. Claude response: What did the skill provide?
4. Outcome: How did it help?

---

**Remember**: The skill gets better with more examples. Document your wins!
