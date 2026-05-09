export const nusukPhases = [
    {
        id: 'nusuk.phase-docs',
        title: 'Phase 1 — Gather Your Documents',
        intro: 'Prepare everything digitally before opening the website. Incomplete or low-quality uploads are the leading cause of application rejection.',
        steps: [
            {
                id: 'nusuk.docs.passport',
                title: 'Passport — valid for at least 6 months beyond your Hajj return date',
                content: `Your passport must be valid for at least 6 months after your expected return from Hajj (typically through December 2026 for a Hajj 2026 trip).

Scan the biographical data page clearly. Accepted formats: JPG or PNG. Ensure all text is fully legible with no glare or shadows. Recommended scan size: approximately 800×400 pixels.

If your passport expires before that threshold, renew it before you start registration — this alone disqualifies your application.`,
                note: 'Double-check the expiry date right now. Passport renewals can take weeks or months.',
            },
            {
                id: 'nusuk.docs.photo',
                title: 'Personal passport-style photo — 200×200 px, white background',
                content: `Prepare a digital photograph meeting these exact specifications:
- Size: 200×200 pixels (PNG or JPG)
- Background: pure white
- Attire: formal and modest
- Face: fully visible, no glasses, no filters, looking straight at camera
- No hats or head coverings (for men) — sisters in hijab are fine

Use a photo editing app or an online resizer if your existing photo does not meet the size requirement. A rejected photo is one of the most common causes of a delayed application.`,
                note: 'The Nusuk system will flag photos with coloured backgrounds or that are the wrong dimensions. Get this right before you upload.',
            },
            {
                id: 'nusuk.docs.residence',
                title: 'Proof of residence (if your nationality differs from your country of residence)',
                content: `If you hold a passport from one country but are a resident of another (for example: a Pakistani national living in the UK, or a Moroccan national on a US Green Card), you must upload proof of your current residency.

Accepted documents typically include:
- Residence permit or permanent residency card
- Valid long-stay visa
- Green Card (USA)

Prepare a clear scan or photo. Nusuk uses your country of residence to determine which package quota you fall under, so this document directly affects which packages you can see.`,
                note: 'If you are a citizen of the country you live in, you can skip this step.',
            },
            {
                id: 'nusuk.docs.meningitis',
                title: 'Meningitis ACWY vaccination certificate',
                content: `A quadrivalent Meningococcal (ACWY) vaccination is mandatory for all international pilgrims. You will not be permitted to enter Saudi Arabia for Hajj without it.

Obtain the certificate from your GP or travel clinic and upload it during registration. Ensure the certificate shows:
- Your full name (matching your passport)
- The vaccine type: Meningococcal ACWY (quadrivalent)
- Date of vaccination

Other vaccinations (e.g. seasonal flu, COVID-19) requirements change annually. Check current Saudi Ministry of Health requirements before uploading.`,
                note: 'Book the vaccination appointment well in advance — GPs and travel clinics get busy as Hajj season approaches.',
            },
            {
                id: 'nusuk.docs.email',
                title: 'Set up a unique personal email address for each pilgrim',
                content: `Every individual registering for Hajj — including each adult family member — needs their own unique email address. You cannot share an email between two adults.

Requirements:
- Use a personal email (Gmail, Outlook, etc.) — not a work email you may lose access to
- Must be accessible while abroad (some corporate emails block overseas access)
- You will receive OTP verification codes to this address every time you log in

If you do not have a personal email address, create one now. If you are adding family members, ensure each person has their own.`,
                note: 'Write down the email and password somewhere secure. You will need these throughout the entire registration and booking process.',
            },
            {
                id: 'nusuk.docs.phone',
                title: 'Confirm your mobile phone can receive OTP messages',
                content: `Nusuk sends a one-time password (OTP) to your email and/or mobile phone for every login. Ensure:
- Your phone number is active and can receive messages internationally
- Your SIM is not blocked for international roaming SMS
- You have the phone with you during registration

Note the country code for your number — you will need to enter it with the international prefix (e.g. +44 for UK, +1 for USA).`,
            },
        ],
    },
    {
        id: 'nusuk.phase-account',
        title: 'Phase 2 — Create Your Account',
        intro: 'Use the Hajj website — not the Nusuk mobile app. The mobile app is for Umrah and Rawdah permits only.',
        steps: [
            {
                id: 'nusuk.account.go-to-site',
                title: 'Go to hajj.nusuk.sa on a desktop or laptop browser',
                content: `The platform for Hajj registration is hajj.nusuk.sa — this is distinct from the general Nusuk mobile app.

Important distinction:
- Nusuk mobile app → Umrah permits and Rawdah visits only
- hajj.nusuk.sa website → Hajj 2026 registration and package booking

Always use a desktop or laptop computer for registration. The document upload process is cumbersome on mobile and errors are harder to spot on a small screen.`,
                note: 'Bookmark hajj.nusuk.sa. Beware of fraudulent sites — the official URL is hajj.nusuk.sa only.',
                links: [{ label: 'Open hajj.nusuk.sa', url: 'https://hajj.nusuk.sa' }],
            },
            {
                id: 'nusuk.account.register',
                title: 'Click "Start Registration" and select "Individual Pilgrims"',
                content: `On the Nusuk Hajj homepage, click "Start Registration" (or "Register Now"). When prompted, select "Individual Pilgrims" (as opposed to group operators).

Select your country of residence from the dropdown — this determines your quota eligibility and which packages are visible to you.

Enter your unique personal email address. An OTP will be sent immediately — check your inbox (and spam folder).`,
            },
            {
                id: 'nusuk.account.password',
                title: 'Verify your email via OTP and create a strong password',
                content: `Enter the OTP (one-time password) sent to your email to verify your address.

Then create a secure password meeting these requirements:
- Minimum 8 characters
- At least one uppercase letter
- At least one lowercase letter
- At least one number
- At least one special character (e.g. ! @ # $)

Store your credentials securely — you will re-enter an OTP every time you log in. Losing access to your registration email can lock you out entirely.`,
                note: 'Use a password manager or write the password in a secure place. You will need to log in multiple times over several months.',
            },
        ],
    },
    {
        id: 'nusuk.phase-upload',
        title: 'Phase 3 — Upload Documents',
        intro: 'The system attempts to auto-extract your details from uploads. Always verify every field manually before proceeding.',
        steps: [
            {
                id: 'nusuk.upload.passport',
                title: 'Upload your passport biographical data page',
                content: `Upload a clear scan or high-quality photo of your passport's biographical data page (the page with your photo, name, date of birth, and passport number).

Format: JPG or PNG
Approximate size: 800×400 pixels

After upload, Nusuk's system will attempt to auto-read and populate your personal details. This OCR process is imperfect — proceed immediately to the next step.`,
            },
            {
                id: 'nusuk.upload.verify',
                title: 'Verify every auto-extracted field against your physical passport',
                content: `After the system reads your passport, check each field carefully:
- Full name (spelling, order)
- Date of birth (day, month, year)
- Passport number (every digit)
- Passport expiry date
- Nationality

Correct any errors manually before proceeding. Submitting an application with data that does not match your physical passport will cause your application to be rejected during verification.`,
                note: 'This is a critical step. An unnoticed typo — especially in name or passport number — means weeks of delay.',
            },
            {
                id: 'nusuk.upload.photo',
                title: 'Upload your personal passport-style photo',
                content: `Upload your prepared 200×200 pixel photo with white background.

If the upload is rejected:
- Ensure the background is pure white (not off-white or grey)
- Re-check the dimensions — resize using a tool like Adobe Express, Canva, or any online photo resizer
- Ensure the file size is within the platform's limit (usually under 1 MB)`,
            },
            {
                id: 'nusuk.upload.residence',
                title: 'Upload proof of residence (if applicable)',
                content: `If required (see Phase 1), upload your proof of residency document.

Format: JPG, PNG, or PDF
Ensure the document is current, not expired, and clearly shows your name and country of residence.`,
                note: 'Citizens of their country of passport do not need this. Residents abroad (Green Card holders, UK residents with non-UK passports, etc.) must upload this.',
            },
        ],
    },
    {
        id: 'nusuk.phase-form',
        title: 'Phase 4 — Complete the Application Form',
        intro: 'Fill in all fields exactly as they appear on your passport. Inconsistencies cause verification failure.',
        steps: [
            {
                id: 'nusuk.form.personal',
                title: 'Complete personal details exactly as on your passport',
                content: `Fill in all personal information fields matching your passport precisely:
- Full legal name (do not use nicknames or shortened versions)
- Date of birth
- Place of birth
- Marital status
- Occupation / employment details
- Social status

The verification team will cross-reference these fields with your uploaded passport scan. Any discrepancy will cause rejection.`,
            },
            {
                id: 'nusuk.form.contact',
                title: 'Add contact details, address, and nearest embassy',
                content: `Provide your current residential address and contact information:
- Full address in your country of residence
- Mobile phone number with country code (e.g. +44 7700 123456)
- Emergency contact name and number
- Nearest Saudi embassy or consulate to your location

These details are used for visa processing and coordination. Ensure the phone number is one you can access during the registration period.`,
            },
            {
                id: 'nusuk.form.travel',
                title: 'Enter estimated travel details',
                content: `Provide your anticipated travel information:
- Estimated arrival date in Saudi Arabia
- Arrival method (air, land, sea)
- Departure airport or border crossing (if known)

These are estimates — your actual travel arrangements will be confirmed when you select a package. However, the system uses them to match you with appropriate package offerings.`,
            },
            {
                id: 'nusuk.form.health',
                title: 'Answer health and vaccination questions accurately',
                content: `Complete all health-related fields honestly:
- Any chronic medical conditions (diabetes, heart disease, respiratory conditions, etc.)
- Known allergies
- Current medications
- Meningitis ACWY vaccination status and date
- Any other vaccinations required that season
- Mobility or accessibility requirements (if any)

This information helps match you to packages with appropriate medical facilities in Mina and Arafah. Inaccurate health information can create problems during the pilgrimage.`,
                note: 'Pilgrims with mobility difficulties should indicate this now — some packages include wheelchair-accessible accommodation and transport.',
            },
        ],
    },
    {
        id: 'nusuk.phase-family',
        title: 'Phase 5 — Add Family Members (if applicable)',
        intro: 'If travelling with a spouse, Mahram, or family, add them through your account — do not create separate accounts.',
        steps: [
            {
                id: 'nusuk.family.add',
                title: 'Add family members through your profile (not separate accounts)',
                content: `In your profile, find the "My Family" or "Add Companion" section and add each person you are travelling with.

You can add up to 8 family members to a single account. Adding them to your account — rather than having them register separately — is critical because:
- It keeps the group linked for package booking
- The group visa is issued together
- You can book a single package for the whole group

Each family member will receive a verification link or code to link their own documents to your group.`,
                note: 'Do not ask family members to create their own independent accounts. Group visa issuance requires the group to be linked in the system.',
            },
            {
                id: 'nusuk.family.documents',
                title: "Complete each family member's profile documents",
                content: `For each added family member, you will need to upload the same set of documents:
- Passport bio page scan
- Passport-style photo (200×200px, white background)
- Proof of residence (if applicable)
- Health and vaccination information

Each family member must also have their own unique email address. The system will send them a verification link to confirm their association with the group.`,
                note: "Each family member's data must also be verified individually. Start this process early — one unverified family member delays the entire group's booking.",
            },
        ],
    },
    {
        id: 'nusuk.phase-submit',
        title: 'Phase 6 — Submit & Await Verification',
        intro: 'Verification can take 24 hours to several weeks. Monitor your profile status regularly.',
        steps: [
            {
                id: 'nusuk.submit.review',
                title: 'Review all information on the summary page',
                content: `Before submitting, the platform presents a full summary of your application. Review every field:
- Name spelling matches your passport exactly
- Passport number is correct
- Date of birth is correct
- Photo looks acceptable
- Family members are all listed correctly

This is your last chance to correct errors without re-submitting.`,
            },
            {
                id: 'nusuk.submit.submit',
                title: 'Accept terms and conditions and submit your application',
                content: `Read the terms and conditions (they include important information about package cancellations, Hajj regulations, and the Ministry's rights to modify arrangements).

Once satisfied, accept the terms and click "Submit Application."

Your status will immediately change to "Pending Verification." You will receive an email confirmation that your application has been received.`,
            },
            {
                id: 'nusuk.submit.await',
                title: 'Wait for "Audit Completed" and monitor your profile status',
                content: `Log in to hajj.nusuk.sa regularly and check your profile status. The stages are:
- Pending Verification → your application has been received
- Under Review → documents are being examined
- Audit Completed → you are approved and eligible to browse packages

Verification typically takes 24 hours to several weeks depending on the volume of applications. If your documents are rejected, you can upload corrected versions and resubmit.`,
                note: 'Check your spam/junk folder — the "Audit Completed" email may land there. You cannot book a package until this email arrives.',
            },
        ],
    },
    {
        id: 'nusuk.phase-booking',
        title: 'Phase 7 — Select & Book Your Package',
        intro: 'Packages release in phases and sell out fast — often through private provider channels before public listings appear. Start step 1 of this phase while you are still waiting for your audit.',
        steps: [
            {
                id: 'nusuk.booking.join-groups',
                title: 'Contact approved providers now and join their WhatsApp / Telegram groups',
                content: `Package releases on Nusuk happen in phases — and many packages are not announced publicly. Approved service providers often communicate availability directly to pilgrims who have already expressed interest, via private WhatsApp or Telegram broadcast groups.

If you are not in these groups when a new phase opens, you may not find out until the package you wanted is already sold out.

What to do while you are waiting for your audit to complete:
- Identify 2–3 approved Hajj service providers for your country/region
- Contact them directly (phone, email, or their website) and ask to be added to their WhatsApp or Telegram notification group
- Tell them your Nusuk registration is in progress and your country of residence
- Ask how many phases their package release is split into and when the next one is expected

UK pilgrims can search the Ministry of Hajj's list of approved UK operators. US pilgrims can check the ISNA Hajj Committee list. Other countries have similar official registries.`,
                note: 'Do this during your verification wait period — not after. By the time your audit is complete, the first round of packages may already be gone if you have not been following provider announcements.',
            },
            {
                id: 'nusuk.booking.categories',
                title: 'Understand the three package categories',
                content: `Nusuk offers three tiers. Choosing the right one depends on your budget and physical needs:

Standard: More affordable. Accommodation further from the Haram. Bus transport included. Suitable for pilgrims who are mobile and on a tighter budget.

Premium: Mid-range. Closer accommodation. Better transport options. Meals in Mina and Arafah may be included.

Luxury: Closest accommodation to the Haram. Premium services throughout. Air-conditioned tents in Mina/Arafah. Dedicated transport.

The category you prefer must be selected before the package listing opens (expected around 21 December 2025 for 2026 Hajj).`,
                note: 'Consider the physical demands. The distance from your hotel to the Haram matters greatly during Tawaf, especially for elderly pilgrims or those with health conditions.',
            },
            {
                id: 'nusuk.booking.shifting',
                title: 'Understand shifting vs non-shifting packages',
                content: `Packages are structured in two ways:

Non-shifting: You stay in a single hotel in Makkah for your entire stay, including before and after the Hajj days (8–13 Dhul Hijjah). More convenient — no mid-trip hotel move. Generally more expensive.

Shifting: You stay in one hotel before the Hajj days, then relocate to different accommodation after. This can offer better value, but involves packing up and moving during the busiest period.

For first-time pilgrims or elderly pilgrims, non-shifting is generally recommended for its simplicity.`,
            },
            {
                id: 'nusuk.booking.ewallet',
                title: 'Activate and top up the Nusuk e-wallet',
                content: `Before you can book a package, you must activate the Nusuk integrated e-wallet and add funds.

Steps:
- Navigate to the wallet section of your profile
- Activate the wallet (first-time setup)
- Add funds using a debit/credit card or bank transfer

Only top up the amount you need for the specific package you intend to book. Funds are held in the wallet until payment is confirmed. The wallet uses digital payment and the charge happens at the moment of booking — packages often sell out within hours.`,
                note: 'Have your card ready before packages open. The time between "packages open" and "your preferred package sells out" can be very short.',
            },
            {
                id: 'nusuk.booking.select',
                title: 'Browse packages and select the right one for your group',
                content: `Once packages are open, browse available offerings from approved service providers. Compare:
- Hotel name and distance from the Haram (check on Google Maps)
- Meals: are breakfast and dinner included? Are meals provided in Mina and Arafah? (Mina meals matter greatly)
- Transport: bus only, or does it include the Hajj train (Al-Mashaaer Railway)?
- Group size and gender arrangements
- Madinah visit included or optional?

Select your package and confirm. The system will deduct the cost from your e-wallet immediately.`,
                note: 'Check whether meals in Mina and Arafah are included — eating arrangements during the peak Hajj days significantly affect comfort.',
            },
            {
                id: 'nusuk.booking.confirm',
                title: 'Complete payment and save your booking confirmation',
                content: `After selecting your package, proceed to payment. The funds are deducted from your e-wallet.

Upon successful payment you will receive:
- Booking confirmation (with reference number)
- Detailed itinerary with hotel addresses, transport details, and key dates
- Visa issuance details (processed automatically by the system)

Download and save all documents. Print physical copies for travel — you will need these at airport check-in and border control.`,
                note: 'Save your booking reference number somewhere safe and separate from your phone — in case your device is lost or stolen during the pilgrimage.',
            },
        ],
    },
];

// Flat list for state management (progress tracking, IDs)
const _allSteps = nusukPhases.flatMap((p) => p.steps);

export const nusukSection = {
    id: 'nusuk',
    title: 'Nusuk Registration',
    intro: `Hajj 2026 registration for international pilgrims is done through hajj.nusuk.sa — the official Saudi Ministry of Hajj & Umrah platform. This is distinct from the Nusuk mobile app (which is for Umrah and Rawdah visits). Work through the 7 phases below in order. Tick each item as you complete it.`,
    appNote: `The Nusuk mobile app (iOS/Android) is for booking Umrah permits and Rawdah visits — not for Hajj registration. For Hajj 2026, use the website hajj.nusuk.sa on a desktop browser. These are separate platforms with separate login credentials.`,
    warning: `Nusuk's interface, document requirements, and key dates change each season. All dates and requirements shown here are based on Hajj 2025/2026 guidance — always verify the current requirements at hajj.nusuk.sa and with your country's Hajj authority before proceeding.`,
    phases: nusukPhases,
    steps: _allSteps,
};

// ============================================================
// Rawdah Permit — booked via the Nusuk MOBILE APP
// ============================================================

export const rawdahPhases = [
    {
        id: 'rawdah.phase-before',
        title: 'Phase 1 — Before You Arrive in Madinah',
        intro: 'You must book your permit before you arrive. Slots open 7–10 days in advance and are gone within minutes. Do not wait until you are at the hotel.',
        steps: [
            {
                id: 'rawdah.before.download',
                title: 'Download the Nusuk mobile app (iOS or Android)',
                content: `The Rawdah permit is booked through the Nusuk mobile app — not the hajj.nusuk.sa website. Download it now before your trip:
- iOS: search "Nusuk" in the App Store (published by Ministry of Hajj & Umrah)
- Android: search "Nusuk" in Google Play

This is a separate login from your Hajj registration account on hajj.nusuk.sa. You will need to create a new account or log in with different credentials.`,
                note: 'Install the app and set up your account while you still have a reliable internet connection at home. The Madinah hotel Wi-Fi can be unreliable.',
            },
            {
                id: 'rawdah.before.register',
                title: 'Register on the Nusuk app with your visa and passport details',
                content: `Register inside the app using:
- Your Hajj visa number (from your visa stamp or e-visa document)
- Passport number
- Nationality
- Date of birth
- Email address

Once registered, link any family members or companions who are travelling with you (they will each need their own account, or you can add them as companions if the app supports it). Verify the app shows your name correctly before you travel.`,
                note: 'Do this as soon as your visa is issued — not the night before you fly.',
            },
            {
                id: 'rawdah.before.slot-timing',
                title: 'Learn when slots open and set an alarm',
                content: `Rawdah slots are released in weekly batches — typically every Friday for the following week. New slots also appear:
- Daily in batches at the start of each hour (12:00, 13:00, 14:00 KSA time)
- 7–10 days before the visit date

The slots go in seconds. Set an alarm on your phone for 11:55 AM KSA time on Fridays so you are ready when the calendar refreshes.

To convert to your local time: KSA is UTC+3. For UK (BST) that is 09:55. For US Eastern it is 04:55.`,
                note: 'Check the app at unusual hours too — 2am and 4am KSA time. Cancellations return slots to the calendar at any time.',
            },
        ],
    },
    {
        id: 'rawdah.phase-book',
        title: 'Phase 2 — Book Your Slot',
        intro: 'Navigate carefully — men and women have entirely different visiting hours and entry gates.',
        steps: [
            {
                id: 'rawdah.book.navigate',
                title: 'Open "Prophet\'s Mosque Services" and select the Rawdah option',
                content: `Inside the Nusuk app:
- Tap "Prophet's Mosque Services" (or "Holy Mosque Services") on the home screen
- Tap "Praying in the Noble Rawdah" (or "Booking of Permit for Noble Rawdah")
- Select the correct gender section:
  — Men and women have completely separate visiting hours
  — Choosing the wrong section means your permit will be for the wrong time

If you do not see the Rawdah option, ensure your app is fully updated and that your account registration is complete.`,
            },
            {
                id: 'rawdah.book.select-visitors',
                title: 'Select visitors (yourself and linked companions)',
                content: `Check the box next to your name. If you have added companions or family members to your profile, you can select them here too.

Children under 5 generally do not need a separate permit but must accompany a parent with a valid permit. Children 5 and older need their own permit via their own linked account.

Tap "Continue" once all visitors are selected.`,
                note: 'Book together as a group if possible — it is easier to coordinate and enter together.',
            },
            {
                id: 'rawdah.book.read-calendar',
                title: 'Read the calendar icons before selecting a date',
                content: `The booking calendar uses four states. Understanding them saves you from wasting taps:

No icon (plain time slot, e.g. "10:00"): Available — tap to book.

Hourglass icon: Fully booked, OR the 365-day rule applies to you (you have visited within the past year). You cannot book this slot.

Gear icon: Not released yet. The slot exists on the calendar but is not open for booking. Check back later.

Lightning bolt icon: Instant track — a fast-access slot, often with immediate confirmation. Book this if you see it.`,
                note: 'If you see mostly hourglass icons, it may mean your account is subject to the 365-day rule. Only one Rawdah visit permit is allowed per 365 days.',
            },
            {
                id: 'rawdah.book.select-slot',
                title: 'Select an available date and time slot',
                content: `Tap a date showing availability (no icon / lightning). A list of time slots appears — each is a 20-minute window.

Select your preferred slot and tap "Issue Permit" (or "Confirm"). The system will generate your permit immediately.

If all dates show as booked or not released, try:
- Refreshing the app exactly on the hour (slots release in batches at 12:00, 13:00, etc.)
- Checking at 2am or 4am KSA time — cancellations return to the calendar at any hour
- Switching the app language to Arabic (a known quirk — some pilgrims report seeing different available slots in Arabic mode)`,
                note: 'You get one Rawdah permit per 365 days. Choose your date and time carefully — you cannot rebook within a year.',
            },
            {
                id: 'rawdah.book.screenshot-qr',
                title: 'Screenshot the QR code permit immediately',
                content: `Once your permit is confirmed, the app displays a QR code. Screenshot it immediately and save it in multiple places:
- Your phone's camera roll
- A cloud backup (iCloud, Google Photos)
- WhatsApp to yourself or a family member

The app can crash or fail to load offline. Mobile signals at the Masjid an-Nabawi gates can be very weak. Security will scan the QR code at the entrance — if you cannot display it, you will be turned away.`,
                note: 'Do not rely solely on the app loading. A saved screenshot requires no signal and no app.',
            },
        ],
    },
    {
        id: 'rawdah.phase-day',
        title: 'Phase 3 — On the Day of Your Visit',
        intro: 'Arrive early. The queues are long and guards are strict about permit validity.',
        steps: [
            {
                id: 'rawdah.day.arrive-early',
                title: 'Arrive at the correct gate 20–30 minutes before your slot',
                content: `Check your permit for the gate number — men and women enter through different gates:
- Men: typically Gate 37 area (verify on your permit)
- Women: typically Gate 24 area (verify on your permit)

Arrive 20–30 minutes before your scheduled time. There is a queue to have your QR code scanned before entry. Late arrivals may have their slot cancelled with no recourse.

Bring water — the wait can be warm, especially in Dhul Hijjah.`,
                note: 'Your slot time is the entry time, not the queuing time. Factor in the queue when planning your departure from the hotel.',
            },
            {
                id: 'rawdah.day.bring-docs',
                title: 'Carry your passport and have the QR code ready to display',
                content: `Security will check:
- Your passport (must match the name on the permit)
- Your QR code permit (screenshot or live in the app)

Have both accessible before you join the queue. Fumbling through your phone at the gate delays everyone and risks your slot being skipped.`,
            },
            {
                id: 'rawdah.day.no-bags',
                title: 'Do not bring large bags into the Rawdah queue',
                content: `Large bags and backpacks are not permitted in the Rawdah queue or inside the Rawdah itself. Leave them at your hotel or with a companion who is not entering.

Small items (phone, passport, prayer beads) are fine. There are no secure bag storage facilities at the gate.`,
            },
            {
                id: 'rawdah.day.time-limit',
                title: 'You have 10–15 minutes inside — make your prayers count',
                content: `Once inside, guards will guide you through in an orderly flow. You have approximately 10–15 minutes. Use the time for:
- Two rak'ahs of prayer if space allows
- Sending salawat (salutations) upon the Prophet ﷺ at the grave
- Personal du'a

Guards will ask you to move on when your time is up. Do not argue or delay — the system is designed to give every pilgrim their turn.

The blessed area of Riyad ul-Jannah is between the Prophet's ﷺ minbar (pulpit) and his noble grave.`,
                note: "Some pilgrims feel overwhelmed and forget what they wanted to say. Write your du'a list in advance and keep it in your pocket.",
            },
        ],
    },
];

const _rawdahAllSteps = rawdahPhases.flatMap((p) => p.steps);

export const rawdahSection = {
    id: 'rawdah',
    title: 'Rawdah Permit (Masjid an-Nabawi)',
    intro: `The Rawdah — Riyad ul-Jannah (Garden of Paradise) — is the blessed area between the Prophet's ﷺ pulpit and his noble grave inside Masjid an-Nabawi, Madinah. Entry requires a permit booked through the Nusuk mobile app. Work through the steps below before and during your Madinah visit.`,
    appNote: `Use the Nusuk mobile app (not the hajj.nusuk.sa website) for the Rawdah permit. This requires a separate account from your Hajj registration login.`,
    warning: `You must book your permit before you arrive in Madinah. Slots open weekly and are gone within minutes. Only one permit is issued per person per 365 days.`,
    phases: rawdahPhases,
    steps: _rawdahAllSteps,
};
