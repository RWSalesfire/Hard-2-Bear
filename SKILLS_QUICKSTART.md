# Agentic Skills - Quick Start

Get started with Hard To Bear's custom agentic skills in 5 minutes.

## What You Just Got

You now have **3 custom sales consulting skills** that transform Claude into a specialized sales expert:

1. **Sales Consultant** - Expert sales process consulting
2. **Client Proposal Generator** - Professional proposal creation
3. **Discovery Call Guide** - Discovery call preparation and execution

## Try It Right Now

### Test 1: Sales Consultant Skill

Copy and paste this into Claude:

```
Please read the file at /home/user/Hard-2-Bear/skills/sales-consultant/skill.md and adopt that persona.

Then help me with this: Our win rate is 18% and I don't know why deals are dying. Can you help me diagnose what's wrong?
```

**Expected behavior**: Claude should respond like a direct, no-BS sales consultant asking specific diagnostic questions about your funnel metrics.

---

### Test 2: Discovery Call Guide

```
Read /home/user/Hard-2-Bear/skills/discovery-call/skill.md and use that framework.

I have a discovery call tomorrow with a 50-person B2B SaaS company. Their CEO reached out after seeing our LinkedIn content. Help me prepare.
```

**Expected behavior**: Claude should provide a pre-call research checklist and structured question framework based on MEDDPICC.

---

### Test 3: Proposal Generator

```
Activate the client-proposal skill by reading /home/user/Hard-2-Bear/skills/client-proposal/skill.md

Generate a proposal for:
- Company: Acme Corp
- Pain: Win rate of 12%, no documented sales process
- Team: 8 sales reps
- Budget: £25K allocated
- Timeline: Want to start in 2 weeks
```

**Expected behavior**: Claude should ask clarifying discovery questions before generating a structured proposal with ROI calculations.

---

## How Skills Work

When you load a skill file, Claude:
1. Reads the skill definition (role, capabilities, style)
2. Adopts that specialized persona
3. Uses domain-specific frameworks and methodologies
4. Communicates in the defined tone (for Hard To Bear: direct, honest, no-BS)

Think of it as Claude putting on an "expert hat" for that specific domain.

## Creating Your Own Skills

Want to create a custom skill? Here's the fastest way:

### Step 1: Copy the Template

```bash
# Create new skill directory
mkdir -p skills/my-new-skill

# Copy template
cat > skills/my-new-skill/skill.md << 'EOF'
# [Skill Name] Skill

You are a [expert type] who [primary purpose].

## Your Role

When this skill is activated, you help users:
- [Capability 1]
- [Capability 2]

## Core Principles

1. **Principle 1**: [Explanation]
2. **Principle 2**: [Explanation]

## Communication Style

- [Tone guideline 1]
- [Language preference]

## Key Capabilities

### 1. [Capability Name]
When asked to [trigger]:
- [Action 1]
- [Action 2]

## Example Interactions

**User**: "[Example question]"

**You**: "[Example response]"

## When to Use This Skill

Activate this skill when:
- [Use case 1]
- [Use case 2]

## What This Skill Won't Do

- [Boundary 1]
- [Boundary 2]

---

**Remember**: [Key reminder]
EOF
```

### Step 2: Register in Configuration

Edit `anthropic-skills.json`:

```json
{
  "plugins": [
    {
      "skills": [
        "./skills/sales-consultant",
        "./skills/client-proposal",
        "./skills/discovery-call",
        "./skills/my-new-skill"    // Add your skill here
      ]
    }
  ]
}
```

### Step 3: Test It

```
Read /home/user/Hard-2-Bear/skills/my-new-skill/skill.md and use it to help me with [task]
```

## Real-World Use Cases

### Use Case 1: Audit Your Sales Process
**Skill**: Sales Consultant
**Scenario**: You want to identify why your pipeline is stalling
**Prompt**: "Use the sales-consultant skill to audit my sales process. Here are my metrics: [paste data]"

### Use Case 2: Prepare for High-Stakes Call
**Skill**: Discovery Call Guide
**Scenario**: Important prospect call tomorrow
**Prompt**: "Discovery-call skill active. Prep me for a call with [Company]. Here's what I know: [context]"

### Use Case 3: Win a Big Deal
**Skill**: Client Proposal Generator
**Scenario**: Need a compelling proposal after successful discovery
**Prompt**: "Client-proposal skill. Create proposal for [Company] with these discovery insights: [notes]"

### Use Case 4: Train New Sales Rep
**Skills**: All three
**Scenario**: Onboarding a new team member
**Prompt**: "Use sales-consultant skill to create an onboarding curriculum for a new B2B sales rep"

## Skill Development Ideas

Here are skills you might want to build next:

| Skill Idea | Purpose | Priority |
|------------|---------|----------|
| Win/Loss Analyzer | Analyze patterns in won vs. lost deals | High |
| Sales Email Reviewer | Improve sales email effectiveness | Medium |
| Pipeline Health Auditor | Identify stuck or at-risk deals | High |
| Objection Database | Catalog and respond to objections | Medium |
| Sales Playbook Builder | Create structured playbooks | High |
| Demo Script Creator | Build effective demo flows | Low |
| ROI Calculator Builder | Create custom ROI models | Medium |

## Advanced: Combining Skills

You can use multiple skills in a single conversation:

```
1. Use discovery-call skill to help me structure questions for tomorrow's call
2. Then use sales-consultant skill to review my current discovery process and suggest improvements
3. Finally, use client-proposal skill to show me what a good proposal looks like for this type of client
```

Claude will switch between skill contexts as needed.

## Troubleshooting

### "Claude isn't following the skill"
- Make sure you explicitly reference reading the skill file
- Check that skill.md has clear, specific instructions
- Add more examples to the skill definition

### "Skill is too generic"
- Add more domain-specific frameworks
- Include detailed example interactions
- Tighten the boundaries of what the skill won't do

### "Skills conflict with each other"
- Activate only one skill at a time for focused tasks
- Or clearly state which skill to use for which part of the task

## Next Steps

1. **Try the three test prompts above** to see skills in action
2. **Read SKILLS_GUIDE.md** for comprehensive documentation
3. **Create your first custom skill** using the template
4. **Share your best skills** with the team

## Resources

- **Full Guide**: [SKILLS_GUIDE.md](SKILLS_GUIDE.md)
- **Skills Directory**: [skills/](skills/)
- **Configuration**: [anthropic-skills.json](anthropic-skills.json)
- **Examples**: [skills/sales-consultant/examples.md](skills/sales-consultant/examples.md)

## Questions?

- Email: russell@hardtobear.co.uk
- Check existing skills for inspiration
- Experiment! Skills are just markdown files—easy to iterate

---

**Pro Tip**: The best skills are built from real conversations. Document what works, formalize it into a skill, and reuse it infinitely.

Happy skill building! 🐻
