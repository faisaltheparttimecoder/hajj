export const hajjDays = [
    {
        id: 'day-0',
        slug: 'day-0',
        date: '7th Dhul Hijjah',
        arabicDate: '٧ ذو الحجة',
        arabicName: 'يَوْم اسْتِعْدَاد الحَج',
        name: 'Preparation Day',
        title: 'Day 0 — Preparation Day',
        subtitle: 'Ihrām for Hajj & Final Preparations',
        location: 'Your accommodation in Makkah',
        overview: `The 7th of Dhul Hijjah is the final day before the Hajj rites begin. Tomorrow you travel to Mina. Today, you prepare physically and spiritually — clipping nails, making ghusl, putting on Ihrām for Hajj, and renewing your intention.

This is a day of quiet preparation. Rest well. Avoid over-exerting yourself. Make sure your Mina bag is packed lightly — you will carry it on foot through some of the most crowded places on earth.`,
        steps: [
            {
                id: 'day-0.clip-nails',
                label: 'Clip nails, trim moustache, remove pubic and underarm hair',
                note: 'These are all forbidden while in Ihrām. Do them now before entering the sacred state.',
            },
            {
                id: 'day-0.pack-mina-bag',
                label: 'Pack your Mina bag — keep it as light as possible',
                note: 'Pack: unscented soap, Quran, tissues, tasbeeh, medication, water bottle, snacks (dates/nuts), phone + charger + power bank, Ihram spare set, prayer mat. You will carry this for many hours.',
            },
            {
                id: 'day-0.confirm-qurbani',
                label: 'Obtain the name and contact of the person doing your Udhiyah (Qurbani)',
                note: 'If your group organises Qurbani, get the contact details now and note them. On Day 3, you must confirm 100% that it has been done before shaving your head.',
            },
            {
                id: 'day-0.note-salat-times',
                label: 'Note the Makkah Salat times for Dhuhr, Asr, Maghrib, Isha, and Fajr',
                note: 'You will need these in Mina, Arafah, and Muzdalifah. Save them to your phone or write them on paper.',
            },
            {
                id: 'day-0.ghusl',
                label: 'After Isha, perform ghusl (full ritual bath) for Ihram',
                note: 'Use unscented soap. For men: perfume may be applied to the body at this point (not to the Ihram garments themselves). Women should be fully changed into their Ihram clothing.',
            },
            {
                id: 'day-0.put-on-ihram',
                label: 'Put on Ihram garments for Hajj',
                note: 'Men: remove all stitched clothing and underwear, drape the rida (upper sheet) and izar (lower sheet). Women: any modest clothing — no white Ihram required, face and hands uncovered.',
            },
            {
                id: 'day-0.go-to-haram',
                label: 'Go to the Haram Sharif if possible (recommended, not obligatory)',
                note: 'It is recommended to make the intention for Hajj inside the Haram. If your accommodation is far, you may make the intention from there.',
            },
            {
                id: 'day-0.nafl-tawaf',
                label: 'Perform one nafl Tawaf if possible (for Tahiyatul Masjid)',
                note: 'If too busy to perform Tawaf, read 2 rakaat Tahiyatul Masjid instead.',
            },
            {
                id: 'day-0.salat-ihram',
                label: 'Read 2 rakaat Salat with the intention of Ihram (head covered, then uncover)',
                note: 'In the 1st rakaat recite Surah Kafirun; in the 2nd recite Surah Ikhlas. After Salah, uncover your head and make dua.',
            },
            {
                id: 'day-0.niyyah-hajj',
                label: 'Make the intention (Niyyah) for Hajj — aloud',
                note: '"Allahumma inni uridul Hajja, fayassirhu li wa taqabbalhu minni." (O Allah, I intend to perform Hajj — make it easy for me and accept it from me.)',
            },
            {
                id: 'day-0.talbiyah',
                label: 'Recite the Talbiyah 3 times — you are now in the state of Ihram',
                note: 'From this moment, all Ihram prohibitions apply. Recite the Talbiyah frequently until you cast the first stone at Jamarat al-Aqabah on Day 3.',
            },
            {
                id: 'day-0.rest',
                label: 'Return to hotel and sleep — rest well before the days ahead',
                note: 'Tomorrow begins the most physically demanding sequence of your life. Sleep early if you can.',
            },
        ],
        duas: ['entering_ihram', 'talbiyah'],
        edgeCases: [
            'The intention for Hajj must be made before passing or leaving the Miqat boundary. If already in Makkah, make the intention before departing for Mina.',
            "Optional: some pilgrims perform the Sa'i for Hajj on this day after a nafl Tawaf (especially Tamattu' pilgrims who wish to complete it early). Consult your scholar.",
            'If your group travels to Mina before Fajr of the 8th, ensure you have entered Ihram before departing.',
            'Do not miss any Salat on the way to or in Mina. Plan travel time to account for prayer times.',
        ],
    },

    {
        id: 'day-1',
        slug: 'day-1',
        date: '8th Dhul Hijjah',
        arabicDate: '٨ ذو الحجة',
        arabicName: 'يَوْم التَّرْوِيَة',
        name: 'Yawm al-Tarwiyah',
        title: 'Day 1 — Yawm al-Tarwiyah',
        subtitle: 'The Day of Quenching',
        location: 'Your accommodation → Mina',
        overview: `The 8th of Dhul Hijjah marks the formal beginning of Hajj. Today you enter Ihrām, make your intention, and travel to Mina — a valley about 8km from the Masjid al-Haram — where you will spend the day and night.

The day is named "al-Tarwiyah" (quenching) from the practice of pilgrims in earlier centuries drawing and storing water for the journey to Arafah.

Today is relatively calm. It is a day of preparation, prayer, and gathering. Settle in, stay hydrated, and rest as much as you can — tomorrow, Arafah, is the most important day of your life.`,
        steps: [
            {
                id: 'day-1.ghusl',
                label: 'Perform ghusl (full ritual bath) before entering Ihrām',
                note: 'Sunnah before Ihrām. Use unscented soap. This is also when men may use perfume on the body — but not the Ihrām garments themselves.',
            },
            {
                id: 'day-1.put-on-ihram',
                label: 'Put on Ihrām garments and make intention at or before the Mīqāt',
                note: 'If you have already done Umrah and exited Ihrām, you re-enter Ihrām for Hajj now. Men: two white seamless cloths. Women: any modest clothing. Say the Talbiyah aloud (men) or quietly (women).',
            },
            {
                id: 'day-1.talbiyah-begins',
                label: 'Begin reciting the Talbiyah — continue until Day 3',
                note: 'Recite the Talbiyah frequently from now until you cast the first stone at Jamarat al-Aqabah on the morning of Day 3. This is a special time.',
            },
            {
                id: 'day-1.travel-mina',
                label: 'Travel to Mina (by bus, train, or on foot)',
                note: "Your Hajj group will coordinate transport. The Haramain train connects the Masha'ir. Arrival at Mina should be before Dhuhr prayer if possible, though pilgrims arrive throughout the day.",
            },
            {
                id: 'day-1.dhuhr-mina',
                label: 'Pray Dhuhr in Mina, shortened (2 rakaat) without combining',
                note: "The four prayers of Dhuhr, Asr, Maghrib, Isha, and the next day's Fajr are all prayed in Mina, shortened (qasr) but not combined. This is the Sunnah established by the Prophet ﷺ at Mina. Practices vary; follow your group's scholar.",
            },
            {
                id: 'day-1.asr-mina',
                label: 'Pray Asr in Mina, shortened (2 rakaat)',
            },
            {
                id: 'day-1.maghrib-mina',
                label: 'Pray Maghrib in Mina (3 rakaat, not shortened)',
            },
            {
                id: 'day-1.isha-mina',
                label: 'Pray Isha in Mina, shortened (2 rakaat)',
            },
            {
                id: 'day-1.sleep-mina',
                label: 'Sleep in Mina — rest well for the day of Arafah tomorrow',
                note: 'Tents in Mina are shared and crowded. Sleep early if you can. Tomorrow, Arafah, is the heart of Hajj — you will want to be alert and present for it.',
            },
            {
                id: 'day-1.fajr-mina',
                label: 'Wake for Fajr and pray in Mina (the following morning)',
                note: 'Fajr on the 9th is prayed in Mina before departing for Arafah.',
            },
        ],
        duas: ['talbiyah', 'entering_ihram'],
        edgeCases: [
            'If your package does not include Mina on the 8th, confirm with your group leader — spending the night in Mina on the 8th is Sunnah but not obligatory.',
            'Do not apply perfume to your Ihrām garments — only to your body before wearing Ihrām.',
            'If you are unsure whether you have passed the Mīqāt, enter Ihrām early to be safe.',
            'Ihrām prohibitions begin from the moment you make the intention, not just when you put on the garments. Be aware.',
        ],
    },

    {
        id: 'day-2',
        slug: 'day-2',
        date: '9th Dhul Hijjah',
        arabicDate: '٩ ذو الحجة',
        arabicName: 'يَوْم عَرَفَة',
        name: 'Yawm Arafah',
        title: 'Day 2 — Yawm Arafah',
        subtitle: 'The Heart of Hajj',
        location: 'Mina → Arafah → Muzdalifah',
        overview: `The Prophet ﷺ said: "Hajj is Arafah." This is the day. Nothing — not the Ka\'bah, not the Talbiyah, not the pebbles — carries the weight of this one afternoon.

From Dhuhr until sunset, you will stand on the plain of Arafah in dua, remembrance, and seeking forgiveness. Allah descends to the nearest heaven and boasts to the angels about His pilgrims. Many sins of a lifetime are forgiven today. Be completely present.

After sunset, you travel to Muzdalifah — an open plain — where you sleep under the stars, pray Maghrib and Isha combined, and collect your pebbles for the Jamarat.`,
        steps: [
            {
                id: 'day-2.fajr-mina',
                label: 'Pray Fajr in Mina',
                note: 'This is the Fajr of the 9th. Pray in your tent in Mina before departing.',
            },
            {
                id: 'day-2.travel-arafah',
                label: 'Travel from Mina to Arafah after sunrise',
                note: 'Departure is after Fajr and after sunrise. Do not travel before sunrise — the Sunnah is to travel after it. The Prophet ﷺ departed Mina after the sun had risen.',
            },
            {
                id: 'day-2.arrive-arafah',
                label: 'Arrive at Arafah and settle in your area',
                note: 'You must be within the boundaries of Arafah (there are markers). Jabal ar-Rahmah (Mount of Mercy) is not required — the entire plain is valid. Seek shade. Stay hydrated.',
            },
            {
                id: 'day-2.dhuhr-asr-arafah',
                label: "Pray Dhuhr and Asr combined and shortened at Arafah (after the imam's khutbah)",
                note: 'This is prayed at Dhuhr time (early), combined and shortened: 2 rakaat Dhuhr, then 2 rakaat Asr. Follow your group. This is established Sunnah.',
            },
            {
                id: 'day-2.wuquf',
                label: 'Stand in dua and dhikr from Dhuhr until sunset — the Wuquf (standing)',
                note: 'You do not have to physically stand — sitting, lying down, being in your tent are all fine. "Standing" means being present at Arafah during the time. Spend this time in sincere supplication. Weep if you can. Make dua for everything you have ever needed.',
            },
            {
                id: 'day-2.sunset-depart',
                label: 'Depart Arafah after sunset — do not leave before sunset',
                note: 'Leaving Arafah before sunset is a violation that requires a Hady sacrifice. Wait until the sun has fully set. Recite Talbiyah as you depart.',
            },
            {
                id: 'day-2.travel-muzdalifah',
                label: 'Travel to Muzdalifah — be calm in the crowds',
                note: 'The road from Arafah to Muzdalifah is extremely crowded. This is normal. Recite Talbiyah and dhikr. The Prophet ﷺ proceeded calmly and said, "O people, be calm."',
            },
            {
                id: 'day-2.maghrib-isha-muzdalifah',
                label: 'Pray Maghrib and Isha combined at Muzdalifah (at Isha time)',
                note: 'These are combined at Isha time: 3 rakaat Maghrib then 2 rakaat Isha. This is Sunnah. Do not pray Maghrib separately on the road — delay it until you reach Muzdalifah.',
            },
            {
                id: 'day-2.collect-pebbles',
                label: 'Collect pebbles for the Jamarat',
                note: 'Collect at least 49 pebbles (for 2 nights in Mina) or 70 (for 3 nights). Chickpea to marble-sized. You may also collect in Mina. No need to wash them.',
            },
            {
                id: 'day-2.sleep-muzdalifah',
                label: 'Sleep in Muzdalifah — under the open sky',
                note: 'Most pilgrims sleep on the ground or mats. This is part of the Hajj. The elderly, ill, women, and their companions may leave Muzdalifah after midnight — this is a dispensation. Others remain until after Fajr.',
            },
            {
                id: 'day-2.fajr-muzdalifah',
                label: 'Wake early and pray Fajr at Muzdalifah',
                note: 'Pray Fajr early, as the Prophet ﷺ prayed at the earliest permissible time in Muzdalifah. After Fajr, face the Qiblah and make dua until it is light.',
            },
            {
                id: 'day-2.mashaar-dua',
                label: "Make dua at al-Mash'ar al-Haram (Muzdalifah mosque) if possible",
                note: "Allah commanded pilgrims to remember Him at al-Mash'ar al-Haram (Quran 2:198). Face the Qiblah and make dua until it becomes bright. Not obligatory to be at the mosque itself.",
            },
            {
                id: 'day-2.depart-muzdalifah',
                label: 'Depart Muzdalifah for Mina before sunrise',
                note: 'The Sunnah is to depart before sunrise on the 10th. Travel back to Mina for the stoning.',
            },
        ],
        duas: ['talbiyah', 'arafah_dua', 'safa_dua'],
        edgeCases: [
            'You must be within the boundaries of Arafah — not outside them. The boundaries are clearly marked.',
            'If you arrive at Arafah after sunset but before Fajr of the 10th, your Hajj is still valid — the Wuquf can be at night.',
            'Elderly, disabled, and ill pilgrims — and their companions — may leave Muzdalifah after midnight. This is a confirmed dispensation from the Prophet ﷺ.',
            'Do not leave Arafah before sunset. This is a serious violation.',
            'If you fall ill at Arafah, remain within the boundaries if at all possible — even lying down counts as Wuquf.',
            "Keep your group leader's number handy. Losing your group at Muzdalifah is extremely common.",
        ],
    },

    {
        id: 'day-3',
        slug: 'day-3',
        date: '10th Dhul Hijjah',
        arabicDate: '١٠ ذو الحجة',
        arabicName: 'يَوْم النَّحْر',
        name: 'Yawm al-Naḥr',
        title: 'Day 3 — Yawm al-Naḥr',
        subtitle: 'Eid al-Adha — The Day of Sacrifice',
        location: 'Muzdalifah → Mina → Makkah → Mina',
        overview: `Today is Eid al-Adha and the busiest, most intensive day of Hajj. Four major rites are performed — ideally in this order:

1. Stone Jamarat al-Aqabah (7 pebbles)
2. Sacrifice the Hady animal
3. Shave or shorten the hair
4. Perform Tawaf al-Ifadah and Sa'i in Makkah

After step 3, partial Tahallul (first exit from Ihrām) takes effect: all Ihrām restrictions are lifted except sexual relations with the spouse. Full Tahallul (second exit) takes effect after Tawaf al-Ifadah.

This is a very physically demanding day. Pace yourself. Stay hydrated. The stoning area is extremely crowded — stay calm, keep moving, and do not stop in the walkways.`,
        steps: [
            {
                id: 'day-3.travel-mina',
                label: 'Travel from Muzdalifah to Mina before sunrise',
            },
            {
                id: 'day-3.stone-aqabah',
                label: 'Stone Jamarat al-Aqabah: 7 pebbles, saying "Allāhu akbar" with each',
                note: 'This is the large Jamarat closest to Makkah. Cast 7 pebbles, one at a time, saying "Allāhu akbar" with each. The Talbiyah stops here — you do not recite it after the first stone. Preferred time: after Fajr, but it is valid throughout the day and night.',
            },
            {
                id: 'day-3.talbiyah-stops',
                label: 'Stop reciting the Talbiyah after the first stone at Jamarat al-Aqabah',
                note: 'The Talbiyah is recited from Ihrām until this moment. Do not recite it after.',
            },
            {
                id: 'day-3.hady-sacrifice',
                label: 'Sacrifice the Hady animal (or confirm your operator has done so)',
                note: "Required for Tamattu' and Qiran pilgrims. Most Hajj packages include this and handle it through the Islamic Development Bank's sacrifice scheme. Confirm with your operator that your sacrifice has been performed before shaving.",
            },
            {
                id: 'day-3.shave-hair',
                label: 'Men: Shave head (afdal) or shorten hair. Women: Cut a fingertip-length from the hair.',
                note: 'Shaving (halq) is superior for men. Shortening (taqsir) is permitted. Barbers are available throughout Mina. After this act, partial Tahallul takes effect.',
            },
            {
                id: 'day-3.remove-ihram',
                label: 'Remove Ihrām garments — change into normal clothes (partial Tahallul)',
                note: 'After shaving, all Ihrām restrictions are lifted EXCEPT relations with the spouse. You may now use scented soap, wear regular clothes, cut nails, etc.',
            },
            {
                id: 'day-3.travel-makkah',
                label: 'Travel from Mina to Makkah for Tawaf al-Ifadah',
                note: 'This is a heavy journey on the most crowded day. Be patient. Your group will coordinate.',
            },
            {
                id: 'day-3.tawaf-ifadah',
                label: "Perform Tawaf al-Ifadah — 7 circuits of the Ka'bah",
                note: 'This is the obligatory Tawaf of Hajj. No special Ihrām required — you are in normal clothes. This Tawaf is what most distinguishes Hajj from Umrah and is a pillar (rukn) of Hajj. Without it, Hajj is incomplete.',
            },
            {
                id: 'day-3.sai',
                label: "Perform Sa'i — 7 times between Safa and Marwah",
                note: "If you performed Sa'i after your Umrah (for Tamattu' pilgrims), some scholars say you need not repeat it. Others say it is required. Follow your group's scholar.",
            },
            {
                id: 'day-3.full-tahallul',
                label: 'Full Tahallul — all restrictions lifted after Tawaf al-Ifadah',
                note: "After completing Tawaf al-Ifadah (and Sa'i if required), full Tahallul is reached. Marital relations are now permitted.",
            },
            {
                id: 'day-3.return-mina',
                label: 'Return to Mina and sleep there for the night of the 11th',
                note: 'Spending the nights of the 11th and 12th (and optionally 13th) in Mina is required (wajib). Return before midnight if possible.',
            },
        ],
        duas: ['jamarat', 'black_stone', 'between_rukns', 'safa_marwa_verse', 'safa_dua'],
        edgeCases: [
            'The preferred order today is: stone, sacrifice, shave, tawaf. It is valid to do them in other orders — consult your scholar if needed.',
            'Tawaf al-Ifadah can be delayed to the 11th or 12th without penalty — useful if the crowds on the 10th are too severe.',
            'Women experiencing menstruation may delay Tawaf al-Ifadah until they are pure. Consult a scholar if there is a risk of missing your flight.',
            'Do not stop in the Jamarat walkway to make dua — keep moving. Dua after stoning can be made elsewhere.',
            "Raml (the brisk walk in the first 3 circuits of Tawaf) and Idtiba' (draping the rida' over the left shoulder) are Sunnah for men in Tawaf al-Qudoom. In Tawaf al-Ifadah, scholars differ — follow your scholar.",
            "If you cannot complete Sa'i on Day 3, it can be done on Days 4 or 5.",
        ],
    },

    {
        id: 'day-4',
        slug: 'day-4',
        date: '11th Dhul Hijjah',
        arabicDate: '١١ ذو الحجة',
        arabicName: 'أَوَّل أَيَّام التَّشْرِيق',
        name: 'First Day of Tashriq',
        title: 'Day 4 — 11th Dhul Hijjah',
        subtitle: 'First Day of Tashriq — Stone All Three Jamarat',
        location: 'Mina',
        overview: `Today you remain in Mina. The primary act is stoning all three Jamarat — small, middle, and large — in that order, with 7 pebbles each (21 total today).

The stoning is performed after the sun passes its zenith (Dhuhr time). Do not stone before this. The window extends until sunset (with some scholars permitting until dawn, though daytime is strongly preferred).

Use the rest of the day for prayer, dhikr, recitation of Quran, and rest. The Ayyam al-Tashriq (days of 11th, 12th, 13th) are days for eating, drinking, and remembering Allah.`,
        steps: [
            {
                id: 'day-4.fajr-mina',
                label: 'Pray Fajr in Mina',
            },
            {
                id: 'day-4.wait-dhuhr',
                label: 'Wait until the sun passes its zenith (Dhuhr time) before stoning',
                note: 'Stoning before Dhuhr on the 11th, 12th, and 13th is not permitted according to the majority of scholars. The time begins when the sun passes its zenith.',
            },
            {
                id: 'day-4.stone-sughra',
                label: 'Stone Jamarat al-Sughra (small): 7 pebbles, "Allāhu akbar" with each',
                note: 'Start with the small Jamarat (furthest from Makkah). Cast 7 pebbles one at a time.',
            },
            {
                id: 'day-4.dua-after-sughra',
                label: 'After stoning al-Sughra: face the Qiblah, raise hands, make extended dua',
                note: 'This is Sunnah — the Prophet ﷺ stood after stoning each of the first two Jamarat and made dua. The third (al-Aqabah) is not followed by dua on the spot.',
            },
            {
                id: 'day-4.stone-wusta',
                label: 'Stone Jamarat al-Wusta (middle): 7 pebbles, "Allāhu akbar" with each',
            },
            {
                id: 'day-4.dua-after-wusta',
                label: 'After stoning al-Wusta: face the Qiblah, raise hands, make extended dua',
            },
            {
                id: 'day-4.stone-aqabah',
                label: 'Stone Jamarat al-Aqabah (large): 7 pebbles, "Allāhu akbar" with each',
                note: 'No extended dua on the spot after al-Aqabah. Leave the area after stoning.',
            },
            {
                id: 'day-4.prayers-mina',
                label: 'Pray all five prayers in Mina, shortened',
            },
            {
                id: 'day-4.sleep-mina-night',
                label: 'Sleep in Mina (night of the 12th)',
                note: "Spending the night in Mina is required (wajib). If you leave Mina before sunset on the 12th, you may depart early (ta'ajjul). If you are still in Mina at sunset on the 12th, you must stay for the 13th as well.",
            },
        ],
        duas: ['jamarat'],
        edgeCases: [
            'Stone in order: small, then middle, then large. This order is required.',
            'Do not stone before Dhuhr on Days 4, 5, and 6.',
            'After each of the first two Jamarat, stand facing the Qiblah and make dua. This Sunnah is easy to miss in the crowds — find a place to stand after moving away from the pillar.',
            'If the crowds are extremely severe, some scholars permit elderly and weak pilgrims to stone at night. Consult your scholar.',
        ],
    },

    {
        id: 'day-5',
        slug: 'day-5',
        date: '12th Dhul Hijjah',
        arabicDate: '١٢ ذو الحجة',
        arabicName: 'ثَانِي أَيَّام التَّشْرِيق',
        name: 'Second Day of Tashriq',
        title: 'Day 5 — 12th Dhul Hijjah',
        subtitle: 'Second Day of Tashriq — Stone and Optionally Depart',
        location: 'Mina (→ Makkah for most pilgrims)',
        overview: `Today is the same as yesterday for stoning — all three Jamarat after Dhuhr, in order (small, middle, large), 7 pebbles each.

After stoning, you have a choice:
- **Ta\'ajjul (early departure):** Leave Mina before sunset. This is a valid dispensation (Quran 2:203). Most package pilgrims leave today.
- **Stay for Day 6:** If you remain in Mina at sunset on the 12th, you must stay one more day and stone again on the 13th.

Before leaving Makkah entirely, you will perform the Farewell Tawaf (Tawaf al-Wada\'). This should be the last thing you do before leaving the city.`,
        steps: [
            {
                id: 'day-5.fajr-mina',
                label: 'Pray Fajr in Mina',
            },
            {
                id: 'day-5.wait-dhuhr',
                label: 'Wait until after Dhuhr time before stoning',
            },
            {
                id: 'day-5.stone-sughra',
                label: 'Stone Jamarat al-Sughra: 7 pebbles, "Allāhu akbar" with each',
            },
            {
                id: 'day-5.dua-after-sughra',
                label: 'Stand after al-Sughra, face Qiblah, make dua',
            },
            {
                id: 'day-5.stone-wusta',
                label: 'Stone Jamarat al-Wusta: 7 pebbles, "Allāhu akbar" with each',
            },
            {
                id: 'day-5.dua-after-wusta',
                label: 'Stand after al-Wusta, face Qiblah, make dua',
            },
            {
                id: 'day-5.stone-aqabah',
                label: 'Stone Jamarat al-Aqabah: 7 pebbles, "Allāhu akbar" with each',
            },
            {
                id: 'day-5.decision',
                label: "Decide: leave Mina before sunset (ta'ajjul) or stay for Day 6",
                note: 'If leaving: depart Mina before sunset. If staying: you must stone again tomorrow (13th). Most international pilgrims use the dispensation and depart today.',
            },
            {
                id: 'day-5.tawaf-wada',
                label: "Perform Tawaf al-Wada' (Farewell Tawaf) before leaving Makkah",
                note: "Required for non-Makkan pilgrims. 7 circuits of the Ka'bah. This should be your last act in Makkah before heading to the airport or bus.",
            },
        ],
        duas: ['jamarat', 'black_stone', 'between_rukns', 'tawaf_wada', 'farewell_tawaf'],
        edgeCases: [
            'If you leave Mina after sunset on the 12th, you must stay and stone on the 13th.',
            'Women experiencing menstruation are exempt from the Farewell Tawaf — they may depart without it. (Sahih Muslim 1328)',
            "Tawaf al-Wada' should ideally be the last thing you do. Avoid eating, shopping, or other activities in Makkah after it.",
            "After Tawaf al-Wada', walk backward a few steps while facing the Ka'bah before leaving — this is not obligatory but is a well-known practice of farewell. Focus on your heart, not ceremony.",
        ],
    },

    {
        id: 'day-6',
        slug: 'day-6',
        date: '13th Dhul Hijjah',
        arabicDate: '١٣ ذو الحجة',
        arabicName: 'ثَالِث أَيَّام التَّشْرِيق',
        name: 'Third Day of Tashriq',
        title: 'Day 6 — 13th Dhul Hijjah (Optional)',
        subtitle: 'Third Day of Tashriq — Final Stoning',
        location: 'Mina',
        isOptional: true,
        overview: `This day applies only to pilgrims who remained in Mina past sunset on the 12th, or who chose to stay voluntarily. Staying for the full three days of Tashriq is considered more virtuous.

The rites today are the same as Days 4 and 5: stone all three Jamarat after Dhuhr, in order, 7 pebbles each.

After stoning today, your Hajj rites are complete. Proceed to Makkah for the Farewell Tawaf (if you have not yet done it), then depart.`,
        steps: [
            {
                id: 'day-6.fajr-mina',
                label: 'Pray Fajr in Mina',
            },
            {
                id: 'day-6.wait-dhuhr',
                label: 'Wait until after Dhuhr time before stoning',
            },
            {
                id: 'day-6.stone-sughra',
                label: 'Stone Jamarat al-Sughra: 7 pebbles, "Allāhu akbar" with each',
            },
            {
                id: 'day-6.dua-after-sughra',
                label: 'Stand after al-Sughra, face Qiblah, make dua',
            },
            {
                id: 'day-6.stone-wusta',
                label: 'Stone Jamarat al-Wusta: 7 pebbles, "Allāhu akbar" with each',
            },
            {
                id: 'day-6.dua-after-wusta',
                label: 'Stand after al-Wusta, face Qiblah, make dua',
            },
            {
                id: 'day-6.stone-aqabah',
                label: 'Stone Jamarat al-Aqabah: 7 pebbles, "Allāhu akbar" with each',
            },
            {
                id: 'day-6.depart-mina',
                label: 'Depart Mina — Hajj rites are now complete',
            },
            {
                id: 'day-6.tawaf-wada',
                label: "Perform Tawaf al-Wada' before leaving Makkah (if not yet done)",
            },
        ],
        duas: ['jamarat', 'black_stone', 'between_rukns', 'farewell_tawaf'],
        edgeCases: ['You must leave Mina before sunset on the 13th — there is no 14th stoning.'],
    },

    {
        id: 'farewell',
        slug: 'farewell',
        date: 'Before leaving Makkah',
        arabicDate: '',
        arabicName: 'طَوَاف الْوَدَاع',
        name: "Tawaf al-Wada'",
        title: 'Farewell Tawaf',
        subtitle: 'The Final Tawaf before leaving Makkah',
        location: 'Masjid al-Haram',
        overview: `Tawaf al-Wada\' (the Farewell Tawaf) is required for all non-Makkan pilgrims before leaving Makkah. It is a wajib (required) act, and its omission requires a Hady sacrifice if not remedied.

This should be the last act you perform in Makkah. After completing it, head directly to your transportation. Do not stop for shopping, meals, or other activities after completing Tawaf al-Wada\'.

Women experiencing menstruation are exempt from Tawaf al-Wada\'.

This is your goodbye to the Ka\'bah. Allow yourself to be present in it.`,
        steps: [
            {
                id: 'farewell.tawaf',
                label: "Perform 7 circuits of the Ka'bah (Tawaf al-Wada')",
                note: 'No specific Ihrām required. Normal clothing. Say "Allāhu akbar" when passing the Black Stone. Make personal dua during the tawaf.',
            },
            {
                id: 'farewell.two-rakaat',
                label: 'Pray 2 rakaat behind Maqam Ibrahim if possible',
            },
            {
                id: 'farewell.zamzam',
                label: 'Drink Zamzam water',
                note: 'Face the Ka\'bah, say "Bismillah," drink in three sips, and make dua. The Prophet ﷺ said Zamzam is "for whatever purpose it is drunk."',
            },
            {
                id: 'farewell.multazam',
                label: 'Supplicate at the Multazam if you can reach it',
                note: "The Multazam is the wall between the Black Stone and the Ka'bah door. Press yourself against it and pour out your heart. There is no specific dua — only your own.",
            },
            {
                id: 'farewell.depart',
                label: "Leave Makkah directly after Tawaf al-Wada'",
                note: 'Go straight to your transport. May Allah accept your Hajj.',
            },
        ],
        duas: ['tawaf_wada', 'farewell_tawaf', 'black_stone', 'between_rukns'],
        edgeCases: [
            "If you shop or eat after Tawaf al-Wada' and then leave, some scholars say you must repeat it. Go straight to your transport after completing it.",
            'Women experiencing menstruation or post-natal bleeding are exempt and may depart without it.',
            "If you will be in Makkah for several more days after Hajj rites, perform Tawaf al-Wada' only just before your final departure.",
        ],
    },
];
