# Hard To Bear - Agentic Skills Guide

This guide explains how to create, use, and extend custom agentic skills for the Hard To Bear sales consulting practice.

## What Are Agentic Skills?

Agentic skills are specialized capabilities that Claude can activate to perform domain-specific tasks. Think of them as expert personas or specialized tools that Claude can "put on" to help with specific problems.

Instead of being a generalist, Claude becomes a **sales consultant**, **proposal writer**, or **discovery call coach** when you activate the relevant skill.

## Current Skills

### 1. Sales Consultant (`/sales-consultant`)
**Purpose**: Expert sales process consulting
**Use when**: You need to audit sales processes, build frameworks, or get honest feedback on sales operations
**Key capabilities**:
- Sales process audits
- Objection handling frameworks
- Sales enablement material creation
- Brutally honest assessments

### 2. Client Proposal Generator (`/client-proposal`)
**Purpose**: Create compelling, honest sales proposals
**Use when**: You need to generate a proposal for a client after discovery
**Key capabilities**:
- Structured proposal generation
- ROI calculations
- Pricing breakdowns
- Professional formatting

### 3. Discovery Call Guide (`/discovery-call`)
**Purpose**: Prepare for and conduct qualification calls
**Use when**: You're preparing for a discovery call or need to improve your discovery process
**Key capabilities**:
- Pre-call research checklists
- Question frameworks (MEDDPICC)
- Disqualification guidance
- Post-call follow-up templates

## How to Use Skills

### Method 1: Direct Activation (Recommended)
Simply reference the skill name in your conversation with Claude:

```
Can you activate the sales-consultant skill and help me audit our sales process?
```

### Method 2: Explicit Context
Load the skill file directly and ask Claude to adopt that persona:

```
Read the skill file at /skills/sales-consultant/skill.md and help me using that framework
```

### Method 3: Configuration File
The `anthropic-skills.json` file in the root directory defines all available skills. You can reference this in your Claude Code configuration.

## Creating New Skills

### Skill Structure

Each skill should be a dedicated directory under `/skills/` with a `skill.md` file:

```
skills/
├── your-skill-name/
│   ├── skill.md          # Main skill definition (required)
│   ├── examples.md       # Usage examples (optional)
│   ├── templates/        # Templates or assets (optional)
│   └── README.md         # User-facing documentation (optional)
```

### Skill Definition Template

Create a new skill by copying this template into `skills/your-skill-name/skill.md`:

```markdown
# [Skill Name] Skill

You are a [role/expert type] who [primary purpose].

## Your Role

When this skill is activated, you help users:
- [Capability 1]
- [Capability 2]
- [Capability 3]

## Core Principles

1. **Principle 1**: [Explanation]
2. **Principle 2**: [Explanation]
3. **Principle 3**: [Explanation]

## Communication Style

- [Tone guideline 1]
- [Tone guideline 2]
- [Language preferences]

## Key Capabilities

### 1. [Capability Name]
When asked to [trigger]:
- [Action 1]
- [Action 2]
- [Action 3]

### 2. [Capability Name]
When helping with [use case]:
- [Action 1]
- [Action 2]

## Example Interactions

**User**: "[Example question]"

**You**: "[Example response showing tone and approach]"

## When to Use This Skill

Activate this skill when users need:
- [Use case 1]
- [Use case 2]
- [Use case 3]

## What This Skill Won't Do

- [Boundary 1]
- [Boundary 2]
- [Boundary 3]

## Tools You Can Use

When this skill is active, you have access to:
- [Tool 1]: [Purpose]
- [Tool 2]: [Purpose]

## Success Metrics

A successful interaction means:
- [Success criteria 1]
- [Success criteria 2]
- [Success criteria 3]

---

**Remember**: [Key philosophical point or reminder]
```

### Skill Design Best Practices

1. **Be Specific**: Define exactly when and how the skill should be used
2. **Show Examples**: Include example interactions that demonstrate tone and approach
3. **Set Boundaries**: Clearly state what the skill won't do
4. **Define Success**: Explain what a good outcome looks like
5. **Embed Expertise**: Include domain-specific frameworks, methodologies, and best practices
6. **Match Brand Voice**: For Hard To Bear, that means direct, honest, no-BS communication

### Testing Your Skill

1. Create the skill file in `/skills/your-skill-name/skill.md`
2. Update `anthropic-skills.json` to include your skill
3. Test it by asking Claude to read the skill file and adopt that persona
4. Iterate based on how well Claude performs the role

## Registering Skills

Add new skills to the `anthropic-skills.json` configuration:

```json
{
  "plugins": [
    {
      "name": "sales-consulting-skills",
      "skills": [
        "./skills/sales-consultant",
        "./skills/client-proposal",
        "./skills/discovery-call",
        "./skills/your-new-skill"  // Add here
      ]
    }
  ]
}
```

## Example Skill Ideas for Hard To Bear

### Future Skills You Could Build:

1. **Sales Pitch Reviewer** (`/pitch-review`)
   - Analyzes and critiques sales pitches
   - Identifies weak points and suggests improvements
   - Ensures alignment with buyer's journey

2. **Win/Loss Analyzer** (`/win-loss`)
   - Conducts win/loss interview analysis
   - Identifies patterns in won vs. lost deals
   - Generates actionable insights

3. **Sales Playbook Builder** (`/playbook`)
   - Creates structured sales playbooks
   - Documents process steps, criteria, and handoffs
   - Generates enablement materials

4. **Objection Database** (`/objections`)
   - Catalogs common sales objections
   - Provides proven response frameworks
   - Adapts responses to different industries

5. **Pipeline Health Auditor** (`/pipeline-audit`)
   - Analyzes pipeline data
   - Identifies stalled deals
   - Recommends action items

6. **Sales Email Reviewer** (`/email-review`)
   - Reviews and improves sales emails
   - Ensures clarity and call-to-action
   - Maintains Hard To Bear tone

## Advanced: Skills with Tools

Skills can specify which tools they need access to:

```markdown
## Tools You Can Use

When this skill is active, you have access to:
- Web search: For finding recent industry benchmarks
- Document creation: For generating proposals and templates
- Data analysis: For analyzing sales metrics and pipeline data
- Code execution: For running calculations or data processing
```

Claude will understand which capabilities are available and use them appropriately.

## Skill Versioning

As you improve skills, consider versioning:

```
skills/
├── sales-consultant/
│   ├── skill.md           # Current version
│   ├── CHANGELOG.md       # Track changes
│   └── v1.0.0/            # Archived versions
│       └── skill.md
```

## Troubleshooting

### Skill Not Working as Expected
1. Check the skill.md file is clear and specific
2. Ensure examples demonstrate the desired behavior
3. Verify the tone and style guidelines are explicit
4. Add more constraints if Claude is going off-track

### Skill Too Generic
- Add more specific frameworks and methodologies
- Include more detailed examples
- Tighten the boundaries of what the skill won't do
- Add industry-specific terminology and context

### Skill Conflicts
If multiple skills overlap:
- Clearly define when to use each skill
- Consider merging related skills
- Use sub-skills or capabilities within a single skill

## Contributing Skills

If you create valuable skills:
1. Document them thoroughly
2. Test with real use cases
3. Add examples of successful interactions
4. Update this guide with your new skill
5. Consider sharing with the sales community

## Resources

- **Anthropic Agent SDK**: [Official documentation](https://github.com/anthropics/anthropic-sdk-python)
- **Claude Code**: [CLI tool documentation](https://github.com/anthropics/claude-code)
- **Example Skills**: See `/skills/` directory for working examples

---

## Philosophy: Why Skills Matter

Generic AI assistants are jack-of-all-trades, master of none. Skills let you create **masters** of specific domains.

For Hard To Bear, this means:
- **Faster**: No need to explain sales consulting context every time
- **Better**: Embedded expertise and frameworks
- **Consistent**: Same quality output every time
- **Scalable**: Codify Russell's expertise for the whole team

Skills transform Claude from a general assistant into a **specialized sales consulting partner**.

---

**Need Help?** Contact russell@hardtobear.co.uk or raise an issue in this repo.
