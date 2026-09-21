/* Bari 2026 — Apulia, 10–15.06.2026 (archiwum)
   Dane wyjazdu. Silnik aplikacji siedzi w index.html i czyta je przez registerTrip().
   Dodanie kolejnego wyjazdu = nowy plik obok tego + jeden <script> w index.html. */

const BARI_SEED = {
    targetDate: "2026-06-10T03:15",
    isReturnMode: false,
    splitExpenses: [],
    removedBagSeedIds: [],
    startBari: [
        {id: 's0', text: '<b>WAŻNE:</b> Wysłano zdjęcia dowodów i e-mail do Dario na WA!', checked: false},
        {id: 's1', text: 'Uber na lotnisko (03:15)', checked: false},
        {id: 's2', text: 'Bramki zamykają się 05:20!', checked: false},
        {id: 's3', text: 'Lot FR2722 (Dawid 26E, Gosia 26F)', checked: false},
        {id: 's4', text: 'Wejście: Tylne drzwi, Kolejka Pierwszeństwo', checked: false},
        {id: 's5', text: 'Hala Przylotów: Skręć w LEWO i idź za <b>NIEBIESKĄ LINIĄ</b> do stacji.', checked: false},
        {id: 's6', text: 'Biletomat (Lotnisko): Wybierz Quintino Sella, zapłać kartą (5.30€).', checked: false},
        {id: 's7', text: 'Bramki na peron: <b>Zeskanuj KOD QR</b> z biletu, by otworzyć bramkę!', checked: false}
    ],
    shopData: [
        {id: 'sh1', text: 'Zgrzewka wody mineralnej', checked: false},
        {id: 'sh2', text: 'Lokalne wino Primitivo', checked: false},
        {id: 'sh_magnet1', text: '🧲 Magnesy na pamiątkę (Polignano/Monopoli — dzień 3)', checked: false},
        {id: 'sh_magnet2', text: '🧲 Magnesy — ostatnia szansa (Bari — dzień 6)', checked: false},
        {id: 'sh4', text: '<del>Ogórki konserwowe</del> (ZAKAZ!)', checked: true}
    ],
    checkoutData: [
        {id: 'co1', text: 'Wyrzucone śmieci (Wymóg kaucji!)', checked: false},
        {id: 'co2', text: 'Sejf sprawdzony (Paszporty!)', checked: false},
        {id: 'co3', text: 'Ładowarki z gniazdek', checked: false},
        {id: 'co5', text: '<b>NAGRAĆ WIDEO Z APARTAMENTU! (Kaucja)</b>', checked: false}
    ],
    bagsData: [
        {
            id: 'bagTemp', name: 'Tymczasowa', icon: 'fa-hourglass-half', color: 'text-amber-600', temp: true,
            items: [
                { id: 'btemp1', text: 'Kąpielówki Dawid', qty: 1, checked: false },
                { id: 'btemp2', text: 'T-shirty Dawid (do walizki?)', qty: 3, checked: false },
                { id: 'btemp3', text: 'Majtki Dawid (do walizki)', qty: 1, checked: false }
            ]
        },
        {
            id: 'bag1', name: 'Walizka 10kg (Główna)', icon: 'fa-suitcase', color: 'text-slate-600',
            items: [
                { id: 'b1i3', text: 'Wygodne buty na zwiedzanie', qty: 1, checked: false },
                { id: 'b1i4', text: 'Klapki Dawid', qty: 1, checked: false },
                { id: 'b1i5', text: 'Buty do wody Dawid', qty: 1, checked: false },
                { id: 'b1i6', text: 'Buty do wody Gosia', qty: 1, checked: false },
                { id: 'b1i7', text: 'Piżama Dawid', qty: 1, checked: false },
                { id: 'b1i8', text: 'Piżama Gosia', qty: 1, checked: false },
                { id: 'b1i9', text: 'Sandały Gosia', qty: 1, checked: false }
            ]
        },
        {
            id: 'bag2', name: 'Plecak Dawida (Pod fotel)', icon: 'fa-backpack', color: 'text-blue-600',
            items: [
                { id: 'b2i1', text: 'Paszporty / Dowody', sec: true, pocket: true, qty: 1, checked: false },
                { id: 'b2i2', text: 'Portfel (Karty płatnicze, EKUZ)', sec: true, pocket: true, qty: 1, checked: false },
                { id: 'b2i5', text: '<b class="text-green-700">Dokładnie 21€ dla Katii (Sprzątaczki)</b>', qty: 1, checked: false },
                { id: 'b2i3', text: 'Powerbank (Musi być w podręcznym!)', sec: true, pocket: true, qty: 1, checked: false },
                { id: 'b2d1', text: 'Majtki', qty: 6, checked: false },
                { id: 'b2d2', text: 'Spodenki krótkie', qty: 3, checked: false },
                { id: 'b2d3', text: 'Spodnie długie', qty: 1, checked: false },
                { id: 'b2d4', text: 'Koszula', qty: 1, checked: false },
                { id: 'b2d5', text: 'T-shirty', qty: 3, checked: false },
                { id: 'b2d6', text: 'Kosmetyczka z płynami (work 100ml!)', sec: true, qty: 1, checked: false }
            ]
        },
        {
            id: 'bag3', name: 'Plecak Gosi (Pod fotel)', icon: 'fa-backpack', color: 'text-pink-600',
            items: [
                {id: 'b3i1', text: 'Okulary przeciwsłoneczne', sec: false, checked: false},
                {id: 'b3i4', text: 'Płyny/Błyszczyki Gosi (do worka 100ml!)', sec: true, checked: false}
            ]
        }
    ],
    planBari: [
        {
            id: 'pb1', date: 'Dzień 1 (10.06) - Przylot i McDonald\'s',
            items: [
                {id: 'pb1i0', text: '08:30 - Wysiadka z pociągu na stacji Quintino Sella.', checked: false},
                {id: 'pb1i1', text: '08:45-11:45: Kawa i chill z bagażami (np. Pasticceria Magda)', checked: false},
                {id: 'pb1i2', text: '11:55: Przejście pod apartament (Via Trevisani 236)', checked: false},
                {id: 'pb1i3', text: '12:00 CHECK-IN: Domofon Liddi CUTRIGNELLI. Drugie piętro.', checked: false},
                {id: 'pb1i4', text: 'Dać 21€ Katii i zapytać jak włączyć prąd!', checked: false},
                {id: 'pb1siesta', text: '13:00–17:00 — <b>SIESTA</b>: Sklepy zamknięte. McDonald\'s i większość lokali — po 17:00 lub przed 13:00.', checked: false, siesta: true},
                {id: 'pb1kiko', text: '💄 <b>KIKO Milano — grawer laserowy</b> (Via Sparano 53). <b>TAK, robią!</b> Cena: <b>2€</b> (oficjalnie, "in 10 secondi"); <b>gratis</b> w programie <b>KIKO ME</b> przy zakupie od ~30€ (rejestracja darmowa w sklepie). <b>Jak poprosić — IT:</b> „<i>Posso avere un\'incisione laser su questo prodotto?</i>” · „<i>Vorrei incidere un nome, per favore</i>”. <b>EN:</b> „<i>Can I get a laser engraving on this product?</i>” · „<i>I\'d like to engrave a name, please</i>”. Rossetti, gloss, perfumy — max ok. 15 znaków. Godz.: pn–sb 9:00–20:30, nd 10:00–20:30 · tel. 080 573 9849. <b>Dojazd (~20 min pieszo):</b> Via Trevisani 236 → Corso Cavour → Via Sparano 53 (Murat, przy dworcu). Autobus AMTAB z Crisanzio (linie 03/16/19) w stronę centrum. <a href="https://maps.google.com/?q=Via+Trevisani+236+Bari+to+Via+Sparano+53+Bari" target="_blank" onclick="event.stopPropagation()" class="inline-block mt-1 bg-blue-600 text-white px-2 py-1 rounded text-xs font-bold"><i class="fa-solid fa-person-walking"></i> Trasa pieszo</a> <a href="https://maps.google.com/?q=KIKO+Milano+Via+Sparano+53+Bari" target="_blank" onclick="event.stopPropagation()" class="inline-block mt-1 bg-fuchsia-600 text-white px-2 py-1 rounded text-xs font-bold"><i class="fa-solid fa-location-arrow"></i> KIKO na mapie</a> <button type="button" onclick="event.stopPropagation();focusMapPoi(\'kiko-sparano\')" class="inline-block mt-1 bg-slate-700 text-white px-2 py-1 rounded text-xs font-bold"><i class="fa-solid fa-map"></i> Pinezka w apce</button>', checked: false},
                {id: 'pb1i5', text: 'Popołudnie: McDonald\'s! Cel: <b>Crispy McBacon (senza cetrioli)</b>', checked: false}
            ]
        },
        {
            id: 'pb2', date: 'Dzień 2 (11.06) - Alberobello',
            items: [
                {id: 'pb2i1', text: 'Pociąg/Bus z Bari Centrale. <a href="https://www.trenitalia.com/" target="_blank" onclick="event.stopPropagation()" class="inline-block mt-1 bg-red-600 text-white px-2 py-1 rounded text-xs font-bold shadow active:scale-95 transition-transform"><i class="fa-solid fa-train"></i> Trenitalia</a>', checked: false},
                {id: 'pb2checkin', text: '⚠️ <b>CHECK-IN Trenitalia</b> w apce przed odjazdem! <a href="https://www.trenitalia.com/" target="_blank" onclick="event.stopPropagation()" class="inline-block mt-1 bg-red-600 text-white px-2 py-1 rounded text-xs font-bold"><i class="fa-solid fa-mobile-screen"></i> Otwórz apę</a>', checked: false, checkin: true},
                {id: 'pb2siesta', text: '13:00–17:00 — <b>SIESTA</b>: W Alberobello część sklepów zamknięta. Lunch przed 13:00 lub po 17:00.', checked: false, siesta: true},
                {id: 'pb2i2', text: 'Punkt widokowy przy Chiesa di Santa Lucia (na domki Trulli)', checked: false},
                {id: 'pb2i3', text: 'Spacer po Rione Monti i Rione Aia Piccola', checked: false}
            ]
        },
        {
            id: 'pb3', date: 'Dzień 3 (12.06) - Polignano & Monopoli',
            items: [
                {id: 'pb3i1', text: 'Pociąg do Polignano. <a href="https://www.trenitalia.com/" target="_blank" onclick="event.stopPropagation()" class="inline-block mt-1 bg-red-600 text-white px-2 py-1 rounded text-xs font-bold shadow active:scale-95 transition-transform"><i class="fa-solid fa-train"></i> Trenitalia</a>', checked: false},
                {id: 'pb3checkin', text: '⚠️ <b>CHECK-IN Trenitalia</b> w apce przed odjazdem! <a href="https://www.trenitalia.com/" target="_blank" onclick="event.stopPropagation()" class="inline-block mt-1 bg-red-600 text-white px-2 py-1 rounded text-xs font-bold"><i class="fa-solid fa-mobile-screen"></i> Otwórz apę</a>', checked: false, checkin: true},
                {id: 'pb3i2', text: 'Zejście na słynną plażę Lama Monachile pod mostem', checked: false},
                {id: 'pb3i3', text: 'Pomnik Domenico Modugno (super klify do zdjęć)', checked: false},
                {id: 'pb3siesta', text: '13:00–17:00 — <b>SIESTA</b>: Nad morzem plaże OK, ale sklepy mogą być zamknięte. Lunch rano lub wieczorem.', checked: false, siesta: true},
                {id: 'pb3magnet', text: '🧲 <b>Magnesy na pamiątkę!</b> Polignano i Monopoli — stragany przy plaży i w starym mieście.', checked: false, magnet: true},
                {id: 'pb3i4', text: 'Pociąg (5 min) do Monopoli <a href="https://www.trenitalia.com/" target="_blank" onclick="event.stopPropagation()" class="inline-block mt-1 bg-red-600 text-white px-2 py-1 rounded text-xs font-bold shadow active:scale-95 transition-transform"><i class="fa-solid fa-train"></i> Trenitalia</a>', checked: false},
                {id: 'pb3i5', text: 'Spacer na Stary Port (Porto Antico) po zachodzie', checked: false}
            ]
        },
        {
            id: 'pb4', date: 'Dzień 4 (13.06) - Bari Vecchia (Slow Day)',
            items: [
                {id: 'pb4i1', text: 'Wejście w Stare Miasto od strony Zamku', checked: false},
                {id: 'pb4i2', text: '"Ulica Makaronu" (Via dell\'Arco Basso) - panie lepią orecchiette', checked: false},
                {id: 'pb4i3', text: 'Bazylika Św. Mikołaja', checked: false},
                {id: 'pb4siesta', text: '13:00–17:00 — <b>SIESTA</b>: Slow day — idealny czas na drzemkę na balkonie. Sklepy zamknięte.', checked: false, siesta: true},
                {id: 'pb4i4', text: 'Pizza, relaks i wino na balkonie (Zakaz palenia wewn.)', checked: false}
            ]
        },
        {
            id: 'pb5', date: 'Dzień 5 (14.06) - Wybór: Trani lub Matera',
            items: [
                {id: 'pb5i1', text: '<b>Opcja 1 (Trani):</b> Relaks nad morzem, niesamowita biała Katedra i port <a href="https://www.trenitalia.com/" target="_blank" onclick="event.stopPropagation()" class="inline-block mt-1 bg-red-600 text-white px-2 py-1 rounded text-xs font-bold shadow"><i class="fa-solid fa-train"></i> Trenitalia</a>', checked: false},
                {id: 'pb5checkin', text: '⚠️ <b>CHECK-IN Trenitalia</b> (Trani) lub bilet w kasie FAL (Matera)! <a href="https://www.trenitalia.com/" target="_blank" onclick="event.stopPropagation()" class="inline-block mt-1 bg-red-600 text-white px-2 py-1 rounded text-xs font-bold"><i class="fa-solid fa-mobile-screen"></i> Trenitalia</a>', checked: false, checkin: true},
                {id: 'pb5i2', text: '<b>Opcja 2 (Matera):</b> Miasto w skałach. Uwaga na schody!', checked: false},
                {id: 'pb5i3', text: 'Do Matery jeździ stacja FAL (Osobny budynek po lewej na pl. Aldo Moro!)', checked: false},
                {id: 'pb5siesta', text: '13:00–17:00 — <b>SIESTA</b>: W Trani/Materze restauracje mogą przerwać. Zaplanuj lunch wcześniej.', checked: false, siesta: true}
            ]
        },
        {
            id: 'pb6', date: 'Dzień 6 (15.06) - Powrót do KRK ✈️',
            items: []
        }
    ],
    transportStopPhotos: [],
    ticketPhotos: [],
    customMapPins: [],
    foodSpots: [],
    journalEntries: [],
    cashStart: { dawid: 40, gosia: 40 },
    planDayMeta: {
        pb1: { outbound: '08:30 przylot', return: '' },
        pb2: { outbound: '08:00', return: '19:00' },
        pb3: { outbound: '09:00', return: '20:00' },
        pb4: { outbound: '', return: '' },
        pb5: { outbound: '08:30', return: '18:30' },
        pb6: { outbound: '20:00 wyjście', return: '23:05 wylot' }
    }
};

registerTrip('bari', {
    theme: { primary: '#2c3e50', accent: '#e74c3c', dark: '#1a252f', light: '#f4f7f6', bar: '#1a252f' },
    mapZoneOrder: ['bari', 'alberobello', 'polignano', 'monopoli', 'trani', 'matera', 'ostuni', 'locorotondo'],
    planDays: {
        pb1: { date: '2026-06-10', lat: 41.117, lng: 16.871, label: 'Bari', mapZones: ['bari'], mapHint: 'Przylot · apartament i dworce na mapie Bari.' },
        pb2: { date: '2026-06-11', lat: 40.784, lng: 17.237, label: 'Alberobello', mapZones: ['alberobello'], mapHint: 'Wyjazd z Bari Centrale · stacja, trulli i atrakcje na mapie Alberobello.' },
        pb3: { date: '2026-06-12', lat: 40.995, lng: 17.217, label: 'Polignano & Monopoli', mapZones: ['polignano', 'monopoli'], mapHint: 'Dwa miasta nad morze · przełącz strefę na mapie.' },
        pb4: { date: '2026-06-13', lat: 41.127, lng: 16.872, label: 'Bari Vecchia', mapZones: ['bari'], mapHint: 'Slow day w Bari · zielone tipy Dario i atrakcje na mapie.' },
        pb5: { date: '2026-06-14', lat: 41.248, lng: 16.420, label: 'Trani lub Matera', mapZones: ['trani', 'matera', 'bari'], mapHint: 'Trani i Matera na mapie · stacja FAL (start do Matery) w strefie Bari.' },
        pb6: { date: '2026-06-15', lat: 41.117, lng: 16.871, label: 'Bari → lotnisko', mapZones: ['bari'], mapHint: 'Powrót · Quintino Sella i lotnisko na mapie Bari.' }
    },
    def: {
        id: 'bari',
        roomId: 'bari',
        lsPrefix: 'bariApp_',
        legacy: true,
        name: 'Bari 2026',
        short: 'Bari',
        subtitle: 'Apulia · Via Trevisani 236',
        icon: 'fa-city',
        appTitle: 'Bari Autopilot ✈️',
        greetings: {
            morning: 'Buongiorno Dawid! ☕',
            afternoon: 'Buon pomeriggio! Uwaga na sjestę 🌞',
            evening: 'Buonasera! Czas na winko 🍷'
        },
        start: '2026-06-10',
        end: '2026-06-15',
        departureAt: '2026-06-10T03:15:00',
        returnLabel: 'do Krakowa',
        seed: BARI_SEED,
        magnetDays: ['2026-06-12', '2026-06-15'],
        checkoutVideoDate: '2026-06-15',
        startTabTitle: 'Start (10 Czerwca)',
        siestaNote: 'Sjesta w Bari: <b>13:00 - 17:00</b>. Sklepy i restauracje mogą być zamknięte.',
        planZonesNote: '<b>Różne dni = różne miejsca.</b> Pogoda przy każdym dniu jest lokalna. <b>Mapa w Bazie</b> ma strefy m.in. Bari, Alberobello, Trani, Matera, Ostuni, Locorotondo — przełącz nad mapą.',
        apartment: {
            title: 'Via Trevisani 236',
            name: 'Apartament Dario',
            address: 'Via Trevisani 236, Bari',
            mapsQuery: 'Via+Trevisani+236,+Bari',
            checkinTitle: 'Instrukcja Wejścia (12:00)',
            checkinLines: [
                '1. Domofon: <b>Liddi CUTRIGNELLI</b> lub <b>Art Nouveau</b>.',
                '2. Piętro: <b>2 (Second floor)</b>.',
                '3. Czeka Katia: Dać <b>21€ w gotówce</b>, zapytać jak włączyć prąd!'
            ],
            hostLabel: 'WhatsApp Dario',
            hostDefaultPhone: '393476106295',
            hostMessage: 'Ciao Dario, siamo al appartamento Via Trevisani 236. '
        },
        transportNotesDefault: 'Via Trevisani ↔ Centrum — wpisz numery linii',
        insuranceNote: '10.06–16.06.2026 · Europa · wariant Podstawowy · 77 PLN',
        insurance: {
            provider: 'UNIQA (kupione przez Mubi)',
            policyNumber: 'MUBI/03627396',
            helpPhone: '+48225999185',
            helpPhoneLabel: '+48 22 599 91 85',
            smsPhone: '+48661001601',
            smsLabel: '+48 661 001 601',
            facts: [
                { label: 'Okres ochrony', value: '10.06.2026 → 16.06.2026' },
                { label: 'Wariant', value: 'Podstawowy' },
                { label: 'Zakres terytorialny', value: 'Europa' },
                { label: 'Składka', value: '77 zł' }
            ],
            images: [
                { src: 'assets/polisa-uniqa-1.png', alt: 'Polisa UNIQA — strona 1' },
                { src: 'assets/polisa-uniqa-2.png', alt: 'Polisa UNIQA — strona 2' }
            ]
        },
        features: { aptBus: true, falAlert: true, muvt: true }
    }
});
