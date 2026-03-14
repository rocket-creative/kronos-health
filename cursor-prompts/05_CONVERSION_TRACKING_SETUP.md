# Cursor Prompt: Conversion Tracking & Analytics Setup (All 3 Domains)

## OBJECTIVE

Install and verify Google Ads conversion tracking and GA4 analytics on all three websites before Google Ads campaigns go live. This is a prerequisite for launch — without conversion tracking, we cannot measure ROI.

---

## ACCOUNT INFO

- **Google Ads Account:** 393-266-9621
- **Google Ads Login:** media@nybrainspine.com
- **GA4:** Verify if GA4 properties exist for each domain; create if needed

---

## DOMAINS TO CONFIGURE

| Domain | Phone | Form Submit Email |
|---|---|---|
| iss.health | 914-948-3008 | Contact form on site |
| cognifica.health | 914-948-3008 | appt@cognifica.health |
| kronoshealth.co | 914-705-6830 | info@kronoshealth.co |

---

## STEP 1: Google Ads Conversion Actions

Create these conversion actions in Google Ads (393-266-9621):

### Conversion Action 1: Form Submission — ISS
- **Name:** `ISS - Form Submission`
- **Category:** Submit lead form
- **Value:** $50 (estimate — one consultation can lead to $8,000-$15,000 surgery)
- **Count:** One (per click)
- **Attribution:** Data-driven (or Last click if not eligible)

### Conversion Action 2: Phone Click — ISS
- **Name:** `ISS - Phone Click`
- **Category:** Phone call leads
- **Value:** $25
- **Count:** One
- **Attribution:** Data-driven

### Conversion Action 3: Form Submission — Cognifica
- **Name:** `Cognifica - Form Submission`
- **Category:** Submit lead form
- **Value:** $40
- **Count:** One
- **Attribution:** Data-driven

### Conversion Action 4: Phone Click — Cognifica
- **Name:** `Cognifica - Phone Click`
- **Category:** Phone call leads
- **Value:** $20
- **Count:** One
- **Attribution:** Data-driven

### Conversion Action 5: Demo Request — Kronos (CognificaAI)
- **Name:** `Kronos - CognificaAI Demo Request`
- **Category:** Submit lead form
- **Value:** $100 (B2B lead, higher value)
- **Count:** One
- **Attribution:** Data-driven

### Conversion Action 6: Demo Request — Kronos (Synaptix)
- **Name:** `Kronos - Synaptix Demo Request`
- **Category:** Submit lead form
- **Value:** $100
- **Count:** One
- **Attribution:** Data-driven

### Conversion Action 7: Form Submission — Kronos (Revenue Cycle)
- **Name:** `Kronos - Revenue Cycle Lead`
- **Category:** Submit lead form
- **Value:** $75
- **Count:** One
- **Attribution:** Data-driven

### Conversion Action 8: Phone Click — Kronos
- **Name:** `Kronos - Phone Click`
- **Category:** Phone call leads
- **Value:** $30
- **Count:** One
- **Attribution:** Data-driven

---

## STEP 2: Install Google Ads Global Site Tag

Install the Google Ads tag (gtag.js) on ALL pages of each domain.

### Method: WordPress + Divi
The cleanest way to install on WordPress + Divi:

**Option A: Header injection via Divi Theme Options**
1. WordPress Admin → Divi → Theme Options → Integration
2. Paste the Google Ads global site tag in the `<head>` section
3. This installs on every page automatically

**Option B: Use a plugin (Google Site Kit or Insert Headers and Footers)**
1. Install "Insert Headers and Footers" plugin
2. Paste global site tag in header section
3. Verify with Google Tag Assistant

### Global Site Tag Code (get from Google Ads account):
```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=AW-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'AW-XXXXXXXXXX');
</script>
```

Replace `AW-XXXXXXXXXX` with the actual conversion ID from account 393-266-9621.

---

## STEP 3: Form Submission Conversion Events

For each form on the landing pages, fire a conversion event on successful submission.

### Method 1: Thank You Page Redirect
If forms redirect to a thank you page after submission:

```html
<!-- Place on thank-you page only -->
<script>
  gtag('event', 'conversion', {
    'send_to': 'AW-XXXXXXXXXX/CONVERSION_LABEL',
    'value': 50.0,
    'currency': 'USD'
  });
</script>
```

### Method 2: JavaScript Event on Form Submit
If forms don't redirect (AJAX submission, Divi form module):

```javascript
// Listen for Divi Contact Form submission
document.addEventListener('DOMContentLoaded', function() {
  // For Divi forms, listen for the success message
  const observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
      mutation.addedNodes.forEach(function(node) {
        if (node.nodeType === 1 && node.classList && node.classList.contains('et-pb-contact-message')) {
          if (node.querySelector('p') && !node.classList.contains('et-pb-contact-error')) {
            gtag('event', 'conversion', {
              'send_to': 'AW-XXXXXXXXXX/CONVERSION_LABEL',
              'value': 50.0,
              'currency': 'USD'
            });
          }
        }
      });
    });
  });

  const forms = document.querySelectorAll('.et_pb_contact_form_container');
  forms.forEach(function(form) {
    observer.observe(form, { childList: true, subtree: true });
  });
});
```

### Per-Domain Conversion Labels
Each conversion action has a unique conversion label. Map them:

| Domain | Page | Conversion Action | Label (get from GAds) |
|---|---|---|---|
| iss.health | /cervical-spine/ | ISS - Form Submission | AW-XXX/yyy |
| iss.health | /lumbar-spine/ | ISS - Form Submission | AW-XXX/yyy |
| iss.health | /meet-dr-abrahams/ | ISS - Form Submission | AW-XXX/yyy |
| cognifica.health | /tms-therapy/ | Cognifica - Form Submission | AW-XXX/zzz |
| cognifica.health | /memory-brain-fog/ | Cognifica - Form Submission | AW-XXX/zzz |
| cognifica.health | /concussion-tbi/ | Cognifica - Form Submission | AW-XXX/zzz |
| cognifica.health | /neuropsychological-testing/ | Cognifica - Form Submission | AW-XXX/zzz |
| kronoshealth.co | /revenue-cycle/ | Kronos - Revenue Cycle Lead | AW-XXX/aaa |
| kronoshealth.co | /cognificaai/ | Kronos - CognificaAI Demo | AW-XXX/bbb |
| kronoshealth.co | /synaptix/ | Kronos - Synaptix Demo | AW-XXX/ccc |

---

## STEP 4: Phone Click Tracking

Make all phone numbers tap-to-call links and track clicks:

```html
<a href="tel:9149483008" onclick="gtag('event', 'conversion', {'send_to': 'AW-XXXXXXXXXX/PHONE_LABEL'});">
  914-948-3008
</a>
```

Apply to:
- 914-948-3008 on iss.health and cognifica.health
- 914-705-6830 on kronoshealth.co

---

## STEP 5: GA4 Setup

### For each domain, ensure:
1. GA4 property exists (or create one)
2. GA4 measurement ID installed on all pages
3. Enhanced measurement enabled (scrolls, outbound clicks, site search)
4. Link GA4 to Google Ads account 393-266-9621
5. Import GA4 conversions into Google Ads if needed

### GA4 tag (add alongside Google Ads tag):
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

---

## STEP 6: HIPAA Compliance for Patient-Facing Sites

**CRITICAL for iss.health and cognifica.health:**

- Do NOT use Google Ads remarketing pixels on patient-facing healthcare sites
- Do NOT pass any patient PII (names, conditions, phone numbers) through conversion parameters
- Track ONLY the conversion event (form submitted, phone clicked) — not the content
- Do NOT enable Google Ads audience signals that could identify patients by health condition
- Review Google's Healthcare and Medicines advertising policy for compliance
- Consider using Google's Consent Mode v2 for privacy-compliant tracking

### Safe tracking example:
```javascript
// GOOD — tracks event only, no PII
gtag('event', 'conversion', {
  'send_to': 'AW-XXX/YYY',
  'value': 50.0,
  'currency': 'USD'
});

// BAD — never do this
gtag('event', 'conversion', {
  'send_to': 'AW-XXX/YYY',
  'patient_name': formData.name,     // NEVER
  'condition': formData.condition,     // NEVER
  'phone': formData.phone              // NEVER
});
```

---

## STEP 7: Verification Checklist

After installation, verify everything works:

### Google Tag Assistant (Chrome Extension)
- [ ] Visit each landing page with Tag Assistant active
- [ ] Verify Google Ads tag fires on page load
- [ ] Verify GA4 tag fires on page load
- [ ] Submit a test form — verify conversion event fires
- [ ] Click phone number — verify conversion event fires

### Google Ads Conversion Diagnostics
- [ ] Go to Tools → Conversions in Google Ads
- [ ] Each conversion action should show "Recording conversions" or "Tag active" within 24 hours of installation
- [ ] If showing "Unverified" or "No recent conversions" — troubleshoot tag placement

### GA4 Real-Time Reports
- [ ] Go to GA4 → Reports → Real-time
- [ ] Visit landing pages — verify events appear in real-time
- [ ] Submit test form — verify conversion event in real-time
- [ ] Check GA4 → Admin → Google Ads Linking — confirm linked

---

## NOTES

- All conversion labels (AW-XXX/YYY) must be obtained from the actual Google Ads account after creating the conversion actions
- The Google Ads account ID is 393-266-9621 — make sure you're creating conversion actions in this account, not the old 720-866-3917
- Test conversions may take up to 24 hours to appear in Google Ads reporting
- After verifying all tracking, notify George (georgestoff@rocketcreative.net) before unpausing campaigns
