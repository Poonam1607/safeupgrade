# SafeUpgrade – AI DevOps Agent (Cline-powered)

SafeUpgrade is an AI-powered DevOps agent that safely upgrades
JavaScript dependencies using policy-based reasoning.

The agent is implemented using **Cline CLI**, which acts as the agent
runtime and communicates with an LLM to reason about upgrade decisions.

---

## 🧠 Agent Architecture

This project follows a true AI agent pattern:

### Agent Runtime
- **Cline CLI** (LLM-powered reasoning loop)

### Tools
- `scan.js` – Observes dependency state
- `agent_decide.js` – Applies policies and decides upgrades
- `final_report.js` – Produces a structured decision summary

### Memory / Policy
- `rules.json` – Organization-level upgrade rules
  - Block major upgrades
  - Block canary / alpha versions
  - Framework dependency constraints (e.g. Next.js ↔ React)

---

## 🔁 Agent Decision Flow

1. Scan project dependencies
2. Detect outdated packages
3. Apply organizational rules
4. Decide:
   - Safe upgrade
   - Safe-minor downgrade
   - Block upgrade
5. Execute changes
6. Validate installation
7. Produce final report

All decisions are autonomous and explainable.

---

## 🤖 Where is the AI?

Cline CLI is responsible for:
- Interacting with the LLM
- Reasoning about actions
- Deciding when to invoke tools
- Interpreting outputs

This project exposes **DevOps tools** that the AI agent uses to
safely operate on real projects.

---

## ▶️ Run the Agent

```bash
docker build -t safeupgrade .
docker run --rm -v $(pwd):/app -v $(pwd)/output:/output safeupgrade
```