export const checklistSection = {
    id: 'checklist',
    title: 'Pre-Travel Checklist',
    intro: 'Work through each group in the weeks before departure. Tap a row to mark it complete. Your progress is saved on this device.',
    groups: [
        {
            id: 'checklist.documents',
            title: 'Documents',
            icon: 'doc',
            items: [
                {
                    id: 'checklist.documents.passport',
                    label: 'Passport — valid for at least 6 months beyond return date',
                    note: 'Check the expiry date right now. Renewing a passport can take weeks.',
                },
                {
                    id: 'checklist.documents.visa',
                    label: 'Hajj visa confirmed and in passport (or e-visa saved to phone)',
                },
                {
                    id: 'checklist.documents.nusuk-confirmation',
                    label: 'Nusuk booking confirmation printed and saved digitally',
                    note: 'Note your reference number somewhere separate in case you lose your phone.',
                },
                {
                    id: 'checklist.documents.vaccination-menin',
                    label: 'Meningitis ACWY vaccination certificate (required)',
                    note: 'Must be administered within the period specified by Saudi health authorities for that season.',
                },
                {
                    id: 'checklist.documents.vaccination-other',
                    label: 'Any other required/recommended vaccination certificates for this season',
                    note: "Requirements change annually. Check the Saudi Ministry of Health and your country's Hajj authority.",
                },
                {
                    id: 'checklist.documents.travel-insurance',
                    label: 'Travel and medical insurance policy — know the emergency number',
                    note: 'Write the emergency number on paper. Your phone may be lost or flat when you need it most.',
                },
                {
                    id: 'checklist.documents.id-copies',
                    label: 'Photocopies of passport stored separately from your passport',
                    note: 'One copy in your bag, one copy left at home with family.',
                },
                {
                    id: 'checklist.documents.emergency-contacts',
                    label: 'Emergency contacts list written on paper',
                    note: 'Include: family at home, Hajj group leader, hotel address in Arabic, nearest Saudi embassy/consulate.',
                },
                {
                    id: 'checklist.documents.hotel-arabic',
                    label: 'Hotel name and address written in Arabic on a separate card',
                    note: 'Essential for showing to taxi drivers and helpers who may not read English.',
                },
                {
                    id: 'checklist.documents.group-contacts',
                    label: 'Hajj operator and group leader contact numbers written on paper',
                },
            ],
        },
        {
            id: 'checklist.health',
            title: 'Health',
            icon: 'health',
            items: [
                {
                    id: 'checklist.health.doctor',
                    label: 'Seen a doctor — fit to travel and complete Hajj physically',
                    note: 'Hajj involves walking 15–20km daily in heat up to 45°C. Be honest about your physical condition.',
                },
                {
                    id: 'checklist.health.vaccinations',
                    label: 'All required vaccinations received within valid timeframes',
                },
                {
                    id: 'checklist.health.medications',
                    label: 'Prescription medications — 3× the required supply, in original packaging with prescription',
                    note: 'Carry medications in hand luggage. Keep a letter from your doctor listing medications in English and Arabic if possible.',
                    hasNote: true,
                },
                {
                    id: 'checklist.health.otc',
                    label: 'Over-the-counter medications: paracetamol, ibuprofen, antidiarrheal, antihistamine, antacid',
                },
                {
                    id: 'checklist.health.first-aid',
                    label: 'Basic first-aid: plasters/blister pads, antiseptic wipes, small bandages',
                },
                {
                    id: 'checklist.health.electrolytes',
                    label: 'Electrolyte sachets or tablets — heat exhaustion is a real risk',
                    note: 'Drink water continuously. Do not wait until you feel thirsty.',
                },
                {
                    id: 'checklist.health.sunscreen',
                    label: 'Sunscreen SPF 50+ (unscented — scented products forbidden in Ihrām)',
                    note: 'Reapply frequently. Seek shade wherever possible, especially at Arafah.',
                },
                {
                    id: 'checklist.health.lip-balm',
                    label: 'Unscented lip balm',
                },
                {
                    id: 'checklist.health.masks',
                    label: 'Face masks — useful in crowds and dusty conditions',
                },
                {
                    id: 'checklist.health.eye-drops',
                    label: 'Eye drops (preservative-free) — dust and dry air are common',
                },
                {
                    id: 'checklist.health.blister-care',
                    label: 'Blister plasters / moleskin — broken sandals cause torn feet',
                    note: 'Do not attempt Hajj in new, unbroken-in footwear.',
                },
            ],
        },
        {
            id: 'checklist.ihram',
            title: 'Ihrām & Clothing',
            icon: 'clothes',
            items: [
                {
                    id: 'checklist.ihram.garments-main',
                    label: "Men: Two white Ihrām garments (rida' and izar) — main set",
                    note: 'Plain white, no stitching forming the shape of a garment. Bring spares.',
                },
                {
                    id: 'checklist.ihram.garments-spare',
                    label: 'Men: Spare Ihrām set (at least one extra)',
                    note: 'Ihrām gets dirty and wet. Having a spare saves real hardship.',
                },
                {
                    id: 'checklist.ihram.womens-clothing',
                    label: 'Women: Sufficient modest clothing for the full journey — loose, breathable',
                    note: 'Dark colours absorb heat. Light, loose fabrics are much more comfortable. Women do not wear white Ihrām.',
                },
                {
                    id: 'checklist.ihram.sandals',
                    label: 'Sandals that expose the top of the foot (men, for Ihrām) — broken in',
                    note: 'Men must not cover the top of the foot while in Ihrām. Wear these for several weeks before travel.',
                },
                {
                    id: 'checklist.ihram.flip-flops',
                    label: 'Flip-flops or slip-on sandals for ablution (wudu) areas',
                },
                {
                    id: 'checklist.ihram.jacket',
                    label: 'Light jacket or warm layer for mosques and cold AC buses',
                    note: 'Saudi buses and hotel rooms are often extremely cold with air conditioning.',
                },
                {
                    id: 'checklist.ihram.laundry-bag',
                    label: 'Laundry bag or large zip-lock bags for dirty clothing',
                },
                {
                    id: 'checklist.ihram.belt-pouch',
                    label: 'Ihrām money belt or small waist pouch (for men — no pockets in Ihrām)',
                },
            ],
        },
        {
            id: 'checklist.toiletries',
            title: 'Toiletries',
            icon: 'toiletries',
            items: [
                {
                    id: 'checklist.toiletries.soap',
                    label: 'Unscented soap — fragrance forbidden in Ihrām',
                    note: 'Check the label. Many "unscented" products contain masking fragrance.',
                },
                {
                    id: 'checklist.toiletries.shampoo',
                    label: 'Unscented shampoo',
                },
                {
                    id: 'checklist.toiletries.toothpaste',
                    label: 'Unscented toothpaste or miswak',
                    note: 'Regular mint toothpaste is permitted according to many scholars, but unscented is safer. Miswak is Sunnah.',
                },
                {
                    id: 'checklist.toiletries.miswak',
                    label: 'Miswak (tooth-cleaning twig)',
                },
                {
                    id: 'checklist.toiletries.towels',
                    label: 'Towels — at least two (one small, one large)',
                    note: 'Quick-dry travel towels save weight.',
                },
                {
                    id: 'checklist.toiletries.prayer-mat',
                    label: 'Small, foldable prayer mat',
                    note: 'Compact enough to carry on the body. Many pilgrims pray in open spaces.',
                },
                {
                    id: 'checklist.toiletries.pebble-pouch',
                    label: 'Small pouch for the pebbles collected at Muzdalifah',
                    note: 'You will need 49 or 70 pebbles depending on whether you stay 2 or 3 nights in Mina. Small, chickpea-sized.',
                },
                {
                    id: 'checklist.toiletries.razor',
                    label: 'Disposable razor (for shaving the head after Jamarat on Day 3)',
                    note: 'Men shave or shorten their hair. Women cut a fingertip-length from their hair. Professional barbers are available in Mina.',
                },
                {
                    id: 'checklist.toiletries.nail-clippers',
                    label: 'Nail clippers — must be used before entering Ihrām (forbidden during Ihrām)',
                },
                {
                    id: 'checklist.toiletries.deodorant',
                    label: 'Unscented deodorant (do not use during Ihrām)',
                    note: 'Pack unscented deodorant for use before entering Ihrām and after partial Tahallul on Day 3.',
                },
            ],
        },
        {
            id: 'checklist.tech',
            title: 'Tech & Money',
            icon: 'tech',
            items: [
                {
                    id: 'checklist.tech.powerbank',
                    label: 'High-capacity power bank (20,000mAh+)',
                    note: 'Your phone is your map, guide, and contact. Keep it charged. Charging points are scarce in Mina tents.',
                },
                {
                    id: 'checklist.tech.adapter',
                    label: 'Universal or Saudi plug adapter (Type G — same as UK)',
                },
                {
                    id: 'checklist.tech.sim',
                    label: 'Saudi SIM or confirmed international roaming plan',
                    note: 'Local Saudi SIM (Zain, STC, Mobily) is usually cheaper and more reliable for data. Buy at the airport on arrival.',
                },
                {
                    id: 'checklist.tech.cash-sar',
                    label: 'Small amount of SAR cash (200–500 SAR) for immediate needs',
                    note: 'For taxis, small purchases, tips. Larger amounts can be withdrawn from ATMs. Carry in a concealed money belt.',
                },
                {
                    id: 'checklist.tech.card',
                    label: 'Bank card enabled for international transactions — bank notified of travel',
                },
                {
                    id: 'checklist.tech.offline-maps',
                    label: 'Offline maps downloaded (Maps.me or Google Maps offline for Makkah, Mina, Arafah)',
                    note: 'Download before departure. In Makkah and Mina, data signal is unreliable.',
                },
                {
                    id: 'checklist.tech.quran-app',
                    label: 'Quran app with content downloaded offline',
                    note: 'For offline reading and duas during the journey.',
                },
                {
                    id: 'checklist.tech.app-homescreen',
                    label: 'This Hajj Companion app added to home screen for offline access',
                    note: 'On iPhone: Share → "Add to Home Screen". On Android: Menu → "Add to Home Screen" or "Install app".',
                },
                {
                    id: 'checklist.tech.phone-backup',
                    label: 'Phone backed up — important photos and contacts saved',
                },
                {
                    id: 'checklist.tech.translation-app',
                    label: 'Translation app installed and Arabic language pack downloaded offline',
                },
            ],
        },
        {
            id: 'checklist.logistics',
            title: 'Logistics',
            icon: 'logistics',
            items: [
                {
                    id: 'checklist.logistics.family-group',
                    label: 'Family WhatsApp group set up with regular check-in plan',
                    note: "Agree on check-in times. Signal in Mina is poor — do not worry family if you don't reply immediately.",
                },
                {
                    id: 'checklist.logistics.luggage-id',
                    label: 'Luggage tagged with name, phone number, and hotel address (inside and outside)',
                },
                {
                    id: 'checklist.logistics.luggage-lock',
                    label: 'TSA-approved locks on checked baggage',
                },
                {
                    id: 'checklist.logistics.home-finances',
                    label: 'Home finances in order — bills, rent/mortgage set to auto-pay',
                },
                {
                    id: 'checklist.logistics.will',
                    label: 'Will updated and accessible to family',
                    note: 'A traveller setting out on a major journey should have their affairs in order. This is not morbid; it is wise.',
                },
                {
                    id: 'checklist.logistics.debts',
                    label: 'Debts paid or arrangements made',
                    note: 'The Prophet ﷺ emphasised settling debts. Do so before departing.',
                },
                {
                    id: 'checklist.logistics.forgiveness',
                    label: 'Sought forgiveness from family and anyone wronged',
                    note: 'Hajj is a new beginning. Mend what can be mended before you leave.',
                },
                {
                    id: 'checklist.logistics.embassy',
                    label: "Your country's embassy/consulate number in Saudi Arabia saved on paper",
                    note: 'In case of lost passport or serious emergency. Write it on paper — not just in your phone.',
                },
                {
                    id: 'checklist.logistics.house-key',
                    label: 'House key / home access arranged for someone trusted',
                },
            ],
        },
        {
            id: 'checklist.spiritual',
            title: 'Spiritual Preparation',
            icon: 'spiritual',
            items: [
                {
                    id: 'checklist.spiritual.intention',
                    label: 'Intention (niyyah) clarified — Hajj performed purely for Allah',
                    note: 'Hajj is accepted when performed with sincerity and in accordance with the Sunnah. Reflect on your intention.',
                },
                {
                    id: 'checklist.spiritual.tawbah',
                    label: 'Repentance (tawbah) — sincere return to Allah before departure',
                },
                {
                    id: 'checklist.spiritual.fiqh',
                    label: 'Basic Hajj fiqh reviewed — know the rites and their rulings',
                    note: 'Study the mandatory (fard), required (wajib), and recommended (Sunnah) acts. Know what invalidates Ihrām. Ask your scholar about anything unclear.',
                },
                {
                    id: 'checklist.spiritual.talbiyah-memorized',
                    label: 'Talbiyah memorized — can recite without looking',
                    note: 'The Talbiyah is central. Know it by heart before you board the plane.',
                },
                {
                    id: 'checklist.spiritual.duas-bookmarked',
                    label: 'Key duas reviewed and bookmarked in this app or a dua book',
                },
                {
                    id: 'checklist.spiritual.quran',
                    label: 'Increased Quran recitation in the weeks before departure',
                },
                {
                    id: 'checklist.spiritual.scholar',
                    label: 'Any personal fiqh questions asked of a qualified scholar',
                    note: 'Do not rely on internet forums for religious rulings that affect your Hajj. Ask a scholar you trust.',
                },
                {
                    id: 'checklist.spiritual.nafila',
                    label: 'Increased voluntary prayers (nawafil) in the weeks before',
                },
            ],
        },
    ],
};
