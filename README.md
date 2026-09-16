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

A user holding several mapped roles of the same suite counts **once** — allocation is per person, not per role. A user who qualifies as both a Fulfiller and a Business Stakeholder counts only as a Fulfiller, per ServiceNow's own definition of the two (a Fulfiller is any user entitled to more than a Business Stakeholder).

Opening a role-based suite on the dashboard also shows a **By role** breakdown (e.g. `itil`, `sn_incident_write`, `sn_change_read`). These rows are deliberately not deduplicated against other roles of the same type — a user holding two mapped Fulfiller roles appears under both, matching how the source usage report itself breaks out consumption per role. A Business Stakeholder role is the exception: it excludes anyone already counted as a Fulfiller above, for the same mutual-exclusion reason as the summary.

Security Incident Response has no product-published licensing table on this instance, so it is counted by role like ITSM and SPM — even though its own SKU is contracted as Unrestricted User (every active user, regardless of role). The dashboard shows the narrower, role-based figure and says so in its methodology text, since it is far more informative than "every active user in the instance."

## What ships, and what does not

Shipped: the suite catalogue, metric source configuration for the products above, and a default mapping of base ServiceNow ITSM and SPM roles.

**Entitlements ship empty.** Contract quantities are specific to your subscription, so enter them under **Entitlements** from your own documents. Without them the dashboard still shows consumption, just with nothing to compare it against.

Suites whose measurement could not be verified ship with collection **off**. Turn them on once you have checked what their source table contains on your instance.

## Access control

The menu and every module are gated to the platform **`admin`** role, and each of the five tables has its own ACL requiring it — the app does not rely on the platform's generic wildcard ACL, even though that happens to also require `admin` today. The REST API the dashboard reads from has its own `admin`-only ACL as well; without it, any authenticated internal user could call the endpoints, since the OOB default REST ACL only blocks *external* users.

Two roles ship with the app (`x_snc_lic_alloc.admin`, `x_snc_lic_alloc.viewer`) as a documented extension point, not wired into any gating yet — start there when you want to open access to product-specific admin roles (`usage_admin`, `itil_admin`, `sam_admin`, etc.) instead of platform `admin`.

## Appearance

Colours are the app's own configuration, not the instance's Next Experience theme — a generic, shareable app should not default to any one customer's brand. Two system properties control it:

| Property | Purpose | Default |
|---|---|---|
| `x_snc_lic_alloc.theme.primary` | Header background | `#1f2933` |
| `x_snc_lic_alloc.theme.accent` | Charts and highlights | `#3d68c4` |

Set these per instance to match the customer's brand. The logo still follows the instance's own `glide.product.image`.

## Language

The dashboard follows the ServiceNow session's language. Today it ships English (the base language) and Brazilian Portuguese, with Portuguese covering:

- Every fixed label, header, and message the React dashboard itself draws (`src/client/i18n.ts`).
- Suite names, methodology text, and role-to-application labels, translated server-side (`src/server/handlers/dashboard.ts`) rather than through ServiceNow's own per-record translation table (`sys_translated_text`) — scoped-app code is blocked from writing that table even with an explicit cross-scope create/write privilege granted, so this keeps translation entirely inside app code instead of depending on an instance admin approving cross-scope access on every install.
- Table, field, and choice labels for the app's own 5 tables (`sys_documentation` / `sys_choice`, seeded via `src/fluent/seed/dictionary-pt-br.now.ts` and `choices-pt-br.now.ts`), so the native list and form views are also translated. SKU/unit-of-measure vocabulary (Subscription Unit, Fulfiller, Business Stakeholder, etc.) is left in English on purpose, since those are the literal terms on a ServiceNow quote.

**Known gap:** the Application Navigator entries (the "License Allocation" menu and its 6 modules) stay in English regardless of session language — the same `sys_translated_text` restriction above blocks translating them, and there is no app-code-only workaround for platform-rendered navigation.

Adding another language means extending `Lang`/`STRINGS` in `src/client/i18n.ts`, the `SUITE_TEXT_PB`/`APPLICATION_LABEL_PB`/`SOURCE_LABEL_PB`-style tables and `sessionLang()` in `dashboard.ts`, and re-running the dictionary/choice seed generator for that language's `sys_documentation`/`sys_choice` rows.

## Installation

1. Install the application.
2. Set `x_snc_lic_alloc.theme.primary` and `x_snc_lic_alloc.theme.accent` if you want the dashboard to match a specific brand.
3. Open **License Allocation → Product Collection** and enable the suites you want collected.
4. Open **License Allocation → Entitlements** and enter your contracted quantities.
5. Run **License Allocation - Daily Collection** once manually, rather than waiting for the overnight run, to confirm it works.
6. Open **License Allocation → Dashboard**.

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

## Known differences from official measurement

These are expected, and are the reason for the disclaimer:

- **ITOM** is officially measured as an average of the last 90 daily counts. This dashboard shows the daily figure.
- **Vulnerability Response** subscription units are officially metered over a 30-day window.
- **Role inheritance** is counted here whenever a user effectively holds a mapped role. How ServiceNow treats inherited roles in its own counting is not publicly documented.
- **App Engine** attach SKUs are priced as a percentage of net spend, which is not a countable quantity, so no consumption figure is produced.
- **Security Incident Response** is contracted as Unrestricted User (every active user of the instance), but shown here as role-based allocation — a much narrower and more useful figure. See "How it counts" above.
- Final reconciliation of any subscription happens on ServiceNow's side, not on the instance.

## Development

Built with the ServiceNow SDK (Fluent) and a React front end on a UI Page.

```bash
git clone https://github.com/glauccop/sn_license_dashboard.git
cd sn_license_dashboard
npm install
now-sdk auth --add <your-instance> --type basic
npm run build
npm run deploy
```

`now-sdk deploy` installs (or upgrades) the app directly on whichever instance you authenticated against — there is no update set or XML to import by hand.

Source layout:

```
src/fluent/     application metadata: tables, roles, menu, REST API, scheduled job, seed data
src/server/     server-side logic: the collector Script Include and REST handlers
src/client/     the React dashboard
```

Customer usage reports and any other customer data belong in `reference-data/`, which is git-ignored. Do not commit them.

## Support & Contributing

Found a bug, have a question, or want a product added to "How it counts"? [Open an issue](https://github.com/glauccop/sn_license_dashboard/issues).

Contributions are welcome as pull requests. A couple of things that make a PR easier to review, given how this app is built:

- Metadata (`src/fluent/**/*.now.ts`) is Fluent — literal values only. The compiler rejects computed values, array indexing, and loops inside a `Record()`/builder call (`now-sdk build` will tell you immediately if you hit this).
- New licensed products go in `src/fluent/seed/sources.now.ts` as a new `Metric Source` row (table, field names, ratio) when the product already publishes its own subscription-unit counts — that's a data change, not a code change. A `counting_method` you haven't seen before is the only reason to touch `LicenseUsageCollector.server.js`.
- Run `npm run build` before opening a PR; it type-checks the whole app and catches most Fluent-specific mistakes.

## License

[MIT](LICENSE)
