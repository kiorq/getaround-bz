# Analytics Events

All GA4 events are tracked via `src/lib/analytics.ts`.

## Event Types

### CTA Clicks
- **Action:** `cta_click`
- **Category:** `engagement`
- **Label:** `{location}: {cta_label}`
- **Locations tracked:**
  - `hero` — Primary/secondary CTA buttons in hero section
  - `navbar` — CTA button in navigation
  - `footer` — CTA button in footer

### Navigation Link Clicks
- **Action:** `nav_click`
- **Category:** `engagement`
- **Label:** Link label (e.g., "Features", "How It Works", "FAQ")

### Signup Funnel Events
- **Action:** `signup_step`
- **Category:** `signup_funnel`
- **Label:** `step_{n}: {question}`
- **Value:** Step number

- **Action:** `signup_complete`
- **Category:** `signup_funnel`
- **Label:** `form_submitted`

- **Action:** `signup_error`
- **Category:** `signup_funnel`
- **Label:** `form_failed`

- **Action:** `signup_dropoff`
- **Category:** `signup_funnel`
- **Label:** `step_{n}: {question}`

### Section Views
- **Action:** `section_view`
- **Category:** `engagement`
- **Label:** Section identifier
