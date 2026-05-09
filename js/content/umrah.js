export const umrahPhases = [
    {
        id: 'umrah.home',
        title: 'At Home Before Leaving',
        intro: 'These acts are performed at home before departing for the airport. If it is difficult to put on the Ihrām at the airport, men may put on at least the lower part (izar) from home. Women should change into their Ihrām clothing at home.',
        steps: [
            {
                id: 'umrah.home.ghusl',
                title: 'Perform ghusl, clip nails, trim moustache, remove pubic and underarm hair',
                note: 'All of these are prohibited in the state of Ihrām. Do them before leaving the house. For men: perfume may be applied to the body now — but not to the Ihrām garments themselves.',
            },
            {
                id: 'umrah.home.nafl',
                title: 'Read 2 rakaat nafl for ease of journey (if not a Makruh time)',
                note: 'Recite Surah Kafirun in the 1st rakaat and Surah Ikhlas in the 2nd. After Salah, make dua — send Durood to the Prophet ﷺ, thank Allah for the opportunity, ask for ease of journey, repent from all sins, and seek protection from nafs and Shaytan.',
            },
            {
                id: 'umrah.home.farewell',
                title: 'Meet family and friends and leave in a happy state',
                note: 'Remain in dhikr during the journey and stop for Salat on the way if required. Do NOT miss any Salat — plan the journey taking into account possible traffic. From departure, all pilgrims are travellers (musafir) so Qasr Salat applies.',
            },
        ],
    },
    {
        id: 'umrah.airport',
        title: 'At the Airport — Putting On Ihrām',
        intro: 'If travelling direct to Makkah, put on Ihrām at the airport if not already done at home. It is not recommended to put on Ihrām on the plane — the space is very limited. If you have a transit stop and enough time, you may put it on there. It is recommended for men to at least put on the lower part (izar) at home or the airport.',
        steps: [
            {
                id: 'umrah.airport.checkin',
                title: 'Check in luggage first',
                note: 'Ensure you have not exceeded the baggage weight allowance and that your hand luggage is within the permitted size. Keep all personal documents (passport, tickets) on your person in a small bag or money belt.',
            },
            {
                id: 'umrah.airport.wudu',
                title: 'Perform wudu and apply Itar (perfume) to body — then put on Ihrām',
                note: "Apply perfume to the body only, not the Ihrām sheets themselves. Men: remove all stitched clothing and underwear. Put on the izar (lower sheet) and rida (upper sheet). Women: any modest clothing covering the body — no face veil required except in the presence of non-mahram men (use a cap-type niqab that doesn't touch the face).",
            },
            {
                id: 'umrah.airport.flip-flops',
                title: 'Men: put on flip-flops and put shoes and stitched clothing away',
                note: 'Men must not wear footwear that covers the central bone on the top of the foot while in Ihrām.',
            },
            {
                id: 'umrah.airport.salat-ihram',
                title: 'Read 2 rakaat Salat al-Ihrām (if not a Makruh time) — head covered',
                note: 'Recite Surah Kafirun in the 1st rakaat and Surah Ikhlas in the 2nd. Read with head covered.',
            },
            {
                id: 'umrah.airport.dua-ihram',
                title: 'After Salah, make dua — then go to the toilet and renew wudu before boarding',
                note: '"Allahumma inni as\'aluka ridaka wal-jannata, wa a\'udhu bika min sakhatika wan-nar, bi rahmatika ya arhamar rahimin." Then go to the toilet if needed and renew wudu before boarding — you will make the Niyyah on the plane.',
            },
        ],
    },
    {
        id: 'umrah.plane',
        title: 'On the Plane',
        intro: 'Read all Salat at their correct times during the flight. If going directly to Jeddah, make the Niyyah for Umrah before the plane reaches the Miqat (boundary). Do not use the refreshing towel provided on the plane while in Ihrām.',
        steps: [
            {
                id: 'umrah.plane.salat',
                title: 'Read all Salat at correct times — do not delay or miss any',
                note: 'Read Maghrib when you can see the sunset. Check with the crew if needed. Do not use scented refreshing towels provided on the plane while in Ihrām.',
            },
            {
                id: 'umrah.plane.niyyah',
                title: 'Before reaching the Miqat: make the Niyyah (intention) for Umrah — bare-headed for men',
                note: '"Allahumma inni uridul umrata, fa yassirha li, wa taqabbalha minni." (O Allah, I intend to perform Umrah, so make it easy for me and accept it from me.) If you have not yet put on the upper Ihrām sheet, do so before making the intention. The crew or apps can inform you when the Miqat is approaching.',
            },
            {
                id: 'umrah.plane.talbiyah',
                title: 'Immediately after the Niyyah, begin reciting the Talbiyah',
                note: '"Labbayk Allahumma labbayk, labbayka la sharika laka labbayk, innal hamda wan ni\'mata laka wal mulk, la sharika lak." Men recite aloud; women recite quietly. Continue reciting the Talbiyah frequently throughout the journey until you begin Tawaf.',
            },
        ],
    },
    {
        id: 'umrah.jeddah',
        title: 'At Jeddah Airport',
        intro: 'After landing, you will board a bus to a waiting area. Keep reciting the Talbiyah and stay engaged in worship during any waits — there can be long queues at immigration.',
        steps: [
            {
                id: 'umrah.jeddah.immigration',
                title: 'Pass through immigration — have all documents ready',
                note: 'Immigration officers will check your visa, immunisation certificate, and passport. They will take your photograph and fingerprints (both men and women). You will receive a transport ticket and a sticker on your passport for your Mu\'allim. Men and women may be separated at immigration — arrange to meet at the baggage claim area.',
            },
            {
                id: 'umrah.jeddah.passport',
                title: 'Be aware: your passport will be held by your Hajj operator/Mu\'allim',
                note: 'Your passport will be collected at a checkpoint and submitted at the relevant point. If travelling independently for the return journey, ensure you collect your passport from the group operator before departing for the airport home.',
            },
            {
                id: 'umrah.jeddah.luggage',
                title: 'Collect luggage and meet the rest of your group at baggage claim',
                note: 'Wait in the terminal until your transportation is arranged. This can be a long wait — be patient. Keep reciting the Talbiyah and stay busy in worship.',
            },
            {
                id: 'umrah.jeddah.coach',
                title: 'Board coach to Makkah — checkpoints will be passed on the way',
                note: 'There will be a number of checkpoints on the route to Makkah. At one of these, all passports will be submitted. The coach will proceed to your hotel.',
            },
        ],
    },
    {
        id: 'umrah.makkah',
        title: 'Arriving at Makkah — Entering the Haram',
        intro: 'After arriving at the hotel, perform wudu (or ghusl if needed) then make your way to Masjid al-Haram. Try to enter through Bab al-Umrah if possible. Keep your eyes lowered with humility until you reach the Mataf and see the Ka\'bah.',
        steps: [
            {
                id: 'umrah.makkah.wudu',
                title: 'Perform wudu (or ghusl if needed)',
                note: 'You must have wudu to perform Tawaf. Renew it now before going to the Haram.',
            },
            {
                id: 'umrah.makkah.enter-haram',
                title: 'Enter the Haram with your right foot, reciting the dua for entering',
                note: '"Bismillahi wassalatu wassalamu ala rasulillah, Allahumma iftah li abwaba rahmatik." (In the name of Allah, peace and blessings on the Messenger of Allah. O Allah, open for me the doors of Your mercy.) You may also make the intention of Nafl I\'tikaf.',
            },
            {
                id: 'umrah.makkah.see-kabah',
                title: 'When you see the Ka\'bah for the first time, raise your gaze and recite three times',
                note: '"Allahu Akbar, La ilaha illallah" — three times. Then read Durood Sharif and make as much dua as possible. This is one of the moments where dua is accepted. Ask for everything and remember the whole Ummah.',
            },
        ],
    },
    {
        id: 'umrah.tawaf',
        title: 'Tawaf — Circling the Ka\'bah',
        intro: 'Tawaf is the circumambulation of the Ka\'bah 7 times in an anti-clockwise direction, beginning and ending at the Black Stone. You must have wudu. Men perform Idtiba\' (draping the rida\' under the right armpit to expose the right shoulder) for every Tawaf followed by Sa\'i. If you have a tasbeeh with 7 beads, use it to count the circuits.',
        steps: [
            {
                id: 'umrah.tawaf.stop-talbiyah',
                title: 'Stop reciting the Talbiyah when you begin Tawaf',
                note: 'You will resume the Talbiyah again if you need to perform additional Tawaf, but during the Umrah Tawaf itself, stop the Talbiyah. Ensure you have wudu.',
            },
            {
                id: 'umrah.tawaf.idtiba',
                title: 'Men: perform Idtiba\' — drape the rida\' under the right armpit, exposing the right shoulder',
                note: 'This is done for every Tawaf that is followed by Sa\'i. Do Idtiba\' for all 7 rounds. After the 2 rakaat Salat at Maqam Ibrahim, cover both shoulders again.',
            },
            {
                id: 'umrah.tawaf.black-stone',
                title: 'Begin at the Black Stone — face it and perform Istilam',
                note: 'Position yourself so your right shoulder is in line with the left-hand side of the Black Stone (NOT directly in front). Make the Niyyah for Tawaf. Then make one side-step to be directly in front of the Black Stone. Recite: "Bismillahi Allahu Akbar wa lillahil hamd wassalatu wassalamu ala rasulillah." Raise your hands to your ears, then either kiss the Black Stone if possible, touch it with your right hand, or face your palms towards it and say "Bismillah Allahu Akbar" and kiss your hands. Do NOT make a noise when kissing your hands.',
            },
            {
                id: 'umrah.tawaf.raml',
                title: 'Men: perform Raml for the first 3 rounds — walk briskly with chest out',
                note: 'Raml (walking fast with short steps, chest out, like marching) is performed by men for the first 3 rounds only. For the remaining 4 rounds, walk at a normal pace.',
            },
            {
                id: 'umrah.tawaf.circuits',
                title: 'Complete 7 circuits — make dua and dhikr throughout',
                note: 'Walk anti-clockwise around the Ka\'bah keeping it to your left. Do not turn your chest towards the Ka\'bah at any point — only when performing Istilam at the Black Stone. Make sure to go around the Hatim (the low wall on the northern side) as it is considered inside the Ka\'bah. You can recite any dua — the 3rd Kalimah, Durood, Istighfar, or read from Al-Hizb al-Azam. At the Yemeni Corner (Rukne Yamani), touch it with your right hand if possible. From the Yemeni Corner to the Black Stone, recite: "Rabbana atina fid-dunya hasanatan wa fil-akhirati hasanatan wa qina adhaban-nar."',
            },
            {
                id: 'umrah.tawaf.final-istilam',
                title: 'After 7 circuits, perform the final Istilam (8th in total)',
                note: 'Perform Istilam of the Black Stone one final time to complete the Tawaf.',
            },
            {
                id: 'umrah.tawaf.two-rakaat',
                title: 'Pray 2 rakaat Wajib Salat behind Maqam Ibrahim',
                note: 'Recite Surah Kafirun in the 1st rakaat and Surah Ikhlas in the 2nd. Men: cover both shoulders for this Salat (no Idtiba\' during Salat). If Maqam Ibrahim is too crowded, pray anywhere else in the Masjid. If it is a Makruh time (after Fajr, at Zawal, or between Asr and Maghrib), wait until the Makruh time passes before praying.',
            },
            {
                id: 'umrah.tawaf.dua-multazam',
                title: 'After Salah: make dua at the Multazam if you can reach it',
                note: 'The Multazam is the wall between the Ka\'bah door and the Black Stone. Press yourself against it and pour your heart in dua if you can reach it. If it is too busy, stand near and make dua from a distance.',
            },
            {
                id: 'umrah.tawaf.zamzam',
                title: 'Drink Zamzam water — as much as possible',
                note: 'Face the Qiblah and recite: "Allahumma inni as\'aluka \'ilman nafi\'an, wa rizqan wasi\'an, wa shifa\'an min kulli da\'in." (O Allah, I ask for beneficial knowledge, wide provision, and cure from every illness.) Drink in 3 breaths. You can also pray: "O Allah, by the blessing of this Zamzam, save me from the thirst of the Day of Judgement." Then return to the Black Stone and perform Istilam again before Sa\'i.',
            },
        ],
    },
    {
        id: 'umrah.sai',
        title: "Sa'i — Between Safa and Marwah",
        intro: "Sa'i is walking 7 times between the hills of Safa and Marwah, commemorating Hajar's search for water. Begin at Safa and end at Marwah. Safa to Marwah = 1 trip; Marwah to Safa = 1 trip. 7 trips total, ending at Marwah. After Tawaf, perform Istilam of the Black Stone before proceeding to Sa'i (this is Mustahab).",
        steps: [
            {
                id: 'umrah.sai.approach-safa',
                title: 'Follow signs for the Masa (Sa\'i area) and approach Safa with intention for Sa\'i',
                note: 'When climbing Safa, recite: "Abdau bi ma bada Allahu bihi, innas-Safa wal-Marwata min sha\'a\'irillah." (I begin with what Allah began with — Indeed Safa and Marwah are among the signs of Allah.) This verse is recited only once, at the beginning.',
            },
            {
                id: 'umrah.sai.safa-dua',
                title: 'At Safa: climb as far as possible, face the Ka\'bah, and make dua',
                note: 'Recite 3 times: "Allahu Akbar, La ilaha illallah." Then recite the 4th Kalimah: "La ilaha illallahu wahdahu la sharika lah, lahul mulku wa lahul hamdu, yuhyi wa yumitu, wa huwa \'ala kulli shay\'in qadir." Then recite: "La ilaha illallahu wahdahu, anjaza wa\'dahu, wa nasara \'abdahu, wa hazamal ahzaba wahdah." Then read Durood Sharif and make lots of dua.',
            },
            {
                id: 'umrah.sai.walk',
                title: 'Proceed towards Marwah — men jog between the green lights',
                note: 'Between the two sets of green pillars, men jog briskly. At all other places, walk at a normal pace. Women do not jog. If you cannot jog due to the crowd, do as much as you can. You can recite any dua during Sa\'i — the recommended dua is: "Rabbighfir warham, antal a\'azzul akram." (Lord, forgive and have mercy — You are the Most Majestic, the Most Generous.)',
            },
            {
                id: 'umrah.sai.marwah-dua',
                title: 'At Marwah: face the Ka\'bah direction and repeat the same duas as at Safa',
                note: 'Recite the same sequence as at Safa: 3× Allahu Akbar, La ilaha illallah → 4th Kalimah → dua → Durood Sharif. Then proceed back towards Safa. Continue until you have completed 7 trips, finishing at Marwah.',
            },
            {
                id: 'umrah.sai.complete',
                title: 'After the 7th trip ending at Marwah, Sa\'i is complete',
                note: "It is Mustahab to pray 2 rakaat nafl anywhere in the Haram after Sa'i.",
            },
        ],
    },
    {
        id: 'umrah.hair',
        title: 'Hair Cutting — Completing Umrah',
        intro: 'Umrah is not complete until the hair is cut. For men, completely shaving the head is more rewarding than trimming. Barbers are available in the basement of the Clock Tower (Abraj al-Bait) in Makkah. Do not cut or shave hair on the street.',
        steps: [
            {
                id: 'umrah.hair.barber',
                title: 'Men: go to a barber — shave the head completely or shorten the hair',
                note: 'Start shaving from the right side. Do NOT use perfumed soap or product on the head — confirm with the barber. Shaving (halq) is superior to cutting (taqsir) in terms of reward. Begin from the right side.',
            },
            {
                id: 'umrah.hair.women',
                title: 'Women: cut approximately one inch (fingertip-length) from the end of the hair',
                note: 'Wrap the hair around a finger and cut it. This can be done back at the hotel. This is done each time an Umrah is performed.',
            },
            {
                id: 'umrah.hair.complete',
                title: 'Umrah is now complete — all Ihrām restrictions are lifted',
                note: 'You may now wear normal clothing, use perfume, and resume all normal activities. Give thanks to Allah. Remember: for Tamattu\' pilgrims, you will re-enter Ihrām for Hajj on the 7th Dhul Hijjah.',
            },
        ],
    },
    {
        id: 'umrah.makkah-recommended',
        title: 'Recommended Actions in Makkah',
        intro: 'Between Umrah and the Hajj days, make the most of your time in Makkah. Do not over-exert yourself — you need your strength for Hajj. Prioritise every Salat in congregation in the Haram.',
        steps: [
            {
                id: 'umrah.makkah-recommended.salat-jama',
                title: 'Do not miss any Salat in congregation (Jama\'at) in the Haram Sharif',
                note: 'Each prayer in Masjid al-Haram equals 100,000 prayers elsewhere. This is your priority above all other activities.',
            },
            {
                id: 'umrah.makkah-recommended.quran',
                title: 'Try to complete at least one full recitation of the Quran in the Haram',
                note: 'Read Salah in the Hatim if possible (the low wall on the northern side of the Ka\'bah — make sure it is not a Makruh time). Every letter in the Haram carries exceptional reward.',
            },
            {
                id: 'umrah.makkah-recommended.tawaf',
                title: 'Do as many nafl Tawaf as you can',
                note: 'You can also perform Tawaf on behalf of deceased relatives. Each circuit carries immense reward.',
            },
            {
                id: 'umrah.makkah-recommended.salat-times',
                title: 'Note the Makkah Salat times (Fajr, Dhuhr, Asr, Maghrib, Isha)',
                note: 'You will need these when you are in Mina, Arafah, and Muzdalifah. Save them to your phone or write them down.',
            },
            {
                id: 'umrah.makkah-recommended.qurbani-contact',
                title: 'Confirm the contact details of the person performing your Udhiyah (Qurbani)',
                note: 'If your group organises Qurbani, obtain the contact name and number now. On the 10th Dhul Hijjah, you must confirm 100% that your Qurbani has been done before shaving your head.',
            },
            {
                id: 'umrah.makkah-recommended.social-media',
                title: 'Reflect on social media and unnecessary messaging',
                note: 'You are a guest of Allah. These minutes and hours should be treasured. Disable social media notifications or accounts during Hajj and refrain from taking photographs at the Holy Sites. We do not know if and when we will return — do not waste this time.',
            },
            {
                id: 'umrah.makkah-recommended.learn-hajj',
                title: 'Study and learn the rituals of Hajj before the Hajj days begin',
                note: 'Use this app\'s Hajj Day-by-Day section. Read the rituals carefully and understand what is obligatory, recommended, and what to avoid.',
            },
        ],
    },
];

export const umrahSection = {
    id: 'umrah',
    title: 'Umrah Guide',
    intro: 'A step-by-step guide to performing Umrah for Hajj Tamattu\' pilgrims — from home departure through Makkah arrival, Tawaf, Sa\'i, and completing the Umrah. Mark each step as you complete it.',
    steps: umrahPhases.flatMap((p) => p.steps),
    phases: umrahPhases,
};
