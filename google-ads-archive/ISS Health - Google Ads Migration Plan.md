# Google Ads Migration Plan: ISS Health (iss.health)

Prepared by: Rocket Creative | Date: February 22, 2026  
Account: 720-866-3917 | Client: Dr. John Abrahams

1. ## Executive Summary

2. The current Google Ads account (720-866-3917) has accumulated severe policy violations across multiple domains, making it unreliable for continued advertising. The domain [cervical-center.com](http://cervical-center.com) has been flagged by Google as a “Compromised Site” and is also flagged for “Misrepresentation” and “Unreliable Claims.” The domain [lumbar-center.com](http://lumbar-center.com) is flagged for “Spam policies for Google Web Search.” Additionally, [nybrainspine.com](http://nybrainspine.com) ads are failing due to “Destination Mismatch” because the domain now redirects to iss.health.

The only campaign currently running successfully is the “New York Brain & Spine Surgery” Performance Max campaign on iss.health, which is generating 50K impressions and 1K+ clicks per month.

Our recommendation is to create a fresh Google Ads account dedicated exclusively to iss.health, migrate the necessary connected services (Google Business Profile, Google Analytics), and build clean campaigns free from the policy violation history that is poisoning the current account.

## 2\. Current Account Audit (Account 720-866-3917)

### 2.1 Campaign Status Overview

The account contains 7 campaigns. Here is the status of each:

1. New York Brain & Spine Surgery (PMax) \- ACTIVE, Eligible \- Uses iss.health \- WORKING  
2. 2\. Cervical Spine Center (PMax) \- Paused  
3. 3\. Cervical Spine Center \- Search \- Paused, ALL 23 ads disapproved (Compromised Site, Misrepresentation, Unreliable Claims)  
4. 4\. NYBS \- Search \- Paused, some ads disapproved (Destination Mismatch, Health in Personalized Advertising)  
5. 5\. Center for Cognitive Health \- Search \- Paused (uses [cognitive-centers.com](http://cognitive-centers.com))  
6. 6\. Spine Centers (form. lumb.) \- Search \- Paused, most ads disapproved (Spam policies for Google Web Search)  
7. 7\. Conversion Test Camp \- Paused, ALL ads disapproved (Compromised Site, Misrepresentation)

### 2.2 Connected Services

Google Analytics (GA4) \- 4 properties linked:

- Center for Cognitive Health (ID: 410154577\)  
- \- NY Brain and Spine / John Abrahams (ID: 355636048\)  
- \- Lumbar Center \- GA4 (ID: 327779513\)  
- \- Cervical Center \- GA4 (ID: 322586475\)

Google Business Profile \- 1 account linked:

- Business Profile: [johnmabrahams@gmail.com](mailto:johnmabrahams@gmail.com) (2 locations) \- Used in location assets

Google Tag: 1 untitled tag

Healthcare Certification: Application for iss.health was DISMISSED (can be resubmitted)

Advertiser Identity: Verified as “John Abrahams” (US)

### 2.3 The Redirect Problem ([nybrainspine.com](http://nybrainspine.com) \-\> iss.health)

Google Ads has a strict “Destination Mismatch” policy. When a user clicks an ad, the domain shown in the ad (display URL) must match the domain of the actual landing page. The NYBS \- Search campaign ads are set with [nybrainspine.com](http://nybrainspine.com) as the Final URL, but when Google crawls that URL, it redirects to iss.health. This causes an automatic disapproval.

This means: [nybrainspine.com](http://nybrainspine.com) cannot be used as an ad URL as long as it redirects to iss.health. All future ads must use iss.health directly as the Final URL and display URL. This is non-negotiable per Google policy. The business has rebranded from NY Brain & Spine Surgery to the Institute for Spine Surgery (ISS), and the ads must reflect the new domain going forward.

## 3\. Migration Plan \- Step by Step

### PHASE 1: Prepare the New Account (Day 1-2)

Step 1: Create a new Google Ads account

- Go to [ads.google.com](http://ads.google.com) and create a new account (client must do this themselves for security)  
- \- Use the same Google account ([johnmabrahams@gmail.com](mailto:johnmabrahams@gmail.com)) or create under a Manager (MCC) account  
- \- Set time zone to Eastern Time, currency to USD  
- \- IMPORTANT: Do NOT link or reference [cervical-center.com](http://cervical-center.com) or [lumbar-center.com](http://lumbar-center.com) in any way

Step 2: Complete Advertiser Identity Verification

- Google will require identity verification for the new account  
- \- Submit documents early as this can take 1-10 business days  
- \- Verify under “John Abrahams” (same as current account)

Step 3: Apply for Healthcare Advertiser Certification IMMEDIATELY

- Go to Admin \> Account \> Policy in the new account  
- \- Apply for healthcare advertising certification for iss.health  
- \- This is critical for running medical/healthcare ads  
- \- Apply on Day 1 \- do not wait. This was dismissed in the old account and must be completed in the new one  
- \- Google requires this for any ads related to medical procedures, doctors, or healthcare services

Step 4: Set up billing

- Client must add payment method themselves  
- \- Configure budget settings

### PHASE 2: Migrate Connected Services (Day 2-3)

Step 5: Link Google Business Profile to the new account

- The Google Business Profile ([johnmabrahams@gmail.com](mailto:johnmabrahams@gmail.com), 2 locations) is a SEPARATE product from Google Ads  
- \- It is NOT tainted by the old account’s policy violations  
- \- In the NEW account, go to Tools \> Data Manager \> Google Business Profile \> Link  
- \- Link the same GBP account with the 2 locations  
- \- Note: You can have the GBP linked to both old and new accounts simultaneously, or unlink from the old one first

Step 6: Link Google Analytics (GA4) \- ONLY the relevant property

- In the NEW account, go to Tools \> Data Manager \> Google Analytics (GA4)  
- \- Link ONLY the “NY Brain and Spine / John Abrahams” GA4 property (ID: 355636048\)  
- \- DO NOT link the Cervical Center GA4 (322586475) or Lumbar Center GA4 (327779513) properties  
- \- If there is a separate GA4 property for iss.health, link that instead  
- \- Enable “Import Google Analytics audiences” and “App and web metrics”

Step 7: Set up Google Tag / Conversion Tracking

- Install a new Google Ads conversion tag on iss.health  
- \- Set up conversion actions: phone calls, form submissions, appointment bookings  
- \- Configure the Google Tag in the new account (do not reuse the old “Untitled tag”)  
- \- Verify the tag is firing correctly on iss.health before launching campaigns

### PHASE 3: Build New Campaigns for iss.health (Day 3-5)

Step 8: Create campaign structure

- All campaigns must use iss.health as the Final URL domain  
- \- DO NOT use [nybrainspine.com](http://nybrainspine.com) (it redirects to iss.health and will trigger Destination Mismatch)  
- \- DO NOT use [cervical-center.com](http://cervical-center.com) or [lumbar-center.com](http://lumbar-center.com) under any circumstances

Recommended campaign structure for the new account:

Campaign 1: ISS \- Performance Max

- Replicate the working “New York Brain & Spine Surgery” PMax campaign  
- \- Final URL: [https://iss.health/](https://iss.health/)  
- \- Include all service areas, images, headlines, descriptions  
- \- Link Google Business Profile locations  
- \- Budget: $18/day (matching current working campaign)

Campaign 2: ISS \- Search (Spine Surgery)

- Ad groups for key services: spine surgery, disc herniation, spinal stenosis, ACDF surgery, cervical radiculopathy, lumbar procedures, pinched nerve treatment, neck surgery  
- \- Final URL: [https://iss.health/](https://iss.health/) (with relevant landing pages for each service)  
- \- Display URL: iss.health  
- \- Responsive Search Ads with 15 headlines and 4 descriptions per ad group  
- \- Target locations: Suffolk County, Fairfield County, Nassau County, Westchester, and surrounding NY/CT areas (matching current geo-targeting)

Campaign 3: ISS \- Search (Neurosurgeon/Doctor)

- Ad groups targeting doctor/surgeon searches: best spine surgeon, neurosurgeon near me, spine specialist, back surgeon  
- \- Final URL: [https://iss.health/](https://iss.health/)  
- \- Focus on Dr. Abrahams’ credentials and two-surgeon model

Step 9: Create ad assets (extensions)

- Sitelinks: Services page, About Dr. Abrahams, Locations, Contact/Schedule, Patient Reviews  
- \- Call extension: Use current phone number (720-866-3917 or 914-948-3008)  
- \- Location extension: Link from Google Business Profile  
- \- Callout extensions: “Two-Surgeon Model,” “Board Certified,” “High-Quality Clinical Outcomes,” etc.  
- \- ALL sitelink URLs must point to iss.health pages

Step 10: Set up keyword strategy

- Migrate relevant keywords from the old account’s working ad groups  
- \- Add negative keywords to prevent wasted spend  
- \- Start with exact and phrase match, expand to broad match once data accumulates

### PHASE 4: Launch and Transition (Day 5-7)

Step 11: Launch new campaigns in the new account

- Ensure healthcare certification is approved before launching (or launch PMax first which may not require it)  
- \- Start campaigns in the new account  
- \- Monitor for any policy disapprovals in the first 24-48 hours  
- \- Verify ads are serving and getting impressions

Step 12: Pause the PMax campaign in the OLD account

- Once the new account campaigns are live and confirmed running, pause the “New York Brain & Spine Surgery” PMax campaign in the old account (720-866-3917)  
- \- This prevents duplicate ads competing against each other  
- \- Do NOT delete the old account \- just pause everything and stop billing

Step 13: Monitor and optimize

- First 2 weeks: Monitor daily for policy issues, budget pacing, and ad approvals  
- \- Adjust bids, keywords, and ad copy based on performance data  
- \- Ensure conversion tracking is working correctly in the new account

### PHASE 5: Old Account Cleanup (Day 7+)

Step 14: Decommission the old account

- Pause ALL remaining campaigns in the old account (720-866-3917)  
- \- Unlink the Google Business Profile from the old account (optional, can remain linked to both)  
- \- Unlink GA4 properties from the old account (optional)  
- \- Do NOT cancel/close the account entirely \- keep it accessible for historical reporting  
- \- Remove billing/payment methods to prevent accidental charges

## 4\. Important Policy Notes

URL and Redirect Policy:

- Google Ads requires that the display URL domain matches the final landing page domain  
- \- If [nybrainspine.com](http://nybrainspine.com) redirects to iss.health, you CANNOT use [nybrainspine.com](http://nybrainspine.com) in any ad  
- \- All ads must use iss.health as both the Final URL and display domain  
- \- This applies to sitelinks, call extensions, and any other asset with a URL

Compromised Site Policy:

- [cervical-center.com](http://cervical-center.com) has been flagged as “Compromised” by Google, meaning Google detected security issues (malware, hacking, phishing, etc.)  
- \- Even if the site is cleaned up, the flag can take weeks to clear and requires a security review  
- \- Since you do not control this domain, it cannot be remediated from your end  
- \- This flag contaminates any ads pointing to the domain within any Google Ads account

Healthcare Advertising Restrictions:

- Healthcare ads in the US require advertiser certification  
- \- Certain healthcare topics are restricted from personalized advertising (remarketing, custom audiences)  
- \- The “Health in personalized advertising” flag on some NYBS ads is separate from the domain issues \- it means those ad topics cannot be used in audience-targeted campaigns

Why Starting Fresh is Better Than Cleaning Up:

- The old account has a documented history of policy violations across 4 domains  
- \- Google’s policy review system uses account-level trust signals \- an account with many violations receives heavier scrutiny  
- \- The healthcare application was already dismissed once in this account  
- \- A new account starts with a clean slate and no violation history  
- \- The only working asset (the PMax campaign) can easily be replicated in a new account

## 5\. Client Email Draft

—

Subject: Google Ads Account Update \- Recommended Plan of Action for ISS Health

Hi Dr. Abrahams,

I wanted to reach out with an update on your Google Ads account and outline our recommended next steps.

After a thorough audit, we identified that the current Google Ads account has accumulated several policy violations tied to the old [cervical-center.com](http://cervical-center.com) domain. Google has flagged that domain as a “Compromised Site,” which is a serious security-level flag. Since you no longer control that domain, we are unable to resolve the issue from our end, and unfortunately, its presence in the account history is creating friction for your other campaigns as well.

On top of that, the [nybrainspine.com](http://nybrainspine.com) domain now redirects to iss.health, which triggers Google’s “Destination Mismatch” policy. Google requires the domain shown in the ad to match the landing page, so any ads pointing to [nybrainspine.com](http://nybrainspine.com) will continue to be disapproved as long as the redirect is in place.

The good news is that your Performance Max campaign running on iss.health is working well, generating over 50,000 impressions and 1,000+ clicks per month. That tells us iss.health is in good standing with Google.

Our Recommendation:

We recommend creating a fresh Google Ads account dedicated exclusively to iss.health. This gives us a clean slate without the policy violation history weighing things down. We will migrate your Google Business Profile and Analytics connections to the new account, rebuild your campaigns using the iss.health domain, and apply for healthcare advertiser certification right away.

Your existing Google Business Profile (with both practice locations) and Google Analytics data will not be affected. These are separate services that we simply re-link to the new account.

We will keep the old account accessible for historical reference, but all active advertising will move to the new clean account.

What We Need From You:

1. Your approval to proceed with this plan  
2. 2\. You will need to create the new Google Ads account and add billing information (we can walk you through this, but for security, account creation and payment setup must be done by the account owner)

We are confident this is the best path to get your advertising running cleanly and efficiently for the Institute for Spine Surgery. Please let us know if you have any questions or would like to discuss further.

Best regards,  
\[Your Name\]  
Rocket Creative

—

## 6\. Timeline Summary

Day 1-2: Create new account, start identity verification, apply for healthcare certification  
Day 2-3: Link GBP, link GA4, set up conversion tracking and Google Tag on iss.health  
Day 3-5: Build campaigns, ad groups, ads, keywords, and extensions \- all using iss.health  
Day 5-7: Launch new campaigns, verify ads are approved and serving, pause old account PMax  
Day 7-14: Monitor performance, optimize bids, resolve any policy flags  
Day 14+: Ongoing optimization and scaling

Note: Healthcare certification approval can take 1-10 business days. The PMax campaign in the old account should remain active until the new account campaigns are confirmed live and serving. This ensures no gap in advertising coverage during the transition.

— END OF PLAN –-