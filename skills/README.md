# Hard To Bear - Custom Agentic Skills

This directory contains custom agentic skills for Hard To Bear sales consulting.

## Available Skills

| Skill | Purpose | Use Case |
|-------|---------|----------|
| `sales-consultant` | Expert sales process consulting | Auditing processes, building frameworks, honest feedback |
| `client-proposal` | Professional proposal generation | Creating client proposals after discovery |
| `discovery-call` | Discovery call preparation & execution | Qualifying prospects, structured discovery |

## Quick Start

### Using a Skill

Simply ask Claude to activate a skill:

```
Activate the sales-consultant skill and help me improve our win rate
```

Or reference the skill file directly:

```
Use the discovery-call skill to help me prepare for a call with [Company Name]
```

### Creating a New Skill

1. Create directory: `mkdir skills/your-skill-name`
2. Create skill file: `touch skills/your-skill-name/skill.md`
3. Use the template from `SKILLS_GUIDE.md`
4. Register in `anthropic-skills.json`
5. Test with Claude

## Skill Philosophy

Each skill embodies:
- **Domain expertise**: Sales consulting best practices
- **Hard To Bear values**: Direct, honest, no-BS
- **Actionable output**: Templates, frameworks, and clear next steps
- **Process-driven**: Systems over personality

## Examples

### Example 1: Sales Process Audit

```
User: "Activate sales-consultant skill. Our win rate is 18% and deals keep stalling at the proposal stage."

Claude (with skill): "18% is low for B2B SaaS. Let's find the leak. I need:
1. How many discovery calls convert to proposals?
2. How many proposals convert to wins?
3. Average time from proposal sent to decision?
4. Who's writing the proposals?"
```

### Example 2: Proposal Generation

```
User: "Use client-proposal skill. Generate a proposal for Acme Corp. They need sales process help, 10-person team, £50K budget."

Claude (with skill): "I'll create a proposal. First, tell me:
- What specific pain did they mention in discovery?
- What's driving their timeline?
- Who's the economic buyer?
- What's their current win rate and what do they want it to be?"
```

### Example 3: Discovery Prep

```
User: "Discovery-call skill active. I have a call with TechCo tomorrow. CEO of 50-person B2B SaaS company."

Claude (with skill): "Right. Here's your prep:

Pre-Call Research (do this today):
- LinkedIn: CEO background, company funding stage
- Website: Product, team size, target market
- Intent: What content brought them to you?

Key Questions for Tomorrow:
1. 'Walk me through your sales process today'
2. 'Where do deals stall or die?'
3. 'What's this costing you in lost revenue?'
4. 'Who else is involved in this decision?'
5. 'What's driving the timeline?'

Disqualify if: No allocated budget, no urgent pain, or decision timeline is 'someday'."
```

## Skill Structure

Each skill directory contains:

```
skill-name/
├── skill.md          # Main skill definition (required)
├── examples.md       # Usage examples (optional)
├── templates/        # Reusable templates (optional)
└── README.md         # User documentation (optional)
```

## Need Help?

- Read the full guide: [SKILLS_GUIDE.md](../SKILLS_GUIDE.md)
- Review existing skills for examples
- Contact: russell@hardtobear.co.uk

---

**Remember**: Skills are living documents. Improve them as you learn what works.
