export const checklistSection = {
    id: 'checklist',
    title: 'Pre-Travel Checklist',
    intro: 'Work through each group in the weeks before departure. Tap a row to mark it complete. Items marked Optional are useful but not essential.',
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
                    id: 'checklist.documents.flight-hotel',
                    label: 'Flight tickets and hotel vouchers printed and saved to phone',
                    note: 'Keep digital and paper copies. You will need these at check-in and border control.',
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
                    id: 'checklist.documents.passport-photos',
                    label: '4–6 extra passport-size photos',
                    note: 'Required for various processes on arrival. Bring more than you think you need.',
                },
                {
                    id: 'checklist.documents.id-card',
                    label: 'Self-made ID card or lanyard to carry during rituals',
                    note: 'Write your full name, passport number, hotel address in Arabic, Hajj group leader number, and any medical conditions. Wear it or keep it in your Ihrām pouch.',
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
            title: 'Health & Medicine',
            icon: 'health',
            items: [
                {
                    id: 'checklist.health.doctor',
                    label: 'Seen a doctor — fit to travel and complete Hajj physically',
                    note: 'Hajj involves walking 15–20km daily in heat up to 45°C. Be honest about your physical condition.',
                },
                {
                    id: 'checklist.health.fitness',
                    label: 'Physical preparation — walking 20,000 steps daily in the weeks before departure',
                    note: 'Some days you will walk far more than 20,000 steps. Start building endurance at least 2 months before. Get lean, eat clean.',
                },
                {
                    id: 'checklist.health.vaccinations',
                    label: 'All required vaccinations received within valid timeframes',
                },
                {
                    id: 'checklist.health.medications',
                    label: 'Prescription medications — 3× the required supply, in original packaging with prescription',
                    note: "Carry in hand luggage. Keep a doctor's letter listing medications in English and Arabic if possible. Check Saudi import guidelines for controlled drugs.",
                },
                {
                    id: 'checklist.health.otc',
                    label: 'Paracetamol/ibuprofen, antihistamine, antacid',
                    note: 'Pharmacies in Makkah and Madinah are expensive and may not stock your preferred brand.',
                },
                {
                    id: 'checklist.health.stomach',
                    label: 'Anti-diarrhoea tablets and Pepto-Bismol (or equivalent)',
                    note: 'Stomach illness from food or heat is very common. Carry enough for the whole group.',
                },
                {
                    id: 'checklist.health.constipation',
                    label: 'Constipation relief (laxative tablets)',
                    note: 'Diet and routine disruption during Hajj often causes constipation. Pack a gentle remedy.',
                },
                {
                    id: 'checklist.health.motion-sickness',
                    label: 'Motion sickness tablets',
                    optional: true,
                    note: 'Useful for long bus transfers if you are susceptible.',
                },
                {
                    id: 'checklist.health.throat-lozenges',
                    label: 'Throat lozenges and cough sweets',
                    note: 'Everyone gets ill in Mina — dusty, crowded tents with poor ventilation. Lozenges help enormously.',
                },
                {
                    id: 'checklist.health.first-aid',
                    label: 'First-aid: plasters, blister pads, antiseptic cream, bandages, gauze, micropore tape',
                    note: 'The blisters from sandals walking on marble are severe. Pack well.',
                },
                {
                    id: 'checklist.health.vaseline',
                    label: 'Vaseline / petroleum jelly (unscented)',
                    note: 'Apply to thighs, heels, and toes to prevent chafing and blisters during long walks. Absolutely worth packing.',
                },
                {
                    id: 'checklist.health.electrolytes',
                    label: 'Electrolyte sachets or tablets — heat exhaustion is a real risk',
                    note: 'Use daily, not just when you feel thirsty. Heat and walking cause extreme dehydration.',
                },
                {
                    id: 'checklist.health.energy-snacks',
                    label: 'Energy bars, dates, nuts — for Mina and long walks',
                    note: 'Meals can be delayed or unavailable during the peak Hajj days. Dates are Sunnah and ideal.',
                },
                {
                    id: 'checklist.health.nasal-spray',
                    label: 'Saline nasal spray',
                    note: 'The Saudi climate is extremely dry. A nasal spray prevents nosebleeds and eases breathing in dusty conditions.',
                },
                {
                    id: 'checklist.health.vitamins',
                    label: 'Multivitamin supplements — start taking before departure',
                    optional: true,
                    note: 'Build up your immune system in the weeks before. Many pilgrims swear by starting vitamins early.',
                },
                {
                    id: 'checklist.health.sunscreen',
                    label: 'Sunscreen SPF 50+ (unscented — scented products forbidden in Ihrām)',
                    note: 'Reapply frequently. The white marble floor of the Haram reflects the sun intensely.',
                },
                {
                    id: 'checklist.health.lip-balm',
                    label: 'Unscented lip balm',
                },
                {
                    id: 'checklist.health.masks',
                    label: 'Face masks — dusty conditions and crowd illness',
                    note: 'Mina tents are enclosed with poor ventilation. Everyone coughs. A mask significantly reduces illness risk.',
                },
                {
                    id: 'checklist.health.eye-drops',
                    label: 'Eye drops (preservative-free) — dust and dry air are common',
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
                    label: 'Women: Multiple loose abayas or jilbabs in light, breathable fabric',
                    note: 'Light-coloured loose cotton is cooler. Bring more than you think — laundry access is limited. Women do not wear white Ihrām.',
                },
                {
                    id: 'checklist.ihram.undergarments',
                    label: 'Undergarments — light, comfortable, or disposable',
                    note: 'Bring plenty. Laundry services can be restricted in Mina.',
                },
                {
                    id: 'checklist.ihram.sandals',
                    label: 'Sandals (men — Ihrām): expose the top of the foot, broken in',
                    note: 'Men must not cover the top of the foot while in Ihrām. Wear these for several weeks before travel.',
                },
                {
                    id: 'checklist.ihram.flip-flops',
                    label: 'Crocs or flip-flops — for wudu areas and Mina tent use',
                    note: 'Slip-on sandals you can remove instantly at mosque entrances. Crocs are ideal — waterproof and light.',
                },
                {
                    id: 'checklist.ihram.walking-shoes',
                    label: 'Comfortable broken-in walking shoes or sneakers (for outside Ihrām)',
                    note: "For the long walks from Mina to Arafah to Muzdalifah to Jamarat — all in one 24-hour stretch. Broken in, not new. Some pilgrims bring two pairs: one clean for Tawaf/Sa'i, one worn for Mina.",
                },
                {
                    id: 'checklist.ihram.shoe-bags',
                    label: 'Shoe bags for carrying footwear into mosques',
                    note: 'Required at mosque entrances — you cannot leave shoes outside as they may be lost in the crowd.',
                },
                {
                    id: 'checklist.ihram.jacket',
                    label: 'Light jacket or warm layer for mosques and cold AC buses',
                    note: 'Saudi buses and hotel rooms are often extremely cold. A thin layer packs small.',
                },
                {
                    id: 'checklist.ihram.umbrella',
                    label: 'Compact umbrella — essential for Arafah and outdoor walks',
                    note: 'An umbrella provides crucial shade during the Day of Arafah and long outdoor transfers. Lightweight folding type.',
                },
                {
                    id: 'checklist.ihram.sunglasses',
                    label: 'Sunglasses — very dark lenses',
                    note: 'The white marble floor of the Haram reflects sunlight intensely. Dark sunglasses prevent eye strain and damage.',
                },
                {
                    id: 'checklist.ihram.hat',
                    label: 'Hat or sun cap (women; men outside Ihrām)',
                    note: 'Men cannot wear a head-covering hat while in Ihrām but should protect their heads before and after.',
                },
                {
                    id: 'checklist.ihram.cooling-towel',
                    label: 'Cooling towel',
                    optional: true,
                    note: 'Wet and drape around the neck during Arafah. More effective than a fan in dry heat.',
                },
                {
                    id: 'checklist.ihram.neck-fan',
                    label: 'Portable neck fan',
                    optional: true,
                    note: 'Useful but note: in extreme heat, fans can increase body temperature by blowing hot air. A cooling towel is often more effective.',
                },
                {
                    id: 'checklist.ihram.belt-pouch',
                    label: 'Ihrām money belt or small waist pouch (for men — no pockets in Ihrām)',
                },
                {
                    id: 'checklist.ihram.laundry-bag',
                    label: 'Laundry bag or large zip-lock bags for dirty clothing',
                },
            ],
        },
        {
            id: 'checklist.toiletries',
            title: 'Toiletries & Hygiene',
            icon: 'toiletries',
            items: [
                {
                    id: 'checklist.toiletries.soap',
                    label: 'Unscented soap — fragrance forbidden in Ihrām',
                    note: 'Check the label carefully. Many "unscented" products contain masking fragrance.',
                },
                {
                    id: 'checklist.toiletries.shampoo',
                    label: 'Unscented shampoo and conditioner',
                },
                {
                    id: 'checklist.toiletries.hand-sanitiser',
                    label: 'Unscented hand sanitiser / hand gel',
                    note: 'Essential for hygiene when water is not immediately accessible in crowds.',
                },
                {
                    id: 'checklist.toiletries.wet-wipes',
                    label: 'Unscented wet wipes or biodegradable body wipes',
                    note: 'Useful for cooling and cleaning when shower access is limited. Compressed tablet wipes expand when wet and are very compact.',
                },
                {
                    id: 'checklist.toiletries.toilet-wipes',
                    label: 'Flushable unscented toilet wipes',
                    note: 'Toilet facilities in Mina and Muzdalifah are basic. Pack well.',
                },
                {
                    id: 'checklist.toiletries.tissues',
                    label: 'Travel tissue packs (multiple)',
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
                    id: 'checklist.toiletries.moisturiser',
                    label: 'Unscented moisturiser',
                    note: 'The dry desert climate cracks skin quickly. Use daily.',
                },
                {
                    id: 'checklist.toiletries.vaseline',
                    label: 'Vaseline / petroleum jelly (unscented) — for chafing and blisters',
                    note: 'Apply to feet, between toes, and inner thighs before long walks. Also soothes cracked lips.',
                },
                {
                    id: 'checklist.toiletries.lota',
                    label: 'Travel lota or small bottle for toilet hygiene',
                    note: 'Toilet facilities in Mina may not have water sprays. A small squeezable bottle is essential.',
                },
                {
                    id: 'checklist.toiletries.sanitary',
                    label: 'Sanitary products — women: sufficient supply for full journey',
                    note: 'Available in Makkah but expensive. Bring a full supply. Many women consult a doctor about delaying their cycle for Hajj.',
                },
                {
                    id: 'checklist.toiletries.deodorant',
                    label: 'Unscented deodorant (do not use during Ihrām)',
                    note: 'Pack unscented deodorant for use before entering Ihrām and after partial Tahallul on Day 3.',
                },
                {
                    id: 'checklist.toiletries.razor',
                    label: 'Disposable razor (for shaving the head after Jamarat on Day 3)',
                    note: 'Men shave or shorten their hair. Women cut a fingertip-length. Professional barbers are available in Mina.',
                },
                {
                    id: 'checklist.toiletries.nail-clippers',
                    label: 'Nail clippers — use before entering Ihrām (forbidden during Ihrām)',
                },
                {
                    id: 'checklist.toiletries.zip-locks',
                    label: 'Zip-lock bags — various sizes',
                    note: 'For organising toiletries, protecting documents from sweat, storing dirty items, and general use.',
                },
                {
                    id: 'checklist.toiletries.door-hook',
                    label: 'Over-the-door hook for Mina shower room',
                    optional: true,
                    note: 'Hang your toiletries bag and a plastic bag for dirty clothes on the shower door. A simple but very useful Hajj tip.',
                },
                {
                    id: 'checklist.toiletries.prayer-mat',
                    label: 'Small, foldable prayer mat',
                    note: 'Compact enough to carry on the body. Many pilgrims pray in open spaces during Hajj.',
                },
                {
                    id: 'checklist.toiletries.pebble-pouch',
                    label: 'Small pouch for pebbles collected at Muzdalifah',
                    note: 'You will need 49 or 70 pebbles depending on whether you stay 2 or 3 nights in Mina. Small, chickpea-sized.',
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
                    note: 'Your phone is your map, guide, and lifeline. Keep it charged. Charging points are scarce in Mina tents.',
                },
                {
                    id: 'checklist.tech.extension-cord',
                    label: 'Extension cord with multiple sockets',
                    note: 'Mina tents often have very few outlets for hundreds of pilgrims. An extension cord is worth its weight in gold.',
                },
                {
                    id: 'checklist.tech.adapter',
                    label: 'Universal or Saudi plug adapter (Type G — same as UK)',
                },
                {
                    id: 'checklist.tech.sim',
                    label: 'Saudi SIM or confirmed international roaming plan',
                    note: 'Local Saudi SIM (Zain, STC, Mobily) is usually cheaper and more reliable. Buy at the airport on arrival.',
                },
                {
                    id: 'checklist.tech.cash-sar',
                    label: 'SAR cash — enough for immediate needs plus a comfortable buffer',
                    note: 'Taxis can cost 400–1000 SAR unexpectedly. Extra luggage fees, emergency purchases — budget generously. Carry in a concealed money belt.',
                },
                {
                    id: 'checklist.tech.card',
                    label: 'Bank card enabled for international transactions — bank notified of travel',
                },
                {
                    id: 'checklist.tech.offline-maps',
                    label: 'Offline maps downloaded (Google Maps or Maps.me for Makkah, Mina, Arafah)',
                    note: 'Download before departure. In Makkah and Mina, data signal is unreliable during peak hours.',
                },
                {
                    id: 'checklist.tech.quran-app',
                    label: 'Quran app with content downloaded offline',
                    note: 'For offline reading and duas throughout the journey.',
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
                {
                    id: 'checklist.tech.earphones',
                    label: 'Earphones',
                    optional: true,
                    note: 'For listening to Quran, lectures, or calming recitation during waits and transfers.',
                },
                {
                    id: 'checklist.tech.old-phone',
                    label: 'Old or spare phone',
                    optional: true,
                    note: 'A backup in case your primary phone is lost or breaks. Pre-load it with offline maps, this app, and emergency contacts.',
                },
            ],
        },
        {
            id: 'checklist.mina',
            title: 'Mina, Arafah & Muzdalifah',
            icon: 'logistics',
            items: [
                {
                    id: 'checklist.mina.bag',
                    label: 'Small duffel bag or backpack for the Hajj days (Mina, Arafah, Muzdalifah)',
                    note: 'Pack light — you will carry this on the long walk from Mina to Arafah to Muzdalifah to Jamarat. A 20–30 litre backpack is ideal.',
                },
                {
                    id: 'checklist.mina.water-bottle',
                    label: 'Insulated stainless steel water bottle',
                    note: 'Keeps water cold in extreme heat. Cold water from a bottle is far better than hot water from a hydration bladder. Zamzam is available throughout.',
                },
                {
                    id: 'checklist.mina.instant-ice',
                    label: 'Instant cold packs',
                    optional: true,
                    note: 'Squeeze to activate. Excellent for heat exhaustion and cooling down if you or someone nearby overheats.',
                },
                {
                    id: 'checklist.mina.torch',
                    label: 'Small torch or headlamp',
                    optional: true,
                    note: 'Muzdalifah overnight can be dark — a headlamp is very useful for collecting pebbles and moving around at night.',
                },
                {
                    id: 'checklist.mina.inflatable-lounger',
                    label: 'Inflatable lounger or mat for Muzdalifah',
                    optional: true,
                    note: 'The ground in Muzdalifah is hard even with carpet. A compact inflatable lounger (fill it by waving it like a flag — no pump needed) allows you to sleep. Some pilgrims rate this as one of their best packing decisions.',
                },
                {
                    id: 'checklist.mina.earplugs',
                    label: 'Earplugs',
                    optional: true,
                    note: 'Mina tents are crowded and noisy — snoring, coughing, and conversation at all hours. Earplugs allow proper rest which is essential for the demanding days ahead.',
                },
                {
                    id: 'checklist.mina.eye-mask',
                    label: 'Eye mask / sleep mask',
                    optional: true,
                    note: 'Lights in Mina tents often stay on. An eye mask helps you rest during the day.',
                },
                {
                    id: 'checklist.mina.sleeping-liner',
                    label: 'Sleeping bag liner',
                    optional: true,
                    note: 'Lighter than a sleeping bag. Useful if nights are cool and blankets are not provided by your package.',
                },
                {
                    id: 'checklist.mina.clothesline',
                    label: 'Travel clothesline and pegs',
                    optional: true,
                    note: 'Hang washed clothing or wet items in the tent to dry. Very useful for a multi-day stay in Mina.',
                },
                {
                    id: 'checklist.mina.laundry-sheets',
                    label: 'Travel-size unscented laundry detergent',
                    optional: true,
                    note: 'For hand-washing items in Mina. Dissolvable laundry sheets are the most compact option.',
                },
            ],
        },
        {
            id: 'checklist.logistics',
            title: 'Logistics & Admin',
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
                {
                    id: 'checklist.logistics.passport-authority',
                    label: 'Aware that your passport may be held by Hajj authorities on arrival',
                    note: 'Saudi authorities sometimes collect passports from pilgrims on arrival. Keep a photocopy and your ID card on you at all times.',
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
                    id: 'checklist.spiritual.pocket-quran',
                    label: 'Physical pocket Quran',
                    note: 'For moments without a phone — in Muzdalifah, during waits, or when your battery is flat.',
                },
                {
                    id: 'checklist.spiritual.tasbeeh',
                    label: 'Tasbeeh / tawaf counter',
                    note: 'For counting circuits during Tawaf and dhikr.',
                },
                {
                    id: 'checklist.spiritual.dua-book',
                    label: 'Dua book (physical)',
                    note: 'A small printed dua book for Hajj. Does not need a battery or signal.',
                },
                {
                    id: 'checklist.spiritual.notebook',
                    label: 'Small notebook and pen',
                    note: 'For writing duas you want to make, recording reflections, or noting contacts and information.',
                },
                {
                    id: 'checklist.spiritual.duas-bookmarked',
                    label: 'Key duas reviewed and bookmarked in this app',
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
        {
            id: 'checklist.lastminute',
            title: 'Day of Departure — Last Minute Checks',
            icon: 'logistics',
            items: [
                {
                    id: 'checklist.lastminute.ghusl-home',
                    label: 'Ghusl, clip nails, trim moustache, remove pubic/underarm hair at home',
                    note: 'All of these are prohibited in Ihrām. Do them before leaving the house. For men: apply Itar to the body — not to the Ihram sheets.',
                },
                {
                    id: 'checklist.lastminute.nafl-home',
                    label: 'Read 2 rakaat nafl at home before leaving (if not a Makruh time)',
                    note: 'Recite Surah Kafirun in the 1st rakaat and Surah Ikhlas in the 2nd. Make dua for ease of journey, acceptance, and safety.',
                },
                {
                    id: 'checklist.lastminute.docs-check',
                    label: 'Check all documents are in the travel wallet: passport, e-visa, vaccination certificate, operator ticket',
                    note: 'Do a final check — nothing should be left behind. Take a photo of each document on your phone as a backup.',
                },
                {
                    id: 'checklist.lastminute.suitcase-weight',
                    label: 'Weigh suitcase — must not exceed airline weight allowance',
                    note: 'Most Saudi airlines allow 23kg for economy. Overweight fees are steep. Confirm with your carrier.',
                },
                {
                    id: 'checklist.lastminute.wristband',
                    label: 'Operator ID wristband and group identification sticker received and on person',
                    note: 'Many Hajj operators provide wristbands and identification stickers. These are vital for group identification in crowded places.',
                },
                {
                    id: 'checklist.lastminute.phone-charged',
                    label: 'Phone and power bank fully charged',
                },
                {
                    id: 'checklist.lastminute.airport-arrive-early',
                    label: 'Arrive at the airport early — at least 3–4 hours before departure for Hajj groups',
                    note: 'Hajj flights involve additional check-in procedures. Do not arrive at the standard 2-hour window — allow at least 3–4 hours.',
                },
                {
                    id: 'checklist.lastminute.social-media',
                    label: 'Decision made about social media: consider a digital detox for the journey',
                    note: 'You are a guest of Allah. These are precious minutes. Consider disabling social media, suspending accounts, or removing apps for the duration of the trip. Do not take photographs at the Holy Sites — focus your heart on worship.',
                },
                {
                    id: 'checklist.lastminute.halal-food',
                    label: 'Halal food at the airport and on the plane confirmed',
                    note: 'If flying with a non-Muslim carrier, pre-order a halal meal when booking. At the airport, check all food is halal before buying. Pack dates, nuts, and cereal bars as backup.',
                },
                {
                    id: 'checklist.lastminute.group-leader',
                    label: "Group leader's phone number and WhatsApp saved on phone and written on paper",
                    note: 'Write it on paper — in Mina, phone battery may die. Also save the hotel name and address.',
                },
                {
                    id: 'checklist.lastminute.ihram-handluggage',
                    label: 'Ihram garments in hand luggage — accessible before the flight reaches the Miqat',
                    note: 'If entering Ihram on the plane or at the airport, have the Ihram easily accessible. Keep Itar in hand luggage too (travel size, within liquid rules).',
                },
            ],
        },
    ],
};
