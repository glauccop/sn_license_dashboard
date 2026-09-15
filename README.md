# License Allocation Dashboard

A scoped ServiceNow application that collects **license allocation on this instance once a day** and shows how it moves over time, per product suite, with the counting method visible next to every number.

> **This is not ServiceNow's official license measurement.** Official consumption is measured by ServiceNow through its own metering mechanisms, which may apply different criteria, measurement windows, and counting rules. Treat this dashboard as an internal tracking reference, not as a compliance position.

## Why it exists

ServiceNow reports license consumption to customers periodically, as a point-in-time document. Nothing on the instance keeps a history of it, so questions like *"was this suite already over entitlement three months ago, or did it just happen?"* have no answer locally. This application answers that by taking its own daily snapshot and keeping it.

## How it counts

There are two mechanisms, and the dashboard always says which one produced a number.

**1. Counts the products publish themselves.** Most licensing-aware products already write their own resource counts, contractual ratios and computed subscription units into a table on the instance — for example `itom_lu_ci_counts` for ITOM and `itam_licensing_resource_counts` for SAM and HAM. This application **reads and sums those published values**. It does not reimplement any contractual ratio, which matters because those ratios differ per product and change between SKU vintages.

Each product is described by a row in **Metric Sources**, so supporting a new product is a configuration change rather than a code change.

**2. Counts distinct users holding mapped roles.** ITSM and SPM have no such published table, so allocation is counted from `sys_user_has_role`. Two figures are recorded:

| Figure | Meaning |
|---|---|
| **Allocated** | Holds a mapped role, is active, has a user ID, and is not a web-service-only account |
| **Active (365d)** | The same, and has also logged in within the last 365 days |

The gap between them is allocation that could likely be reclaimed. The 365-day condition is the universe ServiceNow's own Subscription Management documentation describes, which makes the second figure the one to compare against an official report.

A user holding several mapped roles of the same suite counts **once** — allocation is per person, not per role.

## What ships, and what does not

Shipped: the suite catalogue, metric source configuration for the products above, and a default mapping of base ServiceNow ITSM and SPM roles.

**Entitlements ship empty.** Contract quantities are specific to your subscription, so enter them under **Entitlements** from your own documents. Without them the dashboard still shows consumption, just with nothing to compare it against.

Suites whose measurement could not be verified ship with collection **off**. Turn them on once you have checked what their source table contains on your instance.

## Installation

1. Install the application.
2. Open **License Allocation → Product Collection** and enable the suites you want collected.
3. Open **License Allocation → Entitlements** and enter your contracted quantities.
4. Run **License Allocation - Daily Collection** once manually, rather than waiting for the overnight run, to confirm it works.
5. Open **License Allocation → Dashboard**.

### Cross-scope reads

The collector reads tables owned by other applications. If a product's licensing table is restricted to its own scope, the collector records `Source not present` or a collection error for that suite instead of failing, and the instance may ask an administrator to approve cross-scope access. Nothing else stops working when one source is unavailable.

## Navigation

| Module | Purpose |
|---|---|
| **Dashboard** | Allocation per suite, with history and a period selector |
| **Product Collection** | The on/off switch per suite, plus its counting method and methodology text |
| **Metric Sources** | Which table each product publishes its counts to, and which fields to read |
| **Role to Suite Mapping** | Which roles consume which suite |
| **Entitlements** | Your contracted quantities |
| **Daily Snapshots** | The raw collected rows, for auditing any number on the dashboard |

## Dashboard behaviour

Period windows of 7, 14, 30, 60, 90, 180, 240 and 365 days, plus a custom date range. The series is drawn from the daily snapshots, so it only shows days on which collection actually ran — it does not interpolate.

Colours and logo come from the instance's own branding properties, so the page follows whatever theme the instance is running.

## Known differences from official measurement

These are expected, and are the reason for the disclaimer:

- **ITOM** is officially measured as an average of the last 90 daily counts. This dashboard shows the daily figure.
- **Vulnerability Response** subscription units are officially metered over a 30-day window.
- **Role inheritance** is counted here whenever a user effectively holds a mapped role. How ServiceNow treats inherited roles in its own counting is not publicly documented.
- **App Engine** attach SKUs are priced as a percentage of net spend, which is not a countable quantity, so no consumption figure is produced.
- Final reconciliation of any subscription happens on ServiceNow's side, not on the instance.

## Development

Built with the ServiceNow SDK (Fluent) and a React front end on a UI Page.

```bash
npm install
npm run build
npm run deploy
```

Source layout:

```
src/fluent/     application metadata: tables, roles, menu, REST API, scheduled job, seed data
src/server/     server-side logic: the collector Script Include and REST handlers
src/client/     the React dashboard
```

Customer usage reports and any other customer data belong in `reference-data/`, which is git-ignored. Do not commit them.
