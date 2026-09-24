/* Monopoli 2026 — Apulia, 30.09–06.10.2026
   Dane wyjazdu. Silnik aplikacji siedzi w index.html i czyta je przez registerTrip().
   Dodanie kolejnego wyjazdu = nowy plik obok tego + jeden <script> w index.html. */

const MONOPOLI_SEED = {
    targetDate: "2026-09-30T03:30",
    isReturnMode: false,
    splitExpenses: [],
    removedBagSeedIds: [],
    startBari: [
        {id: 'ms0a', text: '📦 <b>InPost — nadaj walizkę jutro (25.09).</b> Cel: <b>Via Marina del Mondo 22</b>, Monopoli (Tabaccheria Pantano). Do Włoch jedzie <b>2–5 dni roboczych</b> (tak podaje InPost) — szacowany dotarcie ok. <b>30.09–02.10</b>, czyli w okolicach przylotu. <b>Po dotarciu paczka czeka na odbiór 7 dni</b> od SMS-a — nie 3. Pakuj dziś, nadajesz jutro. <a href="https://inpost.pl/SzybkieNadania/pl/wysylam-za-granice" target="_blank" onclick="event.stopPropagation()" class="inline-block mt-1 bg-[#ffcc00] text-slate-900 px-2 py-1 rounded text-xs font-bold"><i class="fa-solid fa-box"></i> Szybkie Nadania</a>', checked: false},
        {id: 'ms0b', text: '🖨️ <b>Wydrukuj DWIE etykiety: na wyjazd i na powrót.</b> We Włoszech InPost wymaga naklejonej, wydrukowanej etykiety, a w Monopoli nie będziecie mieć drukarki. Przesyłkę powrotną (Włochy → Polska) kup na SzybkieNadania.pl jeszcze w Krakowie i <b>weź wydruk ze sobą w plecaku</b>. Dorzuć taśmę klejącą.', checked: false},
        {id: 'ms0c', text: '📏 <b>Wasza walizka InPost Parcel:</b> ok. <b>35 × 37 × 59 cm</b> (56 L, pusta ~3,3 kg). Limit przesyłki <b>Duża</b>: <b>39 × 38 × 64 cm</b>, <b>25 kg</b> — macie zapas vs kabinówka Ryanair 10 kg. Kółka/uchwyty wliczają się w pomiar InPost.', checked: false},
        {id: 'ms0d', text: '🚫 <b>Czego NIE wolno wysłać InPostem:</b> powerbank i luźne baterie, aerozole (dezodorant, lakier, pianka), alkohol, leki, szkło i ceramika, płyny powyżej 750 ml, gotówka i biżuteria. To jedzie w plecaku albo zostaje w domu.', checked: false},
        {id: 'ms1', text: '<b>Lot tam: FR2722 · śr. 30.09 · 05:50 Kraków → 07:45 Bari</b> (1 godz. 55 min). Rezerwacja <b>RVI88V</b>.', checked: false},
        {id: 'ms2', text: '<b>Lot powrotny: FR2723 · wt. 06.10 · 23:00 Bari → 00:55 Kraków</b> (lądowanie już 07.10). W <b>Dniu 7</b>: ścieżka <b>A</b> (Bari + Gentile 1880) albo <b>B</b> (Monopoli → lotnisko).', checked: false},
        {id: 'ms3', text: '⚠️ <b>CHECK-IN Ryanair</b> — otwiera się <b>29.09 o 05:50</b> (24h przed). Boarding passy na telefon! <a href="https://www.ryanair.com/" target="_blank" onclick="event.stopPropagation()" class="inline-block mt-1 bg-yellow-400 text-slate-900 px-2 py-1 rounded text-xs font-bold"><i class="fa-solid fa-plane"></i> Ryanair</a>', checked: false},
        {id: 'ms4', text: '<b>03:30 wyjazd na lotnisko</b> (Uber/taxi) — na miejscu ok. 04:00. <b>Bramki zamykają się 05:20!</b>', checked: false},
        {id: 'ms5', text: 'Dokumenty: dowód/paszport, EKUZ, polisa. Powerbank i płyny 100ml do <b>podręcznego</b>.', checked: false},
        {id: 'ms6', text: 'Po wylądowaniu (07:45): <b>Dzień 1 w Planie</b> — wspólny odcinek lotnisko → FR2 → Bari Centrale, potem wybierz <b>ścieżkę A (Bari + Monopoli)</b> albo <b>B (prosto Monopoli)</b> z rozkładami w apce.', checked: false},
        {id: 'ms7', text: '📱 Apki z folderu <b>Włochy</b>: <b>Ferrotramviaria</b> (FR2 lotnisko) · <b>Trenitalia</b> lub <b>Trenìt!</b> (Centrale → Monopoli) · <b>Moovit</b> (backup). <b>MUVT</b> tylko gdy w Bari jedziecie autobusem.', checked: false},
        {id: 'ms8', text: '⚠️ <b>Check-in w Monopoli 16:00–19:00</b> — ścieżka B daje dzień nad morzem; A = focaccia i Bari Vecchia do ~14:00. Na lot tylko plecaki — walizka InPost.', checked: false},
        {id: 'ms9', text: 'Z dworca w Monopoli do apartamentu <b>Via Fiume 19</b> — ~8 min pieszo.', checked: false},
        {id: 'ms10', text: '📦 <b>Odbiór walizki: InPost Point</b> — <b>Via Marina del Mondo 22</b> (Tabaccheria Pantano). ~8 min pieszo od Via Fiume 19, obok Todisa. Czynne <b>pn–pt 8:00–13:00 i 16:00–20:00</b> (sob/nd — sprawdź na miejscu). Kod odbioru przyjdzie SMS-em i mailem.', checked: false},
        {id: 'ms11', text: '✈️ <b>Na oba loty tylko plecaki.</b> Walizka jedzie i wraca InPostem. Darmowy plecak Ryanaira pod fotel to <b>40 × 30 × 20 cm</b> (z kółkami i uchwytami) — nic więcej nie wnosicie na pokład.', checked: false}
    ],
    shopData: [
        {id: 'msh1', text: 'Zgrzewka wody mineralnej', checked: false},
        {id: 'msh2', text: 'Śniadania: pieczywo, owoce, kawa', checked: false},
        {id: 'msh3', text: 'Lokalne wino (Primitivo / Verdeca z Valle d\'Itria)', checked: false},
        {id: 'msh4', text: '🧲 Magnesy na pamiątkę (Polignano — dzień 3)', checked: false},
        {id: 'msh5', text: '🧲 Magnesy — ostatnia szansa (Monopoli — dzień 6/7)', checked: false},
        {id: 'msh6', text: '⚠️ <b>Wino i oliwa NIE pojadą walizką InPost</b> — alkohol i szkło są wyłączone z przewozu. Butelki bierzecie w plecaku (kupione po kontroli na lotnisku) albo odpuszczacie.', checked: false},
        {id: 'msh7', text: '🛒 <b>Gdzie kupować:</b> <b>Carrefour Express</b> (Via Kennedy, 3 min) na szybkie rzeczy · <b>Compro Bene</b> (Via Vittorio Veneto, nie zamyka na sjestę) na codzienne · <b>Lidl</b> (Viale Aldo Moro, otwarty też w niedzielę) na duże zakupy. Pinezki wszystkich sklepów są na mapie w Bazie.', checked: false}
    ],
    checkoutData: [
        {id: 'mco1', text: 'Wyrzucone śmieci', checked: false},
        {id: 'mco2', text: 'Sprawdzone szuflady i sejf (dokumenty!)', checked: false},
        {id: 'mco3', text: 'Ładowarki z gniazdek', checked: false},
        {id: 'mco4', text: '<b>NAGRAĆ WIDEO CAŁEGO MIESZKANIA</b> przy wyjściu', checked: false},
        {id: 'mco5', text: 'Klucze zwrócone według instrukcji gospodarza', checked: false},
        {id: 'mco6', text: '📦 <b>Walizka InPost spakowana i zaklejona</b>, wydrukowana etykieta powrotna naklejona kodem do góry. Powerbank, płyny, leki i dokumenty <b>wyjęte do plecaka</b>.', checked: false},
        {id: 'mco7', text: '📦 <b>Walizka nadana</b> w InPost Point, Via Marina del Mondo 22 (rano, do 13:00!) — dalej idziecie już tylko z plecakami.', checked: false}
    ],
    bagsData: [
        {
            id: 'bagTemp', name: 'Tymczasowa', icon: 'fa-hourglass-half', color: 'text-amber-600', temp: true,
            items: []
        },
        {
            id: 'bag1', name: 'Walizka InPost Parcel', icon: 'fa-suitcase', color: 'text-slate-600',
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
                {id: 'mp1i2', text: '<b>07:45–08:20 — z terminala na peron lotniskowy.</b> Hala przylotów → <b>LEWO</b> za tablicą <b>Train / Ferrotramviaria</b> → tunel <b>~300 m</b> → stacja <b>Bari Aeroporto Karol Wojtyła</b> (jeden peron, kierunek Barletta / Bari). <button type="button" onclick="event.stopPropagation();focusMapPoi(\'airport\')" class="inline-block mt-1 bg-slate-700 text-white px-2 py-1 rounded text-xs font-bold"><i class="fa-solid fa-map"></i> Pinezka</button>', checked: false},
                {id: 'mp1i3', text: '⏳ <b>Check-in w Monopoli dopiero 16:00–19:00</b> — macie bufor na Bari albo na plażę w Monopoli. <b>Na lotach tylko plecaki</b> (walizka czeka w InPost).', checked: false},
                {id: 'mp1algo', text: '🧠 <b>Algorytm „mniej tłoku”</b> (30.09, wtorek):<br>① Po zejściu z samolotu <b>nie łap pierwszego FR2</b> — poczekaj <b>10–15 min</b> (tłok z FR2722 i innych lotów).<br>② Weź <b>kolejny FR2</b> (co ok. <b>20–30 min</b>, rozkład od 15.03.2026).<br>③ W <b>Bari Centrale FNB</b> idź tunelem do <b>RFI Trenitalia</b> — <b>nie</b> na plac FAL / Matera.<br>④ Przesiadka: bufor <b>≥12 min</b>; omijaj regionale odjeżdżające &lt;8 min po przyjeździe FR2.<br>⑤ Wsiadaj w <b>tylną połowę składu</b> (mniej ludzi z lotniska).<br>⑥ <b>Rano w dniu lotu</b> potwierdź godziny w <b>Trenìt!</b> lub Trenitalia — numery pociągów mogą się zmienić.', checked: false},
                {id: 'mp1common', text: '<b>WSPÓLNY odcinek — lotnisko → Bari Centrale (FR2)</b><br><b>Przewoźnik:</b> Ferrotramviaria S.p.A. · linia <b>FR2</b> (metropolitana Bari–Barletta).<br><b>Wsiąść:</b> <b>Bari Aeroporto</b> · <b>Wysiąść:</b> <b>Bari Centrale</b> (stacja FNB, podziemna — <b>nie</b> „Bari Centrale” RFI na peronach naziemnych!).<br><b>Czas:</b> ~15–17 min · <b>Cena:</b> 5,30€ (2026).<br><b>Bilet:</b> automat przy stacji / apka <b>Ferrotramviaria</b> · cel <b>Bari Centrale</b> · <b>QR skan na bramce przed peronem</b> (bez kasowania w maszynce).<br><a href="https://www.ferrotramviaria.it/en-GB/to-airport" target="_blank" onclick="event.stopPropagation()" class="inline-block mt-1 bg-blue-700 text-white px-2 py-1 rounded text-xs font-bold"><i class="fa-solid fa-train"></i> Ferrotramviaria</a> <a href="https://www.trenitalia.com/" target="_blank" onclick="event.stopPropagation()" class="inline-block mt-1 bg-red-600 text-white px-2 py-1 rounded text-xs font-bold"><i class="fa-solid fa-ticket"></i> Bilet łączony TT</a>', checked: false},
                {id: 'mp1common2', text: '<b>Przykład godzin (feriale, szacunek — potwierdź w apce!):</b> na peronie lotniska ok. <b>08:20</b> → FR2 ok. <b>08:56</b> (pomijasz wcześniejszy tłok) → <b>Bari Centrale FNB ~09:13</b>. Tunel pieszy FNB → perony RFI <b>~5–8 min</b>.', checked: false},
                {id: 'mp1pick', text: '🔀 <b>Wybierz jedną ścieżkę</b> (odhacz tylko swoją). <b>A</b> = Bari Vecchia + Monopoli po południu · <b>B</b> = minimalna przesiadka w Bari i od razu Monopoli (~10:00–11:00).', checked: false},
                {id: 'mp1planA', text: '<b>ŚCIEŻKA A — Lotnisko → Bari (dzień) → Monopoli</b>', checked: false},
                {id: 'mp1a1', text: '<b>A1 · FR2</b> jak wyżej → wysiądź <b>Bari Centrale FNB</b>. Opcja biletu: osobno FR2 + regionale <b>albo</b> w Trenitalia/Trenìt! trasa <b>„Bari Aeroporto Karol Wojtyla” → „Monopoli”</b> (FR2 w cenie — kup rano, check-in przed FR2).', checked: false},
                {id: 'mp1a2', text: '<b>A2 · Bagaże (plecaki):</b> opcjonalnie <b>depozyt Bari Centrale</b> (KiPoint / Left luggage przy RFI, ok. 6€/szt.) — tylko jeśli nie chcecie nosić plecaków po Vecchia. Walizki nie macie (InPost).', checked: false},
                {id: 'mp1a3', text: '<b>A3 · Bari Vecchia (~09:30–13:30):</b> z dworca pieszo lub <b>AMTAB</b> (<b>MUVT</b> / Moovit) w stronę <b>Basilica San Nicola / Sw. Mikołaj</b>. Focaccia (Panificio Fiore / Altamura), spacer murów, katedra. Lunch <b>przed 13:00</b> (sjesta!).', checked: false},
                {id: 'mp1a4', text: '<b>A4 · Powrót na perony RFI Bari Centrale</b> ok. <b>13:15</b>. Tablica: kierunek <b>Lecce / Brindisi / Monopoli</b> (linia adriatycka).', checked: false},
                {id: 'mp1a5', text: '<b>A5 · Pociąg Bari Centrale → Monopoli</b><br><b>Przewoźnik:</b> Trenitalia · <b>Regionale</b> (czasem RV).<br><b>Wsiąść:</b> <b>Bari Centrale</b> (RFI) · <b>Wysiąść:</b> <b>Monopoli</b>.<br><b>Czas:</b> ~35–45 min · <b>~3–5€</b>.<br><b>Apka:</b> <b>Trenìt!</b> lub Trenitalia — data <b>30.09.2026</b>, odjazd od <b>13:30</b>. <b>Check-in</b> w apce przed wejściem na peron!<br><b>Przykład połączenia (wzorzec wtorku):</b> FR2 ~08:56 → spacer Bari → regionale ok. <b>13:48–14:18</b> → Monopoli ok. <b>14:30–15:00</b> (z buforem przed check-in 16:00).', checked: false},
                {id: 'mp1planB', text: '<b>ŚCIEŻKA B — Lotnisko → Monopoli (bez zwiedzania Bari)</b>', checked: false},
                {id: 'mp1b1', text: '<b>B1 · Ten sam FR2</b> lotnisko → <b>Bari Centrale FNB</b> (algorytm: FR2 ok. <b>08:56</b>, nie pierwszy po lądowaniu). Tunel FNB → perony RFI bez wychodzenia na miasto.', checked: false},
                {id: 'mp1b2', text: '<b>B2 · Bilet na całość (polecane):</b> w <b>Trenitalia</b> lub <b>Trenìt!</b> kup <b>Bari Aeroporto Karol Wojtyla → Monopoli</b>, jedna trasa z przesiadką w Centrale (FR2 + regionale). <b>Check-in</b> w apce przed FR2. Alternatywa: FR2 5,30€ + osobny bilet regionale w apce (czasem tańsze, więcej klikania).', checked: false},
                {id: 'mp1b3', text: '<b>B3 · Pociąg Bari Centrale → Monopoli</b><br><b>Przewoźnik:</b> Trenitalia Regionale.<br><b>Wsiąść:</b> <b>Bari Centrale</b> · <b>Wysiąść:</b> <b>Monopoli</b> (centrum, ~10 min pieszo od starówki).<br><b>Apka:</b> Trenìt! — szukaj odjazdu <b>09:15–09:45</b> po przyjeździe FR2 (~09:13). Bufor ≥12 min → typowo pociąg ok. <b>09:24 / 09:54 / 10:24</b> (numery w apce!).<br><b>Przykład:</b> FR2 ~08:56 → Centrale ~09:13 → regionale ~09:24 → <b>Monopoli ~10:00</b>.', checked: false},
                {id: 'mp1b4', text: '<b>B4 · Nie idź na Palese-Macchie „w ciemno”</b> — część połączeń wymaga przesiadki; na pierwszy dzień bezpieczniej <b>FR2 + Centrale → Monopoli</b> jak wyżej. Moovit pokaże wyjątki, jeśli coś się zmieni.', checked: false},
                {id: 'mp1b5', text: '<b>B5 · Dzień w Monopoli (10:00–16:00):</b> focaccia na starówce, <b>Cala Porta Vecchia</b>, ewentualnie krótki depozyt plecaków w mieście — <b>napisz gospodarzowi</b>, czy możecie zostawić bagaż przy check-inie wcześniej (nie gwarantowane).', checked: false},
                {id: 'mp1checkin', text: '⚠️ <b>CHECK-IN Trenitalia / Trenìt!</b> — przy bilecie elektronicznym <b>przed każdym</b> odcinkiem Trenitalia (łączony Aeroporto→Monopoli też!). FR2 = tylko QR Ferrotramviaria. <a href="https://www.trenitalia.com/" target="_blank" onclick="event.stopPropagation()" class="inline-block mt-1 bg-red-600 text-white px-2 py-1 rounded text-xs font-bold"><i class="fa-solid fa-mobile-screen"></i> Trenitalia</a>', checked: false, checkin: true},
                {id: 'mp1siesta', text: '13:00–17:00 — <b>SIESTA</b>: Sklepy zamknięte. Lunch przed 13:00 albo po 17:00.', checked: false, siesta: true},
                {id: 'mp1i5', text: 'Ze stacji Monopoli pieszo do <b>Via Fiume 19</b> (~8 min). <a href="https://maps.google.com/?q=Via+Fiume+19,+70043+Monopoli+BA" target="_blank" onclick="event.stopPropagation()" class="inline-block mt-1 bg-blue-600 text-white px-2 py-1 rounded text-xs font-bold"><i class="fa-solid fa-location-arrow"></i> Apartament</a>', checked: false},
                {id: 'mp1i6', text: '<b>16:00–19:00 CHECK-IN</b> — „La casa di Gio Mar”, Via Fiume 19. <b>Napisz gospodarzowi godzinę przyjazdu</b> jeszcze rano!', checked: false},
                {id: 'mp1inpost', text: '📦 <b>Odbierz walizkę z InPostu — po check-inie.</b> <b>Via Marina del Mondo 22</b> (Tabaccheria Pantano · InPost Point). Czynne pn–pt 8:00–13:00 i 16:00–20:00. Z Via Fiume 19 ~8 min pieszo. Kod odbioru masz w SMS-ie i mailu. <a href="https://maps.google.com/?q=Via+Marina+del+Mondo+22,+70043+Monopoli+BA" target="_blank" onclick="event.stopPropagation()" class="inline-block mt-1 bg-blue-600 text-white px-2 py-1 rounded text-xs font-bold"><i class="fa-solid fa-location-arrow"></i> Nawiguj</a> <button type="button" onclick="event.stopPropagation();focusMapPoi(\'mon-inpost\')" class="inline-block mt-1 bg-slate-700 text-white px-2 py-1 rounded text-xs font-bold"><i class="fa-solid fa-map"></i> Pinezka w apce</button>', checked: false},
                {id: 'mp1inpost2', text: '⏳ <b>Paczka czeka 7 dni</b> od SMS-a o gotowości do odbioru (tak podaje InPost), potem wraca do nadawcy. Dotarcie z Polski trwa <b>2–5 dni roboczych</b> — jeśli 30.09 jeszcze nie ma, czekaj na powiadomienie i odbierz w ciągu tygodnia.', checked: false},
                {id: 'mp1i7', text: 'Pierwsze zakupy: woda, śniadanie na jutro. <b>Sklepy zamykają ok. 20:30</b>.', checked: false},
                {id: 'mp1i8', text: 'Kolacja przy <b>Porto Antico</b> — świeże ryby i spacer po nabrzeżu.', checked: false}
            ]
        },
        {
            id: 'mp2', date: 'Dzień 2 (01.10) - Monopoli na spokojnie',
            items: [
                {id: 'mp2i1', text: 'Poranna <b>focaccia barese</b> w piekarni przy starówce (kilka euro, must-have).', checked: false},
                {id: 'mp2i6', text: '🍟 <b>Albo po Waszemu:</b> śniadanie w <b>McCafé, Viale Aldo Moro 69</b> (otwarte codziennie od 7:00), a potem duże zakupy w <b>Lidlu 150 m dalej</b> — ~18 min pieszo z Via Fiume. Oba punkty są na mapie w Bazie.', checked: false},
                {id: 'mp2i2', text: '<b>Centro storico</b> — białe uliczki, Cattedrale Maria SS. della Madia, mury nad morzem.', checked: false},
                {id: 'mp2i3', text: '<b>Castello Carlo V</b> i <b>Porto Antico</b> — kolorowe łodzie gozzi, najlepsze zdjęcia późnym popołudniem.', checked: false},
                {id: 'mp2siesta', text: '13:00–17:00 — <b>SIESTA</b>: Sklepy i większość lokali zamknięta. Jedz i rób zakupy rano lub po 17:00.', checked: false, siesta: true},
                {id: 'mp2i4', text: '<b>Cala Porta Vecchia</b> — miejska plaża pod murami. Na początku października woda wciąż ciepła!', checked: false},
                {id: 'mp2i5', text: 'Gelato i kolacja w starym mieście. Sprawdzone lodziarnie: <b>Gasperini</b> (Largo Plebiscito, najlepsze oceny), <b>Frescolatte</b> (Via Barnaba, od ~16:00), <b>Il Gelato per Passione</b> (nad plażą Porta Vecchia).', checked: false}
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
                {id: 'mp7inpost1', text: '📦 <b>Zaraz po check-oucie nadaj walizkę</b> w InPost Point, <b>Via Marina del Mondo 22</b> (~8 min pieszo). <b>Rano, do 13:00</b> (potem przerwa do 16:00). Pokaż paczkę obsłudze i poczekaj na skan etykiety. <a href="https://maps.google.com/?q=Via+Marina+del+Mondo+22,+70043+Monopoli+BA" target="_blank" onclick="event.stopPropagation()" class="inline-block mt-1 bg-blue-600 text-white px-2 py-1 rounded text-xs font-bold"><i class="fa-solid fa-location-arrow"></i> Nawiguj</a> <button type="button" onclick="event.stopPropagation();focusMapPoi(\'mon-inpost\')" class="inline-block mt-1 bg-slate-700 text-white px-2 py-1 rounded text-xs font-bold"><i class="fa-solid fa-map"></i> Pinezka w apce</button>', checked: false},
                {id: 'mp7i2', text: '✅ <b>Walizka nadana = problem z bagażem rozwiązany.</b> Lot jest dopiero o 23:00, ale przez cały dzień chodzicie już <b>tylko z plecakami</b> — żadnej przechowalni nie trzeba. Paczka dojedzie do Polski w <b>2–5 dni roboczych</b> (ok. 12–13.10).', checked: false},
                {id: 'mp7ryanair', text: '⚠️ <b>CHECK-IN Ryanair na powrót</b> — otwiera się <b>05.10 o 23:00</b>. Boarding passy w telefonie (FR2723). <a href="https://www.ryanair.com/" target="_blank" onclick="event.stopPropagation()" class="inline-block mt-1 bg-yellow-400 text-slate-900 px-2 py-1 rounded text-xs font-bold"><i class="fa-solid fa-plane"></i> Ryanair</a>', checked: false, checkin: true},
                {id: 'mp7magnet', text: '🧲 <b>Ostatnia szansa na magnesy</b> — w Monopoli rano (ścieżka B) albo w Bari po południu (ścieżka A).', checked: false, magnet: true},
                {id: 'mp7algo', text: '🧠 <b>Algorytm wieczoru (06.10, wtorek, wylot 23:00)</b>:<br>① Cel: terminal <b>~21:00</b> (2 h przed lotem, tylko plecaki).<br>② <b>FR2 ostatnie kursy ~22:30</b> z Centrale FNB — zaplanuj FR2 ok. <b>20:15–20:45</b>, nie ostatni pociąg dnia.<br>③ Omijaj regionale <b>17:30–18:30</b> Monopoli↔Bari (tłok dojeżdżających) — wyjedź wcześniej (A) albo po <b>19:00</b> (B).<br>④ FR2: bilet <b>5,30€</b>, QR na bramce FNB · peron <b>Aeroporto / Aeroporto K.W.</b><br>⑤ <b>06.10 rano</b> sprawdź w <b>Trenìt!</b> dokładne godziny Monopoli→Centrale i FR2→lotnisko.', checked: false},
                {id: 'mp7pick', text: '🔀 <b>Wybierz ścieżkę na lotnisko</b> (odhacz jedną). <b>A</b> = dzień w Bari + <b>Antica Gelateria Gentile</b> (od 1880) → FR2 · <b>B</b> = dzień w Monopoli → pociąg → FR2 bez zwiedzania Bari.', checked: false},
                {id: 'mp7planA', text: '<b>ŚCIEŻKA A — Monopoli → Bari (dzień) → lotnisko</b>', checked: false},
                {id: 'mp7a1', text: '<b>A1 · Monopoli → Bari Centrale</b> (rano, po InPost)<br><b>Przewoźnik:</b> Trenitalia Regionale · <b>Wsiąść:</b> <b>Monopoli</b> · <b>Wysiąść:</b> <b>Bari Centrale</b> (RFI).<br><b>Czas:</b> ~35–45 min · <b>~3–5€</b> · apka <b>Trenìt!</b> / Trenitalia · <b>check-in</b> przed peronem.<br><b>Przykład:</b> wyjście z InPost ~10:30 → pociąg ok. <b>10:48–11:18</b> → Centrale ~<b>11:30</b> (mniej tłoku niż szczyt 08:00). <button type="button" onclick="event.stopPropagation();focusMapPoi(\'mon-stazione\')" class="inline-block mt-1 bg-slate-700 text-white px-2 py-1 rounded text-xs font-bold"><i class="fa-solid fa-map"></i> Stacja Monopoli</button>', checked: false},
                {id: 'mp7a2', text: '<b>A2 · Bari Vecchia (~11:30–17:00):</b> pieszo od dworca w stronę <b>Castello Svevo</b> i murów. Focaccia, <b>Via dell\'Arco Basso</b>, Bazylika św. Mikołaja — tipy na mapie w strefie Bari. Lunch <b>przed 13:00</b>.', checked: false},
                {id: 'mp7a3', text: '<b>A3 · Lody — Antica Gelateria Gentile</b> (tradycja <b>od 1880</b>, przy zamku)<br><b>Adres:</b> Piazza Federico II di Svevia 33 · <b>~2 min</b> od Castello Svevo.<br>Must: <b>crema antica</b>, mandorla di Toritto. Po sjeście też OK (otwarte wieczorem w sezonie — sprawdź tabliczkę). <button type="button" onclick="event.stopPropagation();focusMapPoi(\'bari-gelato-gentile\')" class="inline-block mt-1 bg-pink-600 text-white px-2 py-1 rounded text-xs font-bold"><i class="fa-solid fa-ice-cream"></i> Pinezka Gentile</button> <a href="https://maps.google.com/?q=Antica+Gelateria+Gentile,+Piazza+Federico+II+di+Svevia+33,+Bari" target="_blank" onclick="event.stopPropagation()" class="inline-block mt-1 bg-blue-600 text-white px-2 py-1 rounded text-xs font-bold"><i class="fa-solid fa-location-arrow"></i> Nawiguj</a>', checked: false},
                {id: 'mp7siesta', text: '13:00–17:00 — <b>SIESTA</b> w Bari: sklepy zamknięte. Gelato i spacer po 17:00 albo lody Gentile tuż przed wyjazdem na dworzec.', checked: false, siesta: true},
                {id: 'mp7a4', text: '<b>A4 · Powrót na dworzec ~18:30–19:00</b> — pieszo lub <b>MUVT</b> (Moovit) do <b>Bari Centrale RFI</b>. Ostatnie magnesy / KIKO Sparano jeśli chcecie.', checked: false},
                {id: 'mp7a5', text: '<b>A5 · FR2 Bari Centrale FNB → Bari Aeroporto</b><br><b>Przewoźnik:</b> Ferrotramviaria FR2 · <b>Wsiąść:</b> <b>Bari Centrale</b> (FNB, podziemna) · <b>Wysiąść:</b> <b>Bari Aeroporto</b> (koniec linii).<br><b>Bilet:</b> 5,30€ · automat FNB / apka Ferrotramviaria · <b>QR przed peronem</b>.<br><b>Przykład:</b> FR2 ok. <b>20:18–20:48</b> (potwierdź w apce!) → lotnisko ~<b>20:35–21:05</b> + tunel 300 m → terminal ~<b>21:00</b>. <a href="https://www.ferrotramviaria.it/en-GB/to-airport" target="_blank" onclick="event.stopPropagation()" class="inline-block mt-1 bg-blue-700 text-white px-2 py-1 rounded text-xs font-bold"><i class="fa-solid fa-train"></i> Ferrotramviaria</a> <button type="button" onclick="event.stopPropagation();focusMapPoi(\'centrale\')" class="inline-block mt-1 bg-slate-700 text-white px-2 py-1 rounded text-xs font-bold"><i class="fa-solid fa-map"></i> Centrale</button>', checked: false},
                {id: 'mp7planB', text: '<b>ŚCIEŻKA B — Monopoli → lotnisko (bez zwiedzania Bari)</b>', checked: false},
                {id: 'mp7b1', text: '<b>B1 · Dzień w Monopoli (10:00–18:30):</b> plaża, starówka, focaccia, gelato (Gasperini / Frescolatte — mapa Monopoli). Kolacja / focaccia na drogę <b>przed 19:00</b>.', checked: false},
                {id: 'mp7b2', text: '<b>B2 · Monopoli → Bari Centrale</b><br><b>Trenitalia Regionale</b> · <b>Monopoli</b> → <b>Bari Centrale</b> · ~35–45 min · Trenìt! · check-in.<br><b>Przykład:</b> wyjście ~<b>19:15</b> → pociąg ok. <b>19:24–19:54</b> → Centrale RFI ~<b>20:10</b> (po szczycie pendlerów). <a href="https://www.trenitalia.com/" target="_blank" onclick="event.stopPropagation()" class="inline-block mt-1 bg-red-600 text-white px-2 py-1 rounded text-xs font-bold"><i class="fa-solid fa-train"></i> Trenitalia</a>', checked: false},
                {id: 'mp7b3', text: '<b>B3 · Przesiadka FNB → FR2 → lotnisko</b> — z peronów RFI tunel do stacji <b>Ferrotramviaria</b> (FNB). FR2 kierunek <b>Aeroporto</b>, 5,30€, QR na bramce.<br><b>Przykład:</b> po przyjeździe ~20:10 → FR2 ok. <b>20:23–20:53</b> → <b>Bari Aeroporto ~20:40–21:10</b>. Bufor ≥10 min przed ostatnimi kursami!', checked: false},
                {id: 'mp7checkin', text: '⚠️ <b>CHECK-IN Trenitalia</b> na odcinku Monopoli→Bari (ścieżka A i B). FR2 = tylko QR Ferrotramviaria. <a href="https://www.trenitalia.com/" target="_blank" onclick="event.stopPropagation()" class="inline-block mt-1 bg-red-600 text-white px-2 py-1 rounded text-xs font-bold"><i class="fa-solid fa-mobile-screen"></i> Trenitalia</a>', checked: false, checkin: true},
                {id: 'mp7i7', text: '<b>Wspólne — stacja lotniskowa → terminal</b>: tunel <b>~300 m</b> w górę do budynku · <b>piętro 1 Partenze (odloty)</b>. Ryanair FR2723. <button type="button" onclick="event.stopPropagation();focusMapPoi(\'airport\')" class="inline-block mt-1 bg-slate-700 text-white px-2 py-1 rounded text-xs font-bold"><i class="fa-solid fa-map"></i> Stacja lotnisko</button>', checked: false},
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
    bagLayoutVersion: 1,
    planVersion: 7,
    planDayMeta: {
        mp1: { outbound: '03:30 wyjazd · 05:50 lot', return: '07:45 przylot' },
        mp2: { outbound: '', return: '' },
        mp3: { outbound: '', return: '' },
        mp4: { outbound: '', return: '' },
        mp5: { outbound: '', return: '' },
        mp6: { outbound: '', return: '' },
        mp7: { outbound: 'A: Bari · B: ~19:30 pociąg', return: '23:00 wylot' }
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
            sendFrom: '2026-09-25',
            sendBy: '2026-09-25',
            arrivalWindow: '30.09–02.10',
            pickupFrom: '2026-09-30',
            returnDate: '2026-10-06',
            returnArrival: 'ok. 12–13.10',
            transit: '2–5 dni roboczych',
            transitNote: 'Czas dostawy Polska → Włochy i z powrotem — według InPost przy nadaniu.',
            maxSize: '35 × 37 × 59 cm (walizka) · limit InPost Duża: 39 × 38 × 64 cm',
            maxWeight: '25 kg łącznie (walizka pusta ~3,3 kg)',
            holdDays: 7,
            holdNote: '7 dni od SMS-a o gotowości do odbioru w punkcie docelowym (InPost).',
            point: {
                code: 'ITPBA03611P',
                name: 'Tabaccheria Pantano N. 69 (InPost Point)',
                address: 'Via Marina del Mondo 22, 70043 Monopoli (BA)',
                hours: 'pn–pt 8:00–13:00 i 16:00–20:00 · sob/nd — sprawdź na miejscu',
                walk: '~8 min pieszo od Via Fiume 19 · ten sam adres co Todis obok',
                phone: '+39 080 937 6439',
                mapsQuery: 'Via+Marina+del+Mondo+22,+70043+Monopoli+BA',
                poiId: 'mon-inpost',
                returnHint: 'Nadanie powrotne rano w dniu check-outu — do 13:00, potem przerwa do 16:00.'
            }
        },
        preDepartureChecklist: [
            'Walizka nadana InPostem 25.09 (Via Marina del Mondo 22)? Bez tego nie dotrze na czas',
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
        trainLinkNote: 'Dzień 1 i 7: FR2 + Trenìt! (Monopoli ↔ lotnisko)',
        features: { aptBus: false, falAlert: false, muvt: false },
        baggageFallback: {
            panelTitle: 'Plan B: walizka · odbiór · klucze',
            intro: 'Na wypadek opóźnienia paczki InPost albo problemu przy odbiorze — bez paniki. <b>Nie zakładamy najgorszego</b>, ale masz tu sklepy w Monopoli, rozmówki i meldunek krok po kroku.',
            parcelDelay: {
                heading: 'Walizka jeszcze nie dotarła',
                lead: 'Macie <b>plecaki na pokład</b> + <b>7 dni</b> na odbiór od SMS-a. Dopóki paczka nie jest gotowa, żyjcie z tego, co w plecakach, i ewentualnie dokupcie nowe rzeczy poniżej.',
                steps: [
                    'Sprawdź <b>numer przesyłki</b> w panelu InPost powyżej → Śledź (inpost.pl).',
                    'Brak SMS-a po <b>30.09–02.10</b>? Poczekaj jeszcze 1–2 dni robocze, potem <b>Szybkie Nadania / InPost PL</b>.',
                    'Jesteś w Monopoli bez walizki: <b>minimum w plecakach</b> (lista) + sklepy z pinezką.',
                    'Po SMS „gotowa do odbioru” — Tabaccheria Pantano, Via Marina del Mondo 22 (godz. pn–pt 8–13 i 16–20).'
                ],
                essentials: [
                    'Ubranie na pierwszy dzień (już w plecaku — checklista Tymczasowa)',
                    'Kąpielówki + klapki w plecaku',
                    'Krem z filtrem, leki, dokumenty — tylko przy sobie, nie w paczce'
                ],
                shopsHeading: 'Dokupić nowe — tylko Monopoli (sieciówki)',
                shopsNote: '<b>Intimissimi / Calzedonia / OVS</b> = nowe ubrania i bielizna. <b>Lidl, Compro Bene, Carrefour</b> = skarpety, podstawowe koszulki czasem, kosmetyki. <b>To nie ciucholandy</b> — zero second-hand. Uwaga na <b>sjestę 13–17</b> (Corso zamknięte, Lidl otwarty).',
                shopPoiIds: ['mon-intimissimi', 'mon-calzedonia', 'mon-ovs', 'mon-compro-bene', 'mon-lidl', 'mon-carrefour']
            },
            checkIn: {
                heading: 'Check-in — ktoś Was przywita i da klucze',
                lead: 'Gospodarz (lub osoba przez niego) <b>spotyka Was na miejscu</b> w apartamencie <b>Via Fiume 19</b>. Okno <b>16:00–19:00</b> w dniu przyjazdu (30.09).',
                steps: [
                    { title: 'Rano w dniu przyjazdu — napisz godzinę', detail: 'WhatsApp / wiadomość Booking: podaj <b>przybliżoną godzinę</b> (np. „ok. 16:30”). Skopiuj tekst poniżej.' },
                    { title: 'Przed 16:00 — potwierdzenie Booking', detail: 'Miej <b>aplikację Booking</b> lub mail z rezerwacją <b>RVI88V / La casa di Gio Mar</b> — opłacone, bez dopłaty poza ewentualną taksą klimatyczną.' },
                    { title: 'Przy Via Fiume 19', detail: 'Zadzwoń / napisz „jesteśmy pod drzwiami”. <b>Ktoś Was przywita</b>, przekaże klucze, krótko objaśni mieszkanie. Zapytaj o <b>śmieci, Wi‑Fi, kontakt na awarie</b>.' },
                    { title: 'Po wejściu', detail: 'Rozpakuj plecaki. <b>Dopiero potem</b> odbierz walizkę z InPost (Marina del Mondo 22), jeśli SMS już był.' },
                    { title: 'Check-out 06.10', detail: '8:00–10:00, wideo mieszkania, klucze wg instrukcji — jak w planie dnia 7.' }
                ],
                bring: [
                    'Dowód / paszport',
                    'Telefon z Bookingiem i numerem gospodarza',
                    'Gotówka na ewentualną taksę klimatyczną (jeśli proszą)'
                ],
                messages: [
                    {
                        label: 'WhatsApp — prośba o spotkanie (IT)',
                        text: 'Buongiorno, siamo Dawid e Małgorzata, prenotazione Booking per La casa di Gio Mar, Via Fiume 19. Arriviamo a Monopoli verso le 16:30. È possibile il check-in oggi? Grazie!'
                    },
                    {
                        label: 'PL — co to znaczy',
                        text: 'Dzień dobry, jesteśmy Dawid i Małgorzata, rezerwacja Booking La casa di Gio Mar, Via Fiume 19. Przyjeżdżamy ok. 16:30. Czy możliwy check-in dziś? Dziękujemy!'
                    },
                    {
                        label: 'Na miejscu (IT)',
                        text: 'Buongiorno, siamo la prenotazione Booking per Via Fiume 19. Siamo qui davanti all\'ingresso.'
                    }
                ]
            },
            phrasesHeading: 'Odbiór paczki w punkcie (ladzie)',
            phrasesLead: 'Wasz punkt to <b>sklep z obsługą</b> (tabaccheria), nie automat — pokaż SMS z kodem. Jeśli coś nie działa, użyj włoskiego zdania (kopiuj).',
            pickupPhrases: [
                {
                    label: 'Odbiór z kodem',
                    pl: 'Dzień dobry, odbieram paczkę InPost. Mam kod z SMS-a.',
                    it: 'Buongiorno, ritiro un pacco InPost. Ho il codice di ritiro nell\'SMS.',
                    en: 'Hello, I\'m picking up an InPost parcel. I have the pickup code in this text message.'
                },
                {
                    label: 'Automat / system nie działa',
                    pl: 'Skrytka nie działa — czy mogę odebrać paczkę u Państwa za ladą?',
                    it: 'Il locker non funziona. Posso ritirare il pacco InPost qui al banco, per favore?',
                    en: 'The locker isn\'t working. Can I collect my InPost parcel at the counter, please?'
                },
                {
                    label: 'Paczka z Polski, nazwisko',
                    pl: 'Przesyłka z Polski na nazwisko [wpisz]. Numer śledzenia: [wpisz].',
                    it: 'Il pacco arriva dalla Polonia, a nome [cognome]. Numero di tracking: [numero].',
                    en: 'The parcel is from Poland, name [surname]. Tracking number: [number].'
                },
                {
                    label: 'Prośba o sprawdzenie',
                    pl: 'Czy jest już paczka InPost dla [nazwisko]? Rezerwacja apartamentu obok.',
                    it: 'C\'è un pacco InPost per [cognome]? Abitiamo qui vicino in Via Fiume 19.',
                    en: 'Is there an InPost parcel for [surname]? We\'re staying nearby at Via Fiume 19.'
                }
            ],
            supportSteps: [
                'Zapisz <b>numery tracking</b> w panelu InPost (tam i powrót).',
                'InPost Włochy — punkt alternatywny: <a href="https://inpost.it/trova-un-locker" target="_blank" rel="noopener">inpost.it/trova-un-locker</a> (u Was i tak ten sam adres Pantano).',
                'Paczka wróciła do nadawcy? Kontakt <b>Szybkie Nadania</b> / reklamacja InPost PL — UNIQA nie obejmuje walizki InPost.',
                'Reklamacja opóźnienia lotu (250 zł w polisie) to osobna sprawa od InPost — tylko przy kwalifikowanym opóźnieniu linii.'
            ],
            footer: 'Szablon na kolejne wyjazdy: sekcja baggageFallback w definicji wyjazdu + pinezki shopPoiIds na mapie.'
        },
        bagOverrides: {
            bag1: { name: 'Walizka InPost Parcel (~56 L)', icon: 'fa-box-open', color: 'text-amber-700' },
            bag2: { name: 'Plecak Dawida (na pokład)' },
            bag3: { name: 'Plecak Gosi (na pokład)' }
        },
        bagSeedItems: {
            bagTemp: [
                { id: 'mtemp-note', text: '📋 <b>Lista startowa z wyjazdu Bari</b> — przenieś ręcznie do walizki InPost / plecaków. Folia stretch na walizkę opcjonalnie (OutOfTheBox).', qty: 1, checked: false },
                { id: 'btemp1', text: 'Kąpielówki Dawid', qty: 1, checked: false },
                { id: 'btemp2', text: 'T-shirty Dawid (do walizki?)', qty: 3, checked: false },
                { id: 'btemp3', text: 'Majtki Dawid (do walizki)', qty: 1, checked: false },
                { id: 'b1i3', text: 'Wygodne buty na zwiedzanie', qty: 1, checked: false },
                { id: 'b1i4', text: 'Klapki Dawid', qty: 1, checked: false },
                { id: 'b1i5', text: 'Buty do wody Dawid', qty: 1, checked: false },
                { id: 'b1i6', text: 'Buty do wody Gosia', qty: 1, checked: false },
                { id: 'b1i7', text: 'Piżama Dawid', qty: 1, checked: false },
                { id: 'b1i8', text: 'Piżama Gosia', qty: 1, checked: false },
                { id: 'b1i9', text: 'Sandały Gosia', qty: 1, checked: false },
                { id: 'b2i1', text: 'Paszporty / Dowody', sec: true, pocket: true, qty: 1, checked: false },
                { id: 'b2i2', text: 'Portfel (Karty płatnicze, EKUZ)', sec: true, pocket: true, qty: 1, checked: false },
                { id: 'b2i5', text: '<b class="text-green-700">Dokładnie 21€ dla Katii (Sprzątaczki)</b> — z Bari, na Monopoli niepotrzebne', qty: 1, checked: false },
                { id: 'b2i3', text: 'Powerbank (Musi być w podręcznym!)', sec: true, pocket: true, qty: 1, checked: false },
                { id: 'b2d1', text: 'Majtki', qty: 6, checked: false },
                { id: 'b2d2', text: 'Spodenki krótkie', qty: 3, checked: false },
                { id: 'b2d3', text: 'Spodnie długie', qty: 1, checked: false },
                { id: 'b2d4', text: 'Koszula', qty: 1, checked: false },
                { id: 'b2d5', text: 'T-shirty', qty: 3, checked: false },
                { id: 'b2d6', text: 'Kosmetyczka z płynami (work 100ml!)', sec: true, qty: 1, checked: false },
                { id: 'b3i1', text: 'Okulary przeciwsłoneczne', qty: 1, checked: false },
                { id: 'b3i4', text: 'Płyny/Błyszczyki Gosi (do worka 100ml!)', sec: true, qty: 1, checked: false },
                { id: 'mtemp-inpost1', text: '📦 Wydrukowana etykieta powrotna InPost + taśma klejąca (Monopoli)', pocket: true, qty: 1, checked: false },
                { id: 'mtemp-inpost2', text: '🚫 Do walizki InPost NIE: powerbank, aerozole, leki, alkohol, szkło — tylko plecaki', qty: 1, checked: false }
            ],
            bag1: [],
            bag2: [],
            bag3: []
        }
    }
});
