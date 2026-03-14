# Dr. Abrahams / DJ Abrahams — Domain Compromise & Google Ads Situation Report

## Overview

During the Google Ads audit for account 720-866-3917, two domains tied to the account were found to be compromised. These domains are the root cause of the majority of the Google Ads issues in the account. This document covers everything discovered during the investigation, what needs to happen, and the options available to resolve it.

---

## The Compromised Domains

### cervical-center.com

The site has been hacked. The front-facing content has been replaced with an Indonesian gambling operation (Joker123, slot machine games, SLOT GACOR links, prices in Indonesian Rupiah, Lazada e-commerce content, and a "DAFTAR DISINI" / Register Here button for gambling). However, Dr. Abrahams' original practice content is still accessible deeper within the site — his photo, his name, and his spine surgery information (ACDF, cervical radiculopathy, cervical stenosis, etc.) are all still there, buried underneath the malicious content.

Google Safe Browsing has officially flagged cervical-center.com as unsafe. As of February 13, 2026, Google's warning states that the site contains pages that "try to trick visitors into sharing personal info or downloading software." Chrome blocks the site entirely with a security error.

The Wayback Machine shows the last legitimate version of the site was around February 2024, displaying the real Cervical Spine Center with Dr. Abrahams' photo and cervical spine treatment information. Sometime between then and February 2025, the domain was hijacked.

### lumbar-center.com

This domain is also showing Google Ads disapprovals for Spam policies for Google Web Search and Destination mismatch. This suggests the site may have similar compromise issues or its content has been altered. It needs to be investigated with the same urgency as cervical-center.com.

---

## Google Ads Impact

The hacked domains are directly responsible for the majority of the ad disapprovals across the account.

### cervical-center.com ad violations:

- **Cervical Spine Center - Search campaign:** ALL 23 ads disapproved
- **ALL sitelink extensions** on the Cervical Spine Center campaign disapproved for "Unreliable claims +3 more"
- Disapproval reasons: **Compromised Site**, **Misrepresentation**, **Unreliable Claims**
- Two campaigns tied to this domain, both paused

### lumbar-center.com ad violations:

- **Spine Centers (form. lumb.) - Search campaign:** MOST ads disapproved
- Disapproval reasons: **Spam policies for Google Web Search**, **Destination mismatch**
- Campaign paused, $5,840 spent historically

### How the violations interact:

These three violations (Compromised Site, Misrepresentation, Unreliable Claims) compound each other. A compromised site makes Google distrust the domain entirely, which makes the review system more likely to flag content as misrepresentation or unreliable claims. Fixing the Compromised Site issue first may actually help resolve or simplify the other two, because once Google trusts the domain again, the content review may be less aggressive.

### Account-level risk:

Google states that repeated Misrepresentation violations can escalate to account suspension with 7 days' notice. Leaving these unresolved puts the entire Google Ads account at risk, including the campaigns running on nybrainspine.com.

---

## Domain Registration Details

### cervical-center.com

- **Registrar:** Namecheap, Inc.
- **IP Address:** 104.21.25.82
- **Nameservers (DNS):** Cloudflare
  - danica.ns.cloudflare.com (162.159.38.187)
  - louis.ns.cloudflare.com (108.162.195.89)
- **Created:** 11/11/2021
- **Updated:** 9/27/2025 — this update date is suspicious and may indicate when the hackers made changes
- **Expires:** 11/11/2026
- **Domain Status:** clientTransferProhibited — the registrar lock is still on, which is good news. It means the hackers likely didn't steal the domain itself; they compromised the hosting/DNS.

### lumbar-center.com

- **Registrar:** Namecheap, Inc.
- Needs further WHOIS investigation to confirm full details

### Key finding: Neither domain is in the GoDaddy account

When investigating Dr. Abrahams' GoDaddy account, neither cervical-center.com nor lumbar-center.com were found. Both domains are registered through Namecheap, which means someone else — possibly a previous web developer, IT person, or marketing agency — set these up on a separate Namecheap account that Dr. Abrahams may not have access to or may not even be aware of.

This is a critical gap that needs to be resolved. We need Dr. Abrahams to confirm who originally registered these domains and whether he has any credentials or records related to a Namecheap account.

---

## What We Need From Dr. Abrahams

1. Do you or did your team ever own cervical-center.com and lumbar-center.com?
2. Did a previous web developer, IT person, or marketing agency set up these domains for you?
3. Do you have any records, emails, or invoices related to either domain or a Namecheap account?

---

## Recovery Plan: If They Have Namecheap Access

If Dr. Abrahams or someone on his team can locate the Namecheap account credentials:

1. **Log into Namecheap immediately.** Verify account ownership and check account activity for unauthorized changes.
2. **Check if the nameservers were changed.** The domain is currently pointing to Cloudflare. If the original site wasn't on Cloudflare, then the hackers changed the DNS to route traffic to their server. Change the nameservers back to whatever hosting the legitimate site was on.
3. **Change all Namecheap account passwords** and enable two-factor authentication. The hackers likely got in through the registrar account or the hosting control panel.
4. **Report the abuse to Cloudflare.** The hacked gambling content is being served through Cloudflare. File an abuse report at cloudflare.com/abuse — report it as a phishing/compromised site serving gambling spam.
5. **Restore the site from a clean backup.** If a backup exists from before the compromise (pre-September 2025 at minimum, ideally from the February 2024 timeframe when the Wayback Machine shows the last clean version).
6. **Run a full security audit** on the restored site — check for injected scripts, unauthorized redirects, outdated CMS/plugins, or any code referencing unknown external domains.
7. **Update all CMS software, themes, and plugins** to the latest versions.
8. **Submit a review through Google Search Console** to get the site removed from the Safe Browsing blocklist.
9. **Appeal the Google Ads disapprovals** using the "Made changes to comply with policy" option. Allow up to 72 hours for Google to re-crawl and re-evaluate.

---

## Recovery Plan: If They Don't Have Namecheap Access

If no one can locate credentials for the Namecheap account:

### Option 1: Reclaim through Namecheap Support

Contact Namecheap support directly and prove domain ownership. They will typically require:

- The original registration email address
- Government-issued ID matching the WHOIS registrant name
- Past invoices or receipts from Namecheap
- Any previous correspondence related to the account

Namecheap support is live-chat based and generally responsive.

### Option 2: File Cloudflare Abuse Report

File an abuse report at cloudflare.com/abuse. Report the site as compromised/serving phishing and gambling spam. Cloudflare can take action on their end to disrupt the malicious content even before domain control is regained.

### Option 3: ICANN WHOIS Dispute

If Namecheap won't cooperate and the registrant info was changed by hackers, file a WHOIS Inaccuracy Complaint through ICANN at icann.org/compliance/complaint. This puts pressure on the registrar to investigate and can force corrections to registration data.

### Option 4: Google Safe Browsing Report

Even without domain access, the site can be reported through Google's Safe Browsing report page to ensure the warning stays active and visitors remain protected.

### Option 5: Abandon and Replace (Last Resort)

If the domains truly cannot be recovered after exhausting all options above, the fallback is to:

- Abandon cervical-center.com and lumbar-center.com
- Register new clean domains (e.g., cervicalspinecenter.com, lumbarspinecenter.com, or similar)
- Rebuild the landing pages on the new domains
- Update all Google Ads campaigns to point to the new clean domains
- This can sometimes be faster than a protracted domain dispute

---

## Recommended Fix Sequence (Once Domains Are Recovered)

1. Fix the security issues on cervical-center.com (Compromised Site) first
2. Get the site cleared through Google Search Console / Safe Browsing
3. Audit and clean up all content on the site (Misrepresentation + Unreliable Claims)
4. Rewrite ads and sitelinks to comply with Google's healthcare advertising policies
5. Appeal all disapprovals at once after everything is fixed

---

## Going Forward: Best Practices

- Keep the CMS and all plugins updated at all times
- Set up email notifications in Google Search Console to catch security issues early
- Consider adding a Web Application Firewall (WAF) through services like Cloudflare or Sucuri
- Ensure all domains are registered under accounts that Dr. Abrahams or his team controls directly
- Enable two-factor authentication on all registrar and hosting accounts
- Maintain regular backups of all websites

---

## Other Google Ads Issues (For Reference)

While the domain compromise is the most pressing issue, the audit also identified these additional problems in the account:

- **Zero conversions on active spend:** The only active campaign ("New York Brain & Spine Surgery") spent $632.79 in the last 30 days with zero conversions
- **Active campaign is a Smart campaign** with almost no control over keywords, bids, audiences, or placements
- **Wrong bid strategy:** Using Maximize Clicks instead of Maximize Conversions or Target CPA
- **Conversion tracking is broken or incomplete:** No call conversion action, no enhanced conversions, no measurement features set up
- **No audience targeting or remarketing**
- **No ad schedule set** — ads running 24/7 including low-quality hours
- **All keywords are exact match only** — missing close variant traffic
- **Location targeting inconsistencies** — including a test campaign targeting an Arizona ZIP code
- **$5,420.49 historically spent** on the Cervical Spine Center Smart campaign with only 3 conversions at $1,806.83 per conversion
- **Draft Performance Max campaign** never completed
- **Call-Only ads being deprecated** — need to be updated to call assets by February 2027

The full audit report covers all of these in detail with specific recommendations and priority tiers for fixing them.
