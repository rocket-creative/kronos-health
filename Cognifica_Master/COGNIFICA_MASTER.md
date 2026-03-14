# Cognifica — Master Reference Document

**Last Updated:** March 10, 2026
**Compiled from:** All project documents, email communications, and deliverables

---

## 1. Brand Overview

**Entity:** Cognifica (formerly "Center for Cognitive Health")
**Parent Company:** Kronos Health
**Domain:** cognifica.health
**Contact Email:** appt@cognifica.health / info@kronoshealth.co
**Phone:** 914-948-3008

### Office Locations

- **West Harrison, NY** — 244 Westchester Avenue, Suite 209, West Harrison, NY 10604
- **Aquebogue, NY** — 508 Main Street, Office 2, Aquebogue, New York 11931
- **Stamford, CT** — 1100 Bedford St, First Floor, Stamford, CT 06905

### Brand Identity

- Primary color: #333B94 (deep indigo)
- CTA button: #5E89FB (periwinkle blue)
- Submit: #4ECFA0 (mint green)
- Accent: #6C4DB0 (medium purple)
- Fonts: Work Sans (body), IBM Plex Sans Condensed (H2), Open Sans (nav)
- Platform: WordPress + Divi Builder
- Copyright: "2025 Center For Cognitive Health"

### Social Media

- Instagram: @cognifica.health
- LinkedIn: linkedin.com/company/cognificahealth (42 followers, listed as Neuropsychology)

### Hosting & Access

- Hosted with GoDaddy (domain registered there)
- 2-step auth via Dr. Abrahams' phone number
- Previous developer (Jonathan Braden) set up WordPress admin access

---

## 2. Two Product Lines Under Cognifica

Cognifica operates two distinct product lines:

### A. Cognifica Health — Clinical Neuropsychology Practice

The original patient-facing practice offering cognitive health evaluations, neuropsychological testing, and treatment for conditions including concussion/TBI, cognitive dysfunction, chronic pain, anxiety, depression, and PTSD. Services include virtual evaluations, home therapy programs, and automated digital evaluations.

### B. CognificaAI — Employer Mental Health Hub (B2B SaaS)

A workplace mental health platform sold to employers that combines anonymous self-assessments, interactive digital support, computerized cognitive remediation, and optional access to licensed mental health professionals. This is the newer, higher-growth product being actively developed and marketed.

---

## 3. CognificaAI — Employee Mental Health Hub (Full Product Spec)

### Positioning

"Intelligent Mental Health Screening & Risk Stratification for Employers"
"Smarter Mental Health Support for the Modern Workforce"

CognificaAI is an employer-focused mental health platform designed to proactively assess, stratify, and support employee mental wellness using validated clinical tools and intelligent risk modeling.

### The Market Problem

- Mental health and substance use issues cost New York employees $79.4 billion in lost income, averaging more than $12,700 per affected worker over five years (Renaissance Recovery survey)
- 1 in 6 employees is experiencing moderate-to-severe anxiety at any time
- EAP utilization rates average 3-6% — meaning 94-97% of employees with a mental health need go untreated
- Employers typically learn about mental health issues only when employees quit or break down

### How CognificaAI Works

**Step 1 — Evidence-Based Screening**
Employees complete clinically validated assessments via secure link (web or mobile, no app required, under 10 minutes):

| Assessment | What It Measures |
|---|---|
| PHQ-9 | Depression (Patient Health Questionnaire) |
| GAD-7 | Anxiety (Generalized Anxiety Disorder Scale) |
| PSQI | Sleep Quality (Pittsburgh Sleep Quality Index) |
| DAST-10 | Substance Use Risk (Drug Abuse Screening Test) |
| AUDIT | Alcohol Use Risk (WHO Alcohol Use Disorders ID Test) |
| PCL-5 | PTSD Symptoms (PTSD Checklist — DSM-5) |

**Step 2 — Proprietary Risk Scoring**
CognificaAI integrates assessment results into a dynamic composite mental health risk score that:

- Stratifies employees into risk tiers (Low, Moderate, Elevated, High)
- Identifies emerging concerns early
- Flags high-risk responses requiring immediate follow-up
- Guides referral pathways

**Step 3 — Smart Referral & Escalation Pathways**

| Risk Level | Response |
|---|---|
| Low Risk | Self-guided digital support, psychoeducation, wellness tips |
| Moderate Risk | Referral to mental health professionals, targeted self-help |
| Elevated Risk | Automated referral to licensed mental health professional with direct booking |
| High Risk / Crisis | Immediate connection to 24/7 crisis support, clinical escalation protocol activated |

**Step 4 — Employer Dashboard (Anonymized)**
HR and wellness teams access HIPAA-compliant dashboard showing:

- Workforce mental health trends
- Engagement rates
- Risk distribution
- Program utilization
- Depression, Anxiety, Sleep, Alcohol Abuse, Substance Abuse, PTSD, and Workplace Satisfaction metrics
- Never individual-level or identifiable data

### Mental Health Escalation Protocol

1. **Automated In-App Escalation** — When a user's responses cross a risk threshold, the Clinical Team is alerted in real-time to a designated crisis counselor (not the employer), initiating follow-up within minutes
2. **Live Chat** — Embedded licensed crisis counselor available 24/7 (text-based via Crisis Text Line API integration)
3. **Warm Handoff to 988 or Emergency Services** — Platform counselor connects with user first, then bridges them to 988 or local emergency services, staying on the line during handoff
4. **Scheduled Safety Check-Ins** — After high-risk response, app automatically schedules check-ins within 24-48 hours via counselor, chatbot, or push notification, with escalation if no response

### Additional Features

- **Computerized Cognitive Remediation** — Brain exercises for focus and mood support
- **AI Chatbot** — Simple interactions and guided meditation
- **Therapist Matching** — Licensed professionals matched based on assessment responses (not generic provider lists)
- **Mobile-First Design** — Optimized for frontline and non-desk workers

### Employee Onboarding

Employers upload employee roster via CSV or manually. Employers choose which assessments to deploy, over what time period and frequency. Minimum 25 employees per department for divisional reporting; otherwise grouped as one unit.

### Weekly Check-In Questions (12 items)

1. Are you having thoughts of hurting yourself or ending your life right now?
2. Do you have access to anything you could use to hurt yourself?
3. On a scale of 1-10, how safe do you feel right now?
4. How would you describe your mood over the past 7 days? (Same / Better / Worse)
5. Have you felt completely hopeless this week?
6. Have you been able to talk to anyone you trust this week?
7. Have you been able to sleep, eat, and take care of basic daily needs?
8. Have you been able to go to work or keep up with daily responsibilities?
9. Have you used any alcohol or substances to cope this week?
10. Have you been able to take medications as prescribed?
11. Have you had contact with your therapist, doctor, or care team?
12. Is there anything getting in the way of you getting the support you need?

### User Consent Framework

Full informed consent document covers: voluntary participation, confidentiality limits, HIPAA protections, AI tool disclaimers, crisis disclaimers (911/988), data usage, technology requirements, and withdrawal rights. Employer cannot see individual sessions, PHI, therapy notes, or symptom scores. Confidentiality may be limited for imminent risk of harm, suspected abuse/neglect, or court orders.

### Privacy Architecture

- Employer receives ONLY anonymized, aggregated insights
- No names, messages, scores, or identifiers accessible to employer
- Platform follows clinically governed escalation protocol managed by vendor, not employer
- Employers can opt out of seeing any employee data entirely
- Individual disclosures remain confidential unless imminent risk
- Not a monitoring or compliance tool
- HIPAA and applicable state privacy law compliant

---

## 4. HR Leader Feedback — Customer Engagement Report

**Interviewed:** 5 HR leaders across Northwell Health, P&G Memorials, and YMCA

### Key Findings

**All 5 leaders** saw strategic value in the platform
**All 5** raised concerns about liability or crisis response
**4 of 5** flagged low clinician/frontline engagement risk
**3 of 5** requested therapist matching over resource lists

### Critical Themes

1. **Employees must see it as a benefit, not a monitoring tool** — Messaging must lead with "this is for you," not "this helps your company." Data analysis must be handled by neutral third party, not HR.

2. **Confidentiality is the gating requirement for trust** — Employees in high-sensitivity environments won't participate if they suspect HR can access individual data. Mobile-first app format seen as more trustworthy than desktop.

3. **Crisis response needs a real protocol, not just a hotline** — Most consistently cited barrier to purchase. Automated escalation that contacts appropriate authorities is required. Documented active crisis response plan is a sales prerequisite.

4. **Personalized follow-up drives adoption; generic tools do not** — Therapist matching based on assessment responses was the most-requested differentiator. Chatbot-guided meditation warmly received.

5. **Frontline and clinician engagement is a known challenge** — Healthcare workers have limited screen time, non-desk roles, survey fatigue. Self-reported data may lack reliability when employees rush through. Design must account for real work conditions.

### Respondent Details

| Name & Title | Organization | Primary Concern |
|---|---|---|
| Samantha Oswald, HR Total Rewards Liaison | Northwell Health | Liability if self-harm disclosed; clinician engagement |
| Melanie Trudel, Benefits Program Manager | Northwell Health | Trust barriers; liability if substance abuse reported |
| Dana Montaruli, Sr. Program Manager HR & Wellness | Northwell Health | Low frontline participation; data reliability |
| Mary Bianculli, Director | P&G Memorials | Platform perceived as monitoring tool; third-party data handling |
| Tina Norbut, Director Youth Programs & Staff | YMCA | Crisis liability; need for automated escalation beyond hotlines |

### Strategic Recommendations

1. **Reframe all messaging around employee benefit** — Lead every touchpoint with what the employee gets. Remove any language that could read as employer oversight. Third-party data stewardship must be explicit and prominent.

2. **Build and publish a documented crisis response protocol** — Define escalation steps: what triggers an alert, who is notified, what actions are taken, within what timeframe. Make available during sales process.

3. **Make therapist matching a flagship feature** — Replace generic provider lists with matching flow connecting employees to licensed therapist based on survey responses.

4. **Design for frontline, non-desk access from day one** — Optimize for mobile, short interactions, push notifications, and asynchronous self-care tools.

### Recommended Messaging Pivots

| Instead of... | Try... |
|---|---|
| "Gives leadership visibility into team mental health" | "Helps your people get support before they hit a wall — completely private, completely theirs" |
| "Aggregated employee wellness data" | "Understand what your workforce needs, without ever seeing individual data" |
| "Comprehensive mental health platform" | "Your personal mental health companion — matched support, self-care tools, and crisis backup when you need it" |
| "Monitor burnout risk across departments" | "Give every employee a space to check in and get real help — on their terms" |
| "Built-in crisis escalation" | "If someone needs urgent help, we don't leave them with a phone number — we make sure help finds them" |

### Bottom Line from HR Leaders

They would consider purchasing — but only if: employees genuinely feel it is built for them, confidentiality is ironclad and demonstrable, and crisis scenarios have a real response plan. These are the baseline for a conversation.

---

## 5. Cognifica Health Clinical Practice — Existing Website Content

### Conditions Treated

**Neurological:** TBI, stroke, MS, Parkinson's, epilepsy
**Cognitive:** Dementia, Alzheimer's, cognitive decline
**Mental Health:** Anxiety, depression, PTSD, ADHD
**Other:** Long COVID, chronic fatigue, chronic pain

### Services

- Neuropsychological evaluations (3-6 hours)
- Virtual evaluations (telehealth)
- Home therapy programs
- Automated digital evaluations
- EEG monitoring
- Cognitive training
- Personalized lifestyle plans

### Team

- Dr. John M. Abrahams — Neurosurgeon (founder)
- Dr. Susan Mogan — PMHNP
- Juliet Mott — Operations

### Insurance

Accepts Medicare, Tricare, Workers' Compensation, No-Fault insurance, and various commercial plans.

### Website Structure (Current)

6 pages: Homepage, Team, Conditions We Treat, Brain Health and Wellness, Consults, News

---

## 6. Competitive Landscape (from Deep Dive)

### TMS Therapy Competitors — Westchester / Hudson Valley

| Competitor | Location | Key Threat |
|---|---|---|
| Clearwave Mental Health | New Rochelle, Valhalla, Latham | Multiple locations, TMS + Spravato, established since 1996 |
| WorthyMind Practice | Tarrytown | 800+ patients, aggressive SEO |
| Cordial Psychiatry | Westchester area | Newer, SEO-optimized |
| Aurora Wellness | White Plains | Spravato-focused, close to West Harrison |

### Key Opportunity

Aquebogue / East End Long Island has almost zero local TMS or Spravato competition — this is the biggest market opportunity.

---

## 7. Google Ads Strategy Summary

### Recommended Budget: $3,000-$5,000/month

- 50% TMS campaigns (highest revenue per patient)
- 25% Concussion care
- 15% Spravato (ramp with Aquebogue launch)
- 10% General mental health / brand awareness

### Patient Lifetime Values

- TMS: $8,000-$15,000+ per patient
- Spravato: $5,000-$10,000+ per year
- Concussion: $1,500-$5,000 per patient

### Critical Compliance Notes

- LegitScript certification needed for Spravato (Schedule III controlled substance)
- Cannot target users based on health conditions in personalized ads
- Spravato REMS certification required for all healthcare settings

---

## 8. Social Media Content (Cognifica-Specific Posts)

From the 60-post social media campaign deck, Cognifica has 20 dedicated posts covering:

- CognificaAI employer mental health platform positioning
- Evidence-based screening tools (PHQ-9, GAD-7, etc.)
- Risk stratification and care pathways
- Privacy and confidentiality messaging
- Crisis response capabilities
- ROI for employers
- EAP comparison and differentiation
- Frontline worker access
- Therapist matching features

Posting cadence recommended by Dr. Abrahams: 2-3 posts per week for Cognifica Health.

---

## 9. Website Update Instructions (from Dr. Abrahams, March 10, 2026)

Dr. Abrahams requested the Kronos Health site be updated to include CognificaAI and Synaptix as services. For CognificaAI specifically:

- Add CognificaAI as a service under Kronos Health navigation
- Include DEMO Link with form (Name, Phone, Email, Organization) sending to info@kronoshealth.co
- Full product copy for CognificaAI section provided in "Kronos Health Site Update 030326.docx"

### CognificaAI Webpage Mockup

A full single-page HTML mockup has been created (cognifica_ai_page.html) featuring:

- Sage/cream color palette with Playfair Display + Mulish fonts
- Hero with assessment dashboard visual
- Trust bar with statistics
- "The Challenge" problem statement section
- 5-step "How It Works" walkthrough
- Clinical instruments grid (6 assessments)
- Risk stratification model with 4 tiers
- Employer value proposition cards
- CTA section + footer

---

## 10. Source Documents Index

| Document | Type | Key Content |
|---|---|---|
| Cognifica AI MHH.docx | Product spec | Full Mental Health Hub product document with features, FAQ, consent, weekly check-ins |
| HR_Feedback_Summary.docx | Research | 5 HR leader interviews — insights, themes, strategic recommendations |
| cognifica_ai_page.html | Web mockup | Single-page CognificaAI marketing site concept |
| Cognica Health Deep Dive.md | Strategy | Google Ads, SEO, competitive landscape, budget recommendations |
| socialmedia-camp-1 (1).docx | Content | 20 Cognifica social posts from 60-post campaign deck |
| Kronos Health Site Update 030326.docx | Instructions | Dr. Abrahams' CognificaAI copy for Kronos site |
| cognifica.health/ folder | Site archive | Current website content, brand sheet, rebuild prompts |
| Dr. Abraham's Accounts.md | Access | Login credentials and hosting info |
| DJ_Abrahams_Domain_Situation_Report.md | Technical | Domain compromise report (cervical-center.com, lumbar-center.com) |
