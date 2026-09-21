/* Monopoli 2026 — Apulia, 30.09–06.10.2026
   Dane wyjazdu. Silnik aplikacji siedzi w index.html i czyta je przez registerTrip().
   Dodanie kolejnego wyjazdu = nowy plik obok tego + jeden <script> w index.html. */

const MONOPOLI_SEED = {
    targetDate: "2026-09-30T03:30",
    isReturnMode: false,
    splitExpenses: [],
    removedBagSeedIds: [],
    startBari: [
        {id: 'ms0a', text: '📦 <b>InPost — nadaj walizkę 24–25.09.</b> Do Włoch jedzie <b>3–5 dni roboczych</b>: nadana w piątek 25.09 dotrze do Monopoli ok. <b>30.09–02.10</b>, czyli już po Waszym przylocie. <b>Nie nadawaj wcześniej</b> — punkt trzyma paczkę tylko ok. 3 dni i odsyła ją do nadawcy. <a href="https://inpost.pl/SzybkieNadania/pl/wysylam-za-granice" target="_blank" onclick="event.stopPropagation()" class="inline-block mt-1 bg-[#ffcc00] text-slate-900 px-2 py-1 rounded text-xs font-bold"><i class="fa-solid fa-box"></i> Szybkie Nadania</a>', checked: false},
        {id: 'ms0b', text: '🖨️ <b>Wydrukuj DWIE etykiety: na wyjazd i na powrót.</b> We Włoszech InPost wymaga naklejonej, wydrukowanej etykiety, a w Monopoli nie będziecie mieć drukarki. Przesyłkę powrotną (Włochy → Polska) kup na SzybkieNadania.pl jeszcze w Krakowie i <b>weź wydruk ze sobą w plecaku</b>. Dorzuć taśmę klejącą.', checked: false},
        {id: 'ms0c', text: '📏 <b>Zmierz walizkę: max 39 × 38 × 64 cm, do 25 kg.</b> Kółka i uchwyty wliczają się w wymiar — typowa kabinówka 55×40×20 jest o ~2 cm za szeroka w jednym boku. Sprawdź to <b>przed</b> opłaceniem etykiety.', checked: false},
        {id: 'ms0d', text: '🚫 <b>Czego NIE wolno wysłać InPostem:</b> powerbank i luźne baterie, aerozole (dezodorant, lakier, pianka), alkohol, leki, szkło i ceramika, płyny powyżej 750 ml, gotówka i biżuteria. To jedzie w plecaku albo zostaje w domu.', checked: false},
        {id: 'ms1', text: '<b>Lot tam: FR2722 · śr. 30.09 · 05:50 Kraków → 07:45 Bari</b> (1 godz. 55 min). Rezerwacja <b>RVI88V</b>.', checked: false},
        {id: 'ms2', text: '<b>Lot powrotny: FR2723 · wt. 06.10 · 23:00 Bari → 00:55 Kraków</b> (lądowanie już 07.10).', checked: false},
        {id: 'ms3', text: '⚠️ <b>CHECK-IN Ryanair</b> — otwiera się <b>29.09 o 05:50</b> (24h przed). Boarding passy na telefon! <a href="https://www.ryanair.com/" target="_blank" onclick="event.stopPropagation()" class="inline-block mt-1 bg-yellow-400 text-slate-900 px-2 py-1 rounded text-xs font-bold"><i class="fa-solid fa-plane"></i> Ryanair</a>', checked: false},
        {id: 'ms4', text: '<b>03:30 wyjazd na lotnisko</b> (Uber/taxi) — na miejscu ok. 04:00. <b>Bramki zamykają się 05:20!</b>', checked: false},
        {id: 'ms5', text: 'Dokumenty: dowód/paszport, EKUZ, polisa. Powerbank i płyny 100ml do <b>podręcznego</b>.', checked: false},
        {id: 'ms6', text: 'Po wylądowaniu (07:45): za <b>niebieską linią</b> do stacji, bilet <b>FR2 → Bari Centrale (5.30€)</b>, QR na bramce.', checked: false},
        {id: 'ms7', text: '<b>Bari Centrale → Monopoli</b> — Trenitalia regionale, ~35–45 min, ok. 3–5€. Kursy mniej więcej co godzinę.', checked: false},
        {id: 'ms8', text: '⚠️ <b>Check-in w Monopoli dopiero 16:00–19:00</b> — zaplanuj, gdzie zostawić bagaże na kilka godzin (patrz dzień 1).', checked: false},
        {id: 'ms9', text: 'Z dworca w Monopoli do apartamentu <b>Via Fiume 19</b> — ~8 min pieszo.', checked: false},
        {id: 'ms10', text: '📦 <b>Odbiór walizki: punkt InPost ITMON156755D</b>, Via Guglielmo Oberdan 39 — <b>2 min od stacji Monopoli</b>, po drodze do apartamentu. Czynne <b>pn–sb 7:30–13:00 i 16:30–20:00</b>, w niedzielę nieczynne. Kod odbioru przyjdzie SMS-em i mailem.', checked: false},
        {id: 'ms11', text: '✈️ <b>Na oba loty tylko plecaki.</b> Walizka jedzie i wraca InPostem. Darmowy plecak Ryanaira pod fotel to <b>40 × 30 × 20 cm</b> (z kółkami i uchwytami) — nic więcej nie wnosicie na pokład.', checked: false}
    ],
    shopData: [
        {id: 'msh1', text: 'Zgrzewka wody mineralnej', checked: false},
        {id: 'msh2', text: 'Śniadania: pieczywo, owoce, kawa', checked: false},
        {id: 'msh3', text: 'Lokalne wino (Primitivo / Verdeca z Valle d\'Itria)', checked: false},
        {id: 'msh4', text: '🧲 Magnesy na pamiątkę (Polignano — dzień 3)', checked: false},
        {id: 'msh5', text: '🧲 Magnesy — ostatnia szansa (Monopoli — dzień 6/7)', checked: false},
        {id: 'msh6', text: '⚠️ <b>Wino i oliwa NIE pojadą walizką InPost</b> — alkohol i szkło są wyłączone z przewozu. Butelki bierzecie w plecaku (kupione po kontroli na lotnisku) albo odpuszczacie.', checked: false}
    ],
    checkoutData: [
        {id: 'mco1', text: 'Wyrzucone śmieci', checked: false},
        {id: 'mco2', text: 'Sprawdzone szuflady i sejf (dokumenty!)', checked: false},
        {id: 'mco3', text: 'Ładowarki z gniazdek', checked: false},
        {id: 'mco4', text: '<b>NAGRAĆ WIDEO CAŁEGO MIESZKANIA</b> przy wyjściu', checked: false},
        {id: 'mco5', text: 'Klucze zwrócone według instrukcji gospodarza', checked: false},
        {id: 'mco6', text: '📦 <b>Walizka InPost spakowana i zaklejona</b>, wydrukowana etykieta powrotna naklejona kodem do góry. Powerbank, płyny, leki i dokumenty <b>wyjęte do plecaka</b>.', checked: false},
        {id: 'mco7', text: '📦 <b>Walizka nadana</b> w punkcie InPost przy Via Oberdan (przed 13:00!) — dalej idziecie już tylko z plecakami.', checked: false}
    ],
    bagsData: [
        {
            id: 'bagTemp', name: 'Tymczasowa', icon: 'fa-hourglass-half', color: 'text-amber-600', temp: true,
            items: []
        },
        {
            id: 'bag1', name: 'Walizka 10kg (Główna)', icon: 'fa-suitcase', color: 'text-slate-600',
            items: []
        },
        {
            id: 'bag2', name: 'Plecak Dawida (Pod fotel)', icon: 'fa-backpack', color: 'text-blue-600',
            items: []
        },
        {
            id: 'bag3', name: 'Plecak Gosi (Pod fotel)', icon: 'fa-backpack', color: 'text-pink-600',
            items: []
        }
    ],
    planBari: [
        {
            id: 'mp1', date: 'Dzień 1 (30.09) - Przylot 07:45, dzień w drodze, check-in 16:00',
            items: [
                {id: 'mp1i0', text: '<b>03:30</b> — wyjazd z domu na lotnisko w Krakowie (Uber/taxi). <b>Bramki zamykają się 05:20!</b>', checked: false},
                {id: 'mp1ryanair', text: '⚠️ <b>CHECK-IN Ryanair</b> zrobiony? Boarding passy w telefonie (lot FR2722, rezerwacja RVI88V). <a href="https://www.ryanair.com/" target="_blank" onclick="event.stopPropagation()" class="inline-block mt-1 bg-yellow-400 text-slate-900 px-2 py-1 rounded text-xs font-bold"><i class="fa-solid fa-plane"></i> Ryanair</a>', checked: false, checkin: true},
                {id: 'mp1i1', text: '<b>05:50 → 07:45 — lot FR2722 Kraków → Bari</b> (1 godz. 55 min).', checked: false},
                {id: 'mp1i2', text: 'Bari Aeroporto: hala przylotów → skręć w <b>LEWO</b> i idź za <b>niebieską linią</b> do stacji (tunel ~300 m). Bilet <b>FR2 → Bari Centrale (5.30€)</b> z automatu, <b>QR skanuj na bramce</b>.', checked: false},
                {id: 'mp1i3', text: '⏳ <b>Uwaga: check-in w Monopoli dopiero 16:00–19:00</b>, a w Bari jesteście ok. 08:30. Zostaje ~7 godzin z bagażami — wybierz plan A lub B poniżej.', checked: false},
                {id: 'mp1planA', text: '<b>Plan A (znane Bari):</b> zostaw bagaże w przechowalni na <b>Bari Centrale</b> (KiPoint / deposito bagagli przy dworcu, ok. 6€ za sztukę), zrób focaccię i Bari Vecchia do ~14:00, potem pociąg do Monopoli.', checked: false},
                {id: 'mp1planB', text: '<b>Plan B (od razu nad morze):</b> jedź prosto do Monopoli (~35–45 min), zostaw bagaże w przechowalni w mieście lub dogadaj z gospodarzem wcześniejsze podrzucenie walizki, i spędź dzień na starówce i plaży.', checked: false},
                {id: 'mp1i4', text: '<b>Bari Centrale → Monopoli</b> — Trenitalia regionale, ~35–45 min, ok. 3–5€. Sprawdź godziny, kursy są mniej więcej co godzinę. <a href="https://www.trenitalia.com/" target="_blank" onclick="event.stopPropagation()" class="inline-block mt-1 bg-red-600 text-white px-2 py-1 rounded text-xs font-bold"><i class="fa-solid fa-train"></i> Trenitalia</a>', checked: false},
                {id: 'mp1checkin', text: '⚠️ <b>CHECK-IN Trenitalia</b> w apce przed odjazdem (bilet elektroniczny)!', checked: false, checkin: true},
                {id: 'mp1siesta', text: '13:00–17:00 — <b>SIESTA</b>: Sklepy zamknięte. Lunch przed 13:00 albo po 17:00.', checked: false, siesta: true},
                {id: 'mp1i5', text: 'Ze stacji Monopoli pieszo do <b>Via Fiume 19</b> (~8 min). <a href="https://maps.google.com/?q=Via+Fiume+19,+70043+Monopoli+BA" target="_blank" onclick="event.stopPropagation()" class="inline-block mt-1 bg-blue-600 text-white px-2 py-1 rounded text-xs font-bold"><i class="fa-solid fa-location-arrow"></i> Apartament</a>', checked: false},
                {id: 'mp1i6', text: '<b>16:00–19:00 CHECK-IN</b> — „La casa di Gio Mar”, Via Fiume 19. <b>Napisz gospodarzowi godzinę przyjazdu</b> jeszcze rano!', checked: false},
                {id: 'mp1inpost', text: '📦 <b>Odbierz walizkę z InPostu — po check-inie.</b> Punkt <b>ITMON156755D</b>, Via Guglielmo Oberdan 39, czynny 7:30–13:00 i <b>16:30–20:00</b> (w południe sjesta). Z Via Fiume 19 ~10 min pieszo. Kod odbioru masz w SMS-ie i mailu. <a href="https://maps.google.com/?q=Via+Guglielmo+Oberdan+39,+70043+Monopoli+BA" target="_blank" onclick="event.stopPropagation()" class="inline-block mt-1 bg-blue-600 text-white px-2 py-1 rounded text-xs font-bold"><i class="fa-solid fa-location-arrow"></i> Nawiguj</a> <button type="button" onclick="event.stopPropagation();focusMapPoi(\'mon-inpost\')" class="inline-block mt-1 bg-slate-700 text-white px-2 py-1 rounded text-xs font-bold"><i class="fa-solid fa-map"></i> Pinezka w apce</button>', checked: false},
                {id: 'mp1inpost2', text: '⏳ <b>Paczka czeka tylko ok. 3 dni</b> od powiadomienia, potem wraca do nadawcy. Jeśli 30.09 jeszcze nie dotarła (szacowane 30.09–02.10) — czekaj na SMS i odbierz <b>od razu następnego dnia</b>.', checked: false},
                {id: 'mp1i7', text: 'Pierwsze zakupy: woda, śniadanie na jutro. <b>Sklepy zamykają ok. 20:30</b>.', checked: false},
                {id: 'mp1i8', text: 'Kolacja przy <b>Porto Antico</b> — świeże ryby i spacer po nabrzeżu.', checked: false}
            ]
        },
        {
            id: 'mp2', date: 'Dzień 2 (01.10) - Monopoli na spokojnie',
            items: [
                {id: 'mp2i1', text: 'Poranna <b>focaccia barese</b> w piekarni przy starówce (kilka euro, must-have).', checked: false},
                {id: 'mp2i2', text: '<b>Centro storico</b> — białe uliczki, Cattedrale Maria SS. della Madia, mury nad morzem.', checked: false},
                {id: 'mp2i3', text: '<b>Castello Carlo V</b> i <b>Porto Antico</b> — kolorowe łodzie gozzi, najlepsze zdjęcia późnym popołudniem.', checked: false},
                {id: 'mp2siesta', text: '13:00–17:00 — <b>SIESTA</b>: Sklepy i większość lokali zamknięta. Jedz i rób zakupy rano lub po 17:00.', checked: false, siesta: true},
                {id: 'mp2i4', text: '<b>Cala Porta Vecchia</b> — miejska plaża pod murami. Na początku października woda wciąż ciepła!', checked: false},
                {id: 'mp2i5', text: 'Gelato na deptaku i kolacja w starym mieście.', checked: false}
            ]
        },
        {
            id: 'mp3', date: 'Dzień 3 (02.10) - Polignano a Mare',
            items: [
                {id: 'mp3i1', text: '<b>Pociąg Monopoli → Polignano a Mare</b> — regionale, ~10–12 min. <a href="https://www.trenitalia.com/" target="_blank" onclick="event.stopPropagation()" class="inline-block mt-1 bg-red-600 text-white px-2 py-1 rounded text-xs font-bold"><i class="fa-solid fa-train"></i> Trenitalia</a>', checked: false},
                {id: 'mp3checkin', text: '⚠️ <b>CHECK-IN Trenitalia</b> w apce przed odjazdem!', checked: false, checkin: true},
                {id: 'mp3i2', text: '<b>Lama Monachile</b> — plaża w wąwozie pod mostem, ikona Polignano.', checked: false},
                {id: 'mp3i3', text: 'Punkty widokowe na klifach i pomnik <b>Domenico Modugno</b>.', checked: false},
                {id: 'mp3siesta', text: '13:00–17:00 — <b>SIESTA</b>: Plaże OK, ale sklepy zamknięte. Lunch przed 13:00 lub po 17:00.', checked: false, siesta: true},
                {id: 'mp3magnet', text: '🧲 <b>Magnesy na pamiątkę!</b> Stragany przy starym mieście i nad plażą.', checked: false, magnet: true},
                {id: 'mp3i4', text: 'Kawa z widokiem na klify, powrót pociągiem do Monopoli przed kolacją.', checked: false}
            ]
        },
        {
            id: 'mp4', date: 'Dzień 4 (03.10) - Alberobello & Valle d\'Itria',
            items: [
                {id: 'mp4i1', text: '⚠️ <b>Sprawdź dojazd dzień wcześniej.</b> Z Monopoli do Alberobello nie ma bezpośredniego pociągu — opcje: autobus regionalny, pociąg przez Bari (FSE) albo auto na jeden dzień.', checked: false},
                {id: 'mp4i2', text: '<b>Alberobello</b> — Rione Monti i Aia Piccola, punkt widokowy przy Chiesa di Santa Lucia.', checked: false},
                {id: 'mp4siesta', text: '13:00–17:00 — <b>SIESTA</b>: W miasteczkach część lokali zamknięta. Lunch przed 13:00.', checked: false, siesta: true},
                {id: 'mp4i3', text: '<b>Locorotondo</b> — okrągłe białe miasteczko nad Valle d\'Itria. Tip od Dario: winnica <b>Bufano Sirose</b>.', checked: false},
                {id: 'mp4i4', text: 'Powrót do Monopoli przed zmrokiem — sprawdź godzinę ostatniego kursu!', checked: false}
            ]
        },
        {
            id: 'mp5', date: 'Dzień 5 (04.10) - Bari Vecchia (powrót do znajomych miejsc)',
            items: [
                {id: 'mp5i1', text: '<b>Pociąg Monopoli → Bari Centrale</b> (~30–40 min). <a href="https://www.trenitalia.com/" target="_blank" onclick="event.stopPropagation()" class="inline-block mt-1 bg-red-600 text-white px-2 py-1 rounded text-xs font-bold"><i class="fa-solid fa-train"></i> Trenitalia</a>', checked: false},
                {id: 'mp5checkin', text: '⚠️ <b>CHECK-IN Trenitalia</b> w apce przed odjazdem!', checked: false, checkin: true},
                {id: 'mp5i2', text: '<b>Bari Vecchia</b> — Via dell\'Arco Basso (ulica orecchiette), Bazylika św. Mikołaja, Castello Svevo. Wszystkie <b>tipy od Dario</b> masz na mapie w strefie Bari.', checked: false},
                {id: 'mp5siesta', text: '13:00–17:00 — <b>SIESTA</b>: Sklepy w Bari zamknięte. Lunch rano lub po 17:00.', checked: false, siesta: true},
                {id: 'mp5i3', text: 'Opcjonalnie: <b>KIKO Milano</b>, Via Sparano 53 — grawer laserowy 2€ (gratis w KIKO ME od ~30€).', checked: false},
                {id: 'mp5i4', text: 'Powrót pociągiem do Monopoli wieczorem.', checked: false}
            ]
        },
        {
            id: 'mp6', date: 'Dzień 6 (05.10) - Ostuni albo plaża',
            items: [
                {id: 'mp6i1', text: '<b>Opcja 1 (Ostuni):</b> pociąg Monopoli → Ostuni (~20 min) + autobus/taxi ze stacji na wzgórze. „Città Bianca” i widok na gaje oliwne.', checked: false},
                {id: 'mp6checkin', text: '⚠️ Bilet/check-in przed odjazdem (jeśli jedziecie pociągiem).', checked: false, checkin: true},
                {id: 'mp6i2', text: '<b>Opcja 2 (leniwy dzień):</b> plaże na północ od Monopoli — Cala Porta Vecchia, Porto Bianco, Lido Sabbiadoro.', checked: false},
                {id: 'mp6siesta', text: '13:00–17:00 — <b>SIESTA</b>: Zaplanuj lunch przed 13:00.', checked: false, siesta: true},
                {id: 'mp6magnet', text: '🧲 <b>Magnesy — ostatnia szansa</b>, jeśli jeszcze nie kupiliście.', checked: false, magnet: true},
                {id: 'mp6i3', text: 'Wieczorem: pakowanie na spokojnie + ostatnia kolacja w porcie.', checked: false}
            ]
        },
        {
            id: 'mp7', date: 'Dzień 7 (06.10) - Check-out rano, wylot 23:00 ✈️',
            items: [
                {id: 'mp7inpost0', text: '📦 <b>Rano spakuj walizkę do wysyłki</b> — zaklej taśmą, naklej <b>wydrukowaną etykietę powrotną</b> (kod dobrze widoczny). Powerbank, płyny, leki, dokumenty i wartościowe rzeczy <b>wyjmij do plecaka</b> — InPost ich nie przewozi.', checked: false, sec: true},
                {id: 'mp7i1', text: '<b>CHECK-OUT 8:00–10:00</b> — Via Fiume 19. <b>NAGRAJ WIDEO</b> całego mieszkania, wyrzuć śmieci, klucze wg instrukcji gospodarza.', checked: false, sec: true},
                {id: 'mp7inpost1', text: '📦 <b>Zaraz po check-oucie nadaj walizkę</b> w punkcie InPost, Via Guglielmo Oberdan 39 (~10 min pieszo). <b>Czynne do 13:00</b>, potem dopiero od 16:30 — zrób to rano. Pokaż paczkę obsłudze i poczekaj na skan etykiety. <a href="https://maps.google.com/?q=Via+Guglielmo+Oberdan+39,+70043+Monopoli+BA" target="_blank" onclick="event.stopPropagation()" class="inline-block mt-1 bg-blue-600 text-white px-2 py-1 rounded text-xs font-bold"><i class="fa-solid fa-location-arrow"></i> Nawiguj</a> <button type="button" onclick="event.stopPropagation();focusMapPoi(\'mon-inpost\')" class="inline-block mt-1 bg-slate-700 text-white px-2 py-1 rounded text-xs font-bold"><i class="fa-solid fa-map"></i> Pinezka w apce</button>', checked: false},
                {id: 'mp7i2', text: '✅ <b>Walizka nadana = problem z bagażem rozwiązany.</b> Lot jest dopiero o 23:00, ale przez cały dzień chodzicie już <b>tylko z plecakami</b> — żadnej przechowalni nie trzeba. Paczka dojedzie do Polski w 3–5 dni roboczych (ok. 12–13.10).', checked: false},
                {id: 'mp7ryanair', text: '⚠️ <b>CHECK-IN Ryanair na powrót</b> — otwiera się <b>05.10 o 23:00</b>. Boarding passy w telefonie (FR2723). <a href="https://www.ryanair.com/" target="_blank" onclick="event.stopPropagation()" class="inline-block mt-1 bg-yellow-400 text-slate-900 px-2 py-1 rounded text-xs font-bold"><i class="fa-solid fa-plane"></i> Ryanair</a>', checked: false, checkin: true},
                {id: 'mp7i3', text: 'Ostatni dzień w Monopoli: kąpiel, starówka, gelato. <b>Lunch przed 13:00</b> — potem sjesta.', checked: false},
                {id: 'mp7magnet', text: '🧲 <b>Ostatnia szansa na magnesy</b> i pamiątki — sklepy zamykają na sjestę i wieczorem.', checked: false, magnet: true},
                {id: 'mp7i4', text: '<b>Ok. 19:00</b> — kolacja albo focaccia na drogę. Bagaży nie odbieracie — walizka jest już w drodze do Polski.', checked: false},
                {id: 'mp7i5', text: '<b>~19:30–20:00</b> — pociąg <b>Monopoli → Bari Centrale</b> (~35–45 min). <b>Sprawdź dokładną godzinę rano</b> — wieczorem kursy są rzadsze! <a href="https://www.trenitalia.com/" target="_blank" onclick="event.stopPropagation()" class="inline-block mt-1 bg-red-600 text-white px-2 py-1 rounded text-xs font-bold"><i class="fa-solid fa-train"></i> Trenitalia</a>', checked: false},
                {id: 'mp7i6', text: 'W Bari Centrale przesiadka na <b>Ferrotramviaria FR2 → Bari Aeroporto</b> (5.30€, ~15 min, QR na bramce przed peronem). <b>Ostatnie kursy ok. 22:30 — nie zostawiaj tego na ostatnią chwilę.</b>', checked: false},
                {id: 'mp7i7', text: 'Cel: być na lotnisku <b>ok. 21:00</b>. Na stacji lotniskowej <b>tunel ~300 m</b> do terminala, potem <b>piętro 1 — Partenze</b>.', checked: false},
                {id: 'mp7i8', text: '<b>Tylko plecaki — omijacie bag drop</b> i idziecie prosto na security. Plecak musi zmieścić się pod fotel: <b>40 × 30 × 20 cm</b>.', checked: false},
                {id: 'mp7i9', text: '<b>KONTROLA BEZPIECZEŃSTWA</b>: płyny 100ml w worku, elektronika i powerbank osobno.', checked: false, sec: true},
                {id: 'mp7i10', text: '🇪🇺 Włochy → Polska = <b>Schengen</b>, bez kontroli granicznej. Dowód/paszport do linii i przy bramce.', checked: false},
                {id: 'mp7i11', text: 'Tablica odlotów — <b>numer gate</b> pojawia się ~40–60 min przed odlotem. Boarding ok. <b>22:30</b>.', checked: false},
                {id: 'mp7i12', text: '<b>23:00 → 00:55 — lot FR2723 Bari → Kraków</b>. Lądowanie już 7 października w nocy — zamów transport z lotniska.', checked: false}
            ]
        }
    ],
    transportStopPhotos: [],
    ticketPhotos: [],
    customMapPins: [],
    foodSpots: [],
    journalEntries: [],
    cashStart: { dawid: 40, gosia: 40 },
    inpost: { pointCode: '', trackingOut: '', trackingBack: '' },
    planVersion: 3,
    planDayMeta: {
        mp1: { outbound: '03:30 wyjazd · 05:50 lot', return: '07:45 przylot' },
        mp2: { outbound: '', return: '' },
        mp3: { outbound: '', return: '' },
        mp4: { outbound: '', return: '' },
        mp5: { outbound: '', return: '' },
        mp6: { outbound: '', return: '' },
        mp7: { outbound: '~19:30 pociąg', return: '23:00 wylot' }
    }
};

registerTrip('monopoli', {
    theme: { primary: '#0f6f86', accent: '#f0803c', dark: '#0a4457', light: '#f1f8fa', bar: '#0a4457' },
    mapZoneOrder: ['monopoli', 'polignano', 'alberobello', 'locorotondo', 'ostuni', 'bari', 'matera', 'trani'],
    planDays: {
        mp1: { date: '2026-09-30', lat: 40.951, lng: 17.297, label: 'Bari → Monopoli', mapZones: ['monopoli', 'bari'], mapHint: 'Przylot · lotnisko i dworce w strefie Bari, apartament w strefie Monopoli.' },
        mp2: { date: '2026-10-01', lat: 40.951, lng: 17.297, label: 'Monopoli', mapZones: ['monopoli'], mapHint: 'Cały dzień w Monopoli · starówka, port i plaża na mapie.' },
        mp3: { date: '2026-10-02', lat: 40.995, lng: 17.217, label: 'Polignano a Mare', mapZones: ['polignano', 'monopoli'], mapHint: 'Pociąg 10 min · Lama Monachile i klify na mapie Polignano.' },
        mp4: { date: '2026-10-03', lat: 40.784, lng: 17.237, label: 'Alberobello & Locorotondo', mapZones: ['alberobello', 'locorotondo'], mapHint: 'Valle d\'Itria · trulli i białe miasteczka. Sprawdź dojazd dzień wcześniej!' },
        mp5: { date: '2026-10-04', lat: 41.127, lng: 16.872, label: 'Bari Vecchia', mapZones: ['bari', 'monopoli'], mapHint: 'Wypad do Bari · wszystkie tipy od Dario w strefie Bari.' },
        mp6: { date: '2026-10-05', lat: 40.734, lng: 17.577, label: 'Ostuni albo plaża', mapZones: ['ostuni', 'monopoli'], mapHint: 'Ostuni na wzgórzu albo leniwy dzień na plażach Monopoli.' },
        mp7: { date: '2026-10-06', lat: 40.951, lng: 17.297, label: 'Monopoli → lotnisko', mapZones: ['monopoli', 'bari'], mapHint: 'Powrót · stacja Monopoli, Bari Centrale i lotnisko na mapie.' }
    },
    def: {
        id: 'monopoli',
        roomId: 'monopoli-2026',
        lsPrefix: 'monopoliApp_',
        name: 'Monopoli 2026',
        short: 'Monopoli',
        subtitle: 'Apulia · Via Fiume 19',
        icon: 'fa-umbrella-beach',
        appTitle: 'Monopoli Autopilot ✈️',
        greetings: {
            morning: 'Buongiorno Dawid! ☕',
            afternoon: 'Buon pomeriggio! Uwaga na sjestę 🌞',
            evening: 'Buonasera! Czas na winko 🍷'
        },
        start: '2026-09-30',
        end: '2026-10-06',
        departureAt: '2026-09-30T03:30:00',
        returnLabel: 'do Krakowa',
        seed: MONOPOLI_SEED,
        inpost: {
            sendFrom: '2026-09-24',
            sendBy: '2026-09-25',
            arrivalWindow: '30.09–02.10',
            pickupFrom: '2026-09-30',
            returnDate: '2026-10-06',
            returnArrival: 'ok. 12–13.10',
            transit: '3–5 dni roboczych',
            maxSize: '39 × 38 × 64 cm',
            maxWeight: '25 kg',
            holdDays: 3,
            point: {
                code: 'ITMON156755D',
                name: 'Agenzia multiservizi Delyfast',
                address: 'Via Guglielmo Oberdan 39, 70043 Monopoli (BA)',
                hours: 'pn–sb 7:30–13:00 i 16:30–20:00 · niedziela nieczynna',
                walk: '2 min od stacji Monopoli · ~10 min od Via Fiume 19',
                mapsQuery: 'Via+Guglielmo+Oberdan+39,+70043+Monopoli+BA',
                poiId: 'mon-inpost'
            }
        },
        preDepartureChecklist: [
            'Walizka nadana InPostem 24–25.09? Bez tego nie dotrze na czas do Monopoli',
            'Etykieta powrotna kupiona i WYDRUKOWANA — we Włoszech bez wydruku nie nadasz paczki',
            'Check-in Ryanair zrobiony? Boarding passy FR2722 w telefonie (rezerwacja RVI88V)',
            'Wyjazd z domu 03:30 — bramki na lotnisku zamykają się 05:20',
            'Paszporty / dowody i EKUZ w plecaku — nie w walizce jadącej InPostem!',
            'Powerbank i płyny 100ml do kuwety — powerbanku InPost w ogóle nie przewozi',
            'Na loty tylko plecaki 40 × 30 × 20 cm — nic poza tym nie wchodzi na pokład'
        ],
        magnetDays: ['2026-10-02', '2026-10-05', '2026-10-06'],
        checkoutVideoDate: '2026-10-06',
        startTabTitle: 'Start (30 września)',
        siestaNote: 'Sjesta w Apulii: <b>13:00 - 17:00</b>. Sklepy i restauracje mogą być zamknięte.',
        planZonesNote: '<b>Różne dni = różne miejsca.</b> Pogoda przy każdym dniu jest lokalna. <b>Mapa w Bazie</b> ma strefy m.in. Monopoli, Polignano, Alberobello, Bari, Ostuni — przełącz nad mapą.',
        apartment: {
            title: 'Via Fiume 19',
            name: 'La casa di Gio Mar',
            address: 'Via Fiume 19, 70043 Monopoli (BA)',
            mapsQuery: 'Via+Fiume+19,+70043+Monopoli+BA',
            checkinTitle: 'Check-in 16:00–19:00',
            checkinLines: [
                'Rezerwacja <b>Booking.com — opłacona</b> (2 574,78 zł). Nie płaćcie nic dodatkowo poza taksą klimatyczną, jeśli jest.',
                'Napisz gospodarzowi <b>godzinę przyjazdu</b> — check-in tylko 16:00–19:00.',
                'Check-out: <b>8:00–10:00</b> w dniu 06.10. Nagraj wideo mieszkania!'
            ],
            hostLabel: 'Gospodarz (WhatsApp)',
            hostDefaultPhone: '',
            hostMessage: 'Buongiorno, siamo la prenotazione Booking per La casa di Gio Mar, Via Fiume 19. '
        },
        transportNotesDefault: 'Monopoli ↔ Bari / Polignano — wpisz godziny pociągów',
        insuranceNote: '30.09–06.10.2026 · Europa · wariant Podstawowy · 2 osoby · 82,39 PLN',
        insurance: {
            provider: 'UNIQA TU S.A.',
            policyNumber: '4106154908',
            owuIndex: 'SPT/25/12/11',
            helpPhone: '+48225999185',
            helpPhoneLabel: '+48 22 599 91 85',
            smsPhone: '+48661001601',
            smsLabel: '+48 661 001 601',
            facts: [
                { label: 'Okres ochrony', value: '30.09.2026 od 00:00 → 06.10.2026 do 23:59' },
                { label: 'Liczba dni', value: '7' },
                { label: 'Wariant', value: 'Podstawowy' },
                { label: 'Zakres terytorialny', value: 'Europa' },
                { label: 'Liczba osób', value: '2' },
                { label: 'Składka', value: '82,39 zł · gotówka, zainkasowana u agenta' },
                { label: 'Data wystawienia', value: '21.09.2026, 15:10' },
                { label: 'Agent', value: 'Internetowy Agent Ubezpieczeniowy sp. z o.o.' }
            ],
            insured: [
                'Dawid Rek — ur. 29.04.1994 (też ubezpieczający, Sosnowiecka 36 m. 39, 31-345 Kraków)',
                'Małgorzata Zięba — ur. 20.09.1993'
            ],
            coverage: [
                { label: 'Koszty leczenia', value: '300 000 zł' },
                { label: 'Natychmiastowa pomoc assistance', value: '300 000 zł' },
                { label: 'Odpowiedzialność cywilna', value: '200 000 zł' },
                { label: 'Następstwa nieszczęśliwych wypadków', value: '30 000 zł' },
                { label: 'Bagaż', value: '2 000 zł' },
                { label: 'Opóźnienie lotu', value: '250 zł' },
                { label: 'Koszty leczenia w RP', value: '250 zł' },
                { label: 'Rehabilitacja w RP', value: '250 zł' },
                { label: 'Szpital w RP (za dzień)', value: '125 zł' },
                { label: 'Amatorskie uprawianie sportów', value: 'w cenie' }
            ],
            warnings: [
                'Ochrona zaczyna się <b>30.09 o 00:00</b> — czyli jeszcze przed wyjazdem z domu o 03:30. Wracając 06.10 jesteście kryci do 23:59.',
                'Bagaż 2 000 zł dotyczy bagażu, <b>który jedzie z Wami</b>. Walizka nadana InPostem to przesyłka — za nią odpowiada InPost (reklamacja przez inpost.pl), nie UNIQA.',
                'Przy wizycie u lekarza <b>najpierw dzwoń na pomoc 24h</b> i podaj numer polisy — inaczej możecie płacić z własnej kieszeni.'
            ],
            images: [
                { src: 'assets/polisa-uniqa-monopoli-1.jpg', alt: 'Polisa UNIQA 4106154908 — strona 1 (zakres ubezpieczenia)' },
                { src: 'assets/polisa-uniqa-monopoli-2.jpg', alt: 'Polisa UNIQA 4106154908 — strona 2' }
            ]
        },
        cashNote: 'Odejmuje tylko wydatki <b>Gotówka</b> tej osoby z rozliczeń.',
        trainLinkNote: 'Wycieczki: Polignano, Bari, Ostuni, Alberobello',
        features: { aptBus: false, falAlert: false, muvt: false },
        bagOverrides: {
            bag1: { name: 'Walizka InPost (jedzie osobno)', icon: 'fa-box-open', color: 'text-amber-700' },
            bag2: { name: 'Plecak Dawida (na pokład)' },
            bag3: { name: 'Plecak Gosi (na pokład)' }
        },
        bagSeedItems: {
            bagTemp: [],
            bag1: [
                { id: 'mb1i1', text: 'Wygodne buty na zwiedzanie', qty: 1, checked: false },
                { id: 'mb1i2', text: 'Klapki / sandały', qty: 2, checked: false },
                { id: 'mb1i3', text: 'Stroje kąpielowe (woda jeszcze ciepła!)', qty: 2, checked: false },
                { id: 'mb1i4', text: 'Bluza / lekka kurtka na wieczory', qty: 2, checked: false },
                { id: 'mb1i5', text: 'Piżamy', qty: 2, checked: false },
                { id: 'mb1i6', text: 'Ręcznik plażowy (szybkoschnący)', qty: 2, checked: false },
                { id: 'mb1i7', text: '⚠️ Ta walizka znika z domu 25.09 — nic z niej nie będzie potrzebne do 30.09', qty: 1, checked: false },
                { id: 'mb1i8', text: '🚫 Bez powerbanku, aerozoli, leków, alkoholu i szkła — InPost tego nie przewozi', qty: 1, checked: false }
            ],
            bag2: [
                { id: 'mb2i1', text: 'Paszporty / Dowody', sec: true, pocket: true, qty: 1, checked: false },
                { id: 'mb2i2', text: 'Portfel (karty, EKUZ)', sec: true, pocket: true, qty: 1, checked: false },
                { id: 'mb2i3', text: 'Powerbank (tylko w podręcznym!)', sec: true, pocket: true, qty: 1, checked: false },
                { id: 'mb2i4', text: 'Kosmetyczka z płynami (worek 100ml!)', sec: true, qty: 1, checked: false },
                { id: 'mb2i5', text: 'Gotówka na start (taksa klimatyczna, targ)', qty: 1, checked: false },
                { id: 'mb2i6', text: '📦 Wydrukowana etykieta powrotna InPost + taśma klejąca', pocket: true, qty: 1, checked: false },
                { id: 'mb2i7', text: 'Ubranie na pierwszy dzień — walizkę odbieracie dopiero ok. 16:30', qty: 1, checked: false }
            ],
            bag3: [
                { id: 'mb3i1', text: 'Okulary przeciwsłoneczne', qty: 1, checked: false },
                { id: 'mb3i2', text: 'Płyny/kosmetyki Gosi (worek 100ml!)', sec: true, qty: 1, checked: false },
                { id: 'mb3i3', text: 'Krem z filtrem', sec: true, qty: 1, checked: false },
                { id: 'mb3i4', text: 'Leki na wyjazd — InPost nie przewozi leków, muszą jechać z Wami', sec: true, qty: 1, checked: false },
                { id: 'mb3i5', text: 'Ubranie na pierwszy dzień — walizka dopiero po check-inie', qty: 1, checked: false }
            ]
        }
    }
});
