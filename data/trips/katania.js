/* Katania 2026/27 — Sycylia, 23.12.2026–01.01.2027
   Dane wyjazdu. Silnik aplikacji siedzi w index.html i czyta je przez registerTrip().
   Dodanie kolejnego wyjazdu = nowy plik obok tego + jeden <script> w index.html. */

const KATANIA_SEED = {
    targetDate: "2026-12-23T04:30",
    isReturnMode: false,
    splitExpenses: [],
    removedBagSeedIds: [],
    startBari: [
        {id: 'ks1', text: '<b>Lot tam: FR2726 · śr. 23.12 · 07:10 Kraków → 09:40 Katania</b> (2 godz. 30 min). Rezerwacja <b>B5MZJA</b>.', checked: false},
        {id: 'ks2', text: '<b>Lot powrotny: FR2727 · pt. 01.01 · 10:05 Katania → 12:35 Kraków</b>.', checked: false},
        {id: 'ks3', text: '⚠️ <b>CHECK-IN Ryanair</b> — otwiera się <b>22.12 o 07:10</b> (24h przed). Boarding passy na telefon! <a href="https://www.ryanair.com/" target="_blank" onclick="event.stopPropagation()" class="inline-block mt-1 bg-yellow-400 text-slate-900 px-2 py-1 rounded text-xs font-bold"><i class="fa-solid fa-plane"></i> Ryanair</a>', checked: false},
        {id: 'ks4', text: '<b>04:30 wyjazd na lotnisko</b> (Uber/taxi) — na miejscu ok. 05:00. <b>Bramki zamykają się 06:40!</b> Zimą doliczcie czas na odladzanie i korki.', checked: false},
        {id: 'ks5', text: 'Dokumenty: dowód/paszport, EKUZ, polisa. Powerbank i płyny 100ml do <b>podręcznego</b>.', checked: false},
        {id: 'ks6', text: 'Po wylądowaniu (09:40): <b>Alibus</b> sprzed starego terminala → <b>Catania Centrale w 15 min</b>. Bilet <b>4€</b> u kierowcy (gotówka lub karta), ważny 90 min też na inne linie AMT.', checked: false},
        {id: 'ks7', text: '⚠️ <b>Check-in dopiero 16:00–22:00</b>, a w mieście jesteście ok. 10:30. Napisz gospodarzowi o wcześniejsze podrzucenie bagaży albo znajdź przechowalnię przy Catania Centrale.', checked: false},
        {id: 'ks8', text: '🎄 <b>Zakupy zrób 23 i 24 grudnia.</b> 25 i 26 grudnia sklepy i większość lokali są zamknięte, 1 stycznia też.', checked: false},
        {id: 'ks9', text: '🥂 <b>Sylwester:</b> zarezerwuj kolację (cenone) z wyprzedzeniem — w Katanii restauracje 31.12 działają tylko na rezerwacje i stałe menu.', checked: false},
        {id: 'ks10', text: '🚕 <b>Powrót 1 stycznia:</b> check-out do 10:00, a samolot startuje 10:05 — musicie wyjść ok. <b>06:45</b>. Zamów transport na lotnisko dzień wcześniej.', checked: false}
    ],
    shopData: [
        {id: 'ksh1', text: 'Zgrzewka wody mineralnej', checked: false},
        {id: 'ksh2', text: 'Śniadania: pieczywo, owoce, kawa', checked: false},
        {id: 'ksh3', text: '🎄 Zapasy na 25–26.12 (sklepy zamknięte!)', checked: false},
        {id: 'ksh4', text: 'Kolacja wigilijna — ryba z Pescherii, panettone/panforte', checked: false},
        {id: 'ksh5', text: 'Wino z Etny (Etna Rosso / Nerello Mascalese)', checked: false},
        {id: 'ksh6', text: '🥂 Prosecco/spumante na sylwestra', checked: false},
        {id: 'ksh7', text: '🧲 Magnesy na pamiątkę (Taormina — dzień 4)', checked: false},
        {id: 'ksh8', text: '🧲 Magnesy i pamiątki — ostatnia szansa (Katania, 29–31.12)', checked: false},
        {id: 'ksh9', text: 'Pistacje z Bronte, marcepan, cannoli na prezenty', checked: false},
        {id: 'ksh10', text: 'Zapasy na 1 stycznia (sklepy zamknięte, wylot rano)', checked: false}
    ],
    checkoutData: [
        {id: 'kco1', text: 'Wyrzucone śmieci', checked: false},
        {id: 'kco2', text: 'Sprawdzone szuflady i sejf (dokumenty!)', checked: false},
        {id: 'kco3', text: 'Ładowarki z gniazdek', checked: false},
        {id: 'kco4', text: '<b>NAGRAĆ WIDEO CAŁEGO MIESZKANIA</b> przy wyjściu', checked: false},
        {id: 'kco5', text: 'Klucze zwrócone według instrukcji gospodarza', checked: false},
        {id: 'kco6', text: 'Wyjście <b>06:45</b> — sprawdź, czy transport na lotnisko czeka', checked: false}
    ],
    bagsData: [
        {
            id: 'bagTemp', name: 'Tymczasowa', icon: 'fa-hourglass-half', color: 'text-amber-600', temp: true,
            items: []
        },
        {
            id: 'bag1', name: 'Walizka (Główna)', icon: 'fa-suitcase', color: 'text-slate-600',
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
            id: 'kt1', date: 'Dzień 1 (23.12) - Przylot 09:40, Katania, check-in 16:00',
            items: [
                {id: 'kt1i0', text: '<b>04:30</b> — wyjazd z domu na lotnisko w Krakowie. <b>Bramki zamykają się 06:40!</b> Grudzień = odladzanie, wyjedź z zapasem.', checked: false},
                {id: 'kt1ryanair', text: '⚠️ <b>CHECK-IN Ryanair</b> zrobiony? Boarding passy w telefonie (lot FR2726, rezerwacja B5MZJA). <a href="https://www.ryanair.com/" target="_blank" onclick="event.stopPropagation()" class="inline-block mt-1 bg-yellow-400 text-slate-900 px-2 py-1 rounded text-xs font-bold"><i class="fa-solid fa-plane"></i> Ryanair</a>', checked: false, checkin: true},
                {id: 'kt1i1', text: '<b>07:10 → 09:40 — lot FR2726 Kraków → Katania</b> (2 godz. 30 min).', checked: false},
                {id: 'kt1i2', text: '<b>Alibus</b> do centrum: przystanek <b>przed starym terminalem</b> (nie przy krawężniku nowego!). Bilet <b>4€</b> u kierowcy — gotówka lub karta. Do <b>Catania Centrale 15 min</b>, kursy co ~20 min.', checked: false},
                {id: 'kt1i3', text: '⏳ <b>Check-in dopiero 16:00–22:00</b>, a jesteście w mieście ok. 10:30. Napisz gospodarzowi rano o wcześniejsze zostawienie bagaży albo skorzystaj z przechowalni przy Catania Centrale.', checked: false},
                {id: 'kt1i4', text: 'Pierwszy posiłek: <b>arancino</b> i <b>cipollina</b> w barze na Via Etnea — sycylijskie śniadanie na stojąco.', checked: false},
                {id: 'kt1siesta', text: '13:00–16:30 — <b>SJESTA</b>: część sklepów i lokali zamknięta. Zaplanuj lunch przed 13:00 albo po 16:30.', checked: false, siesta: true},
                {id: 'kt1i5', text: '<b>Piazza del Duomo</b>, fontanna <b>u Liotru</b> (słoń z lawy) i katedra św. Agaty — 10 min pieszo od apartamentu.', checked: false},
                {id: 'kt1i6', text: '🎄 <b>ZAKUPY DZIŚ I JUTRO!</b> 25 i 26 grudnia wszystko zamknięte. Woda, śniadania, kolacja wigilijna, zapasy na dwa dni świąt.', checked: false},
                {id: 'kt1i7', text: '<b>16:00–22:00 CHECK-IN</b> — „Karizza Home”, Via Zappalà-Gemelli 4. Instrukcje zameldowania masz w apce Booking. <a href="https://maps.google.com/?q=Via+Zappal%C3%A0-Gemelli+4,+95121+Catania+CT" target="_blank" onclick="event.stopPropagation()" class="inline-block mt-1 bg-blue-600 text-white px-2 py-1 rounded text-xs font-bold"><i class="fa-solid fa-location-arrow"></i> Apartament</a>', checked: false},
                {id: 'kt1i8', text: 'Weź <b>gotówkę na taksę klimatyczną</b> — w Katanii płaci się ją zwykle na miejscu, poza rezerwacją Booking.', checked: false},
                {id: 'kt1i9', text: 'Wieczorem: świąteczne iluminacje na <b>Via Etnea</b> i kolacja w starym mieście.', checked: false}
            ]
        },
        {
            id: 'kt2', date: 'Dzień 2 (24.12) - Wigilia w Katanii',
            items: [
                {id: 'kt2i1', text: 'Rano <b>Pescheria (A Piscaria)</b> — targ rybny tuż za Piazza Duomo. W Wigilię największy ruch w roku, świeże ryby i owoce morza. Czynny <b>tylko rano</b>, do ~14:00.', checked: false},
                {id: 'kt2i2', text: '⚠️ <b>Ostatnie zakupy przed świętami</b> — 24.12 sklepy zamykają wcześniej (ok. 13:00–14:00), 25 i 26 grudnia są zamknięte.', checked: false},
                {id: 'kt2siesta', text: '13:00–16:30 — <b>SJESTA</b>, a w Wigilię miasto zamyka się jeszcze wcześniej.', checked: false, siesta: true},
                {id: 'kt2i3', text: 'Popołudniowy spacer: <b>Via Etnea</b>, <b>Villa Bellini</b> i szopki (presepi) w kościołach starego miasta.', checked: false},
                {id: 'kt2i4', text: '🎄 <b>Wigilia w apartamencie</b> — kolacja z tego, co kupiliście na targu.', checked: false},
                {id: 'kt2i5', text: '<b>Pasterka</b> w katedrze św. Agaty ok. północy — godzinę sprawdź na tablicy przy wejściu.', checked: false}
            ]
        },
        {
            id: 'kt3', date: 'Dzień 3 (25.12) - Boże Narodzenie, miasto zamknięte',
            items: [
                {id: 'kt3i1', text: '⚠️ <b>Wszystko zamknięte:</b> sklepy, muzea, targ. <b>Autobus AST na Etnę dziś NIE kursuje.</b> Otwarte są tylko nieliczne restauracje — i tylko z rezerwacją.', checked: false},
                {id: 'kt3i2', text: 'Msza w <b>katedrze św. Agaty</b> — świąteczne msze przez cały dzień.', checked: false},
                {id: 'kt3i3', text: 'Spacer po pustym mieście: <b>Via Crociferi</b> (najpiękniejsza barokowa uliczka), <b>Teatro Romano</b> z zewnątrz, plac Duomo bez tłumów — najlepsze zdjęcia w roku.', checked: false},
                {id: 'kt3i4', text: 'Dłuższy spacer nad morze: <b>Lungomare</b> i port. Grudzień w Katanii to zwykle 15–17°C w dzień.', checked: false},
                {id: 'kt3i5', text: 'Świąteczny obiad w apartamencie — z zapasów zrobionych 23–24.12.', checked: false}
            ]
        },
        {
            id: 'kt4', date: 'Dzień 4 (26.12) - Taormina (Santo Stefano)',
            items: [
                {id: 'kt4i1', text: '<b>Pociąg Catania Centrale → Taormina-Giardini</b> — regionale, 35–60 min, ok. 5–7€. Sprawdź rozkład, w święta kursów jest mniej. <a href="https://www.trenitalia.com/" target="_blank" onclick="event.stopPropagation()" class="inline-block mt-1 bg-red-600 text-white px-2 py-1 rounded text-xs font-bold"><i class="fa-solid fa-train"></i> Trenitalia</a>', checked: false},
                {id: 'kt4checkin', text: '⚠️ <b>Bilet/CHECK-IN Trenitalia</b> w apce przed odjazdem!', checked: false, checkin: true},
                {id: 'kt4i2', text: '⚠️ <b>Stacja jest na poziomie morza</b>, a Taormina wysoko na skale. Ze stacji autobus Interbus pod górę (~10 min) albo taxi. Pieszo to męcząca wspinaczka.', checked: false},
                {id: 'kt4i3', text: '<b>Teatro Antico</b> — grecki teatr z Etną w tle. Zimą godziny krótsze (zwykle do ~16:00), ostatnie wejście godzinę przed zamknięciem.', checked: false},
                {id: 'kt4i4', text: '<b>Corso Umberto</b> — główny deptak, punkty widokowe na <b>Isola Bella</b> i zatokę.', checked: false},
                {id: 'kt4magnet', text: '🧲 <b>Magnesy na pamiątkę!</b> Sklepiki przy Corso Umberto — najlepszy wybór na całym wyjeździe.', checked: false, magnet: true},
                {id: 'kt4i5', text: 'Powrót pociągiem przed wieczorem — <b>sprawdź godzinę ostatniego kursu</b>, zimą jeżdżą rzadziej.', checked: false}
            ]
        },
        {
            id: 'kt5', date: 'Dzień 5 (27.12) - Etna ❄️',
            items: [
                {id: 'kt5i1', text: '⚠️ <b>Potwierdź wczoraj wieczorem:</b> czy autobus kursuje (astsicilia.it) i jaka jest pogoda na górze. Zimą kursy bywają odwoływane, a funivia zamykana przy wietrze.', checked: false},
                {id: 'kt5i2', text: '<b>07:45</b> — bądźcie na <b>Piazza Papa Giovanni XXIII</b> (plac przed Catania Centrale). Przystanek AST po wschodniej stronie placu.', checked: false},
                {id: 'kt5i3', text: '<b>08:15 — autobus AST → Rifugio Sapienza</b> (~2 godz., na miejscu ok. 10:15). Bilet <b>6,60€ w obie strony u kierowcy — miej gotówkę</b>. Kupno wcześniej NIE rezerwuje miejsca, więc przyjdź wcześniej.', checked: false},
                {id: 'kt5i4', text: '🧥 <b>UBIERZ SIĘ JAK W GÓRY:</b> na 1900 m będzie około zera lub mniej, wiatr i śnieg. Czapka, rękawiczki, kurtka, ciepłe buty, okulary przeciwsłoneczne (śnieg oślepia).', checked: false, sec: true},
                {id: 'kt5i5', text: '<b>Crateri Silvestri</b> — krater tuż przy parkingu, ~10 min pieszo, za darmo. Zimą często w śniegu.', checked: false},
                {id: 'kt5i6', text: '<b>Funivia dell\'Etna</b> (opcjonalnie) — kolejka na 2500 m, ok. 8:30–16:45, ok. 50€ w obie strony. <b>Kursuje tylko przy dobrej pogodzie</b> — status sprawdź rano na funiviaetna.com.', checked: false},
                {id: 'kt5i7', text: 'Lunch w <b>Rifugio Sapienza</b> — gorąca zupa i coś na rozgrzewkę.', checked: false},
                {id: 'kt5i8', text: '⚠️ <b>16:30 — autobus wraca punktualnie</b>. Spóźnienie = taxi za bardzo duże pieniądze albo nocleg na górze. W Katanii ok. 18:30.', checked: false, sec: true}
            ]
        },
        {
            id: 'kt6', date: 'Dzień 6 (28.12) - Syrakuzy i Ortygia',
            items: [
                {id: 'kt6i1', text: '<b>Pociąg Catania Centrale → Siracusa</b> — ok. 1 godz. 10 min – 1 godz. 20 min, ok. 10€. <a href="https://www.trenitalia.com/" target="_blank" onclick="event.stopPropagation()" class="inline-block mt-1 bg-red-600 text-white px-2 py-1 rounded text-xs font-bold"><i class="fa-solid fa-train"></i> Trenitalia</a>', checked: false},
                {id: 'kt6checkin', text: '⚠️ <b>Bilet/CHECK-IN Trenitalia</b> w apce przed odjazdem!', checked: false, checkin: true},
                {id: 'kt6i2', text: 'Ze stacji na <b>Ortygię</b> ~20–25 min pieszo (albo autobus) — wyspa to najstarsza część Syrakuz.', checked: false},
                {id: 'kt6i3', text: '<b>Duomo na Ortygii</b> — katedra zbudowana w kolumnach greckiej świątyni Ateny. Obok <b>Fonte Aretusa</b> z papirusami.', checked: false},
                {id: 'kt6siesta', text: '13:00–16:30 — <b>SJESTA</b>: część lokali i sklepów zamknięta, muzea mają krótsze godziny zimowe.', checked: false, siesta: true},
                {id: 'kt6i4', text: '<b>Parco Archeologico della Neapolis</b> — Ucho Dionizosa i grecki teatr. Zimą zamykają wcześnie, sprawdź godziny przed wyjazdem.', checked: false},
                {id: 'kt6i5', text: 'Powrót pociągiem wieczorem — ostatnie kursy są wcześnie, sprawdź rano.', checked: false}
            ]
        },
        {
            id: 'kt7', date: 'Dzień 7 (29.12) - Katania na spokojnie',
            items: [
                {id: 'kt7i1', text: 'Rano <b>Pescheria</b> — targ rybny w pełnej krasie (czynny rano, w niedziele nieczynny). Zaraz obok targ warzywny.', checked: false},
                {id: 'kt7i2', text: '<b>Katedra św. Agaty</b> i <b>Piazza del Duomo</b> na spokojnie, bez świątecznego pośpiechu.', checked: false},
                {id: 'kt7i3', text: '<b>Monastero dei Benedettini</b> — jeden z największych klasztorów w Europie, dziś uniwersytet. Zwiedzanie z przewodnikiem, warto kupić bilet online.', checked: false},
                {id: 'kt7siesta', text: '13:00–16:30 — <b>SJESTA</b>: zaplanuj lunch przed 13:00.', checked: false, siesta: true},
                {id: 'kt7i4', text: '<b>Castello Ursino</b> i <b>Teatro Romano</b> — zamek z lawy i rzymski teatr wciśnięty między kamienice.', checked: false},
                {id: 'kt7i5', text: 'Kawa i <b>cannolo</b> na Via Etnea, o zachodzie widok na Etnę z <b>Villa Bellini</b>.', checked: false},
                {id: 'kt7magnet', text: '🧲 <b>Magnesy i pamiątki</b> — pistacje z Bronte, marcepan, wino z Etny.', checked: false, magnet: true}
            ]
        },
        {
            id: 'kt8', date: 'Dzień 8 (30.12) - Acireale i Riviera dei Ciclopi',
            items: [
                {id: 'kt8i1', text: '<b>Acireale</b> — pociąg lub autobus z Katanii, ~20–30 min. Barokowe centrum i <b>Piazza Duomo</b>, uznawane za jedne z najpiękniejszych na Sycylii.', checked: false},
                {id: 'kt8checkin', text: '⚠️ <b>Bilet/CHECK-IN</b> przed odjazdem (jeśli jedziecie pociągiem).', checked: false, checkin: true},
                {id: 'kt8i2', text: '<b>Aci Trezza</b> — skały Cyklopów wystające z morza (te, którymi Polifem rzucał w Odyseusza).', checked: false},
                {id: 'kt8siesta', text: '13:00–16:30 — <b>SJESTA</b>: w mniejszych miastach zamykają dokładniej niż w Katanii.', checked: false, siesta: true},
                {id: 'kt8i3', text: '<b>Aci Castello</b> — normański zamek na czarnej lawie nad samym morzem.', checked: false},
                {id: 'kt8i4', text: '🥂 <b>Ostatni moment na rezerwację kolacji sylwestrowej</b>, jeśli jeszcze jej nie macie. Sprawdź też, czy potrzebujecie biletów na koncert na Piazza Duomo.', checked: false, sec: true},
                {id: 'kt8i5', text: 'Powrót do Katanii na kolację.', checked: false}
            ]
        },
        {
            id: 'kt9', date: 'Dzień 9 (31.12) - Sylwester 🥂',
            items: [
                {id: 'kt9i1', text: '<b>Zakupy rano</b> — 1 stycznia wszystko zamknięte, a wy wychodzicie o świcie. Weźcie coś na śniadanie w podróż.', checked: false},
                {id: 'kt9i2', text: '🚕 <b>NAJWAŻNIEJSZE DZIŚ: zamów transport na lotnisko na jutro rano.</b> Wyjazd ok. 06:45. Alibus kursuje też w święta (od 04:40, co ~20–25 min, 4€), ale 1 stycznia nad ranem pewniejsze jest zamówione taxi.', checked: false, sec: true},
                {id: 'kt9i3', text: '<b>Spakujcie się przed wyjściem na sylwestra</b> — jutro rano nie będzie na to czasu ani siły.', checked: false, sec: true},
                {id: 'kt9ryanair', text: '⚠️ <b>CHECK-IN Ryanair na powrót</b> — otwiera się dziś o <b>10:05</b> (24h przed lotem FR2727). Zrób go od razu rano. <a href="https://www.ryanair.com/" target="_blank" onclick="event.stopPropagation()" class="inline-block mt-1 bg-yellow-400 text-slate-900 px-2 py-1 rounded text-xs font-bold"><i class="fa-solid fa-plane"></i> Ryanair</a>', checked: false, checkin: true},
                {id: 'kt9i4', text: 'Popołudnie na spokojnie — ostatnia kawa na Via Etnea, ostatnie pamiątki.', checked: false},
                {id: 'kt9magnet', text: '🧲 <b>Ostatnia szansa na magnesy</b> — jutro nic nie będzie otwarte.', checked: false, magnet: true},
                {id: 'kt9i5', text: '<b>Cenone</b> — sylwestrowa kolacja (tylko z rezerwacją, stałe menu) albo kolacja w apartamencie.', checked: false},
                {id: 'kt9i6', text: '🎆 <b>Północ na Piazza del Duomo</b> — koncert i fajerwerki. Program miasto ogłasza w grudniu. Uwaga na petardy w bocznych uliczkach.', checked: false}
            ]
        },
        {
            id: 'kt10', date: 'Dzień 10 (01.01) - Check-out 06:45, wylot 10:05 ✈️',
            items: [
                {id: 'kt10i1', text: '⚠️ <b>Check-out jest „do 10:00”, ale samolot startuje 10:05</b> — wychodzicie dużo wcześniej. Pobudka ok. <b>05:45</b>.', checked: false, sec: true},
                {id: 'kt10i2', text: '<b>06:45 — wyjście z apartamentu.</b> <b>NAGRAJ WIDEO</b> całego mieszkania, wyrzuć śmieci, klucze według instrukcji gospodarza.', checked: false, sec: true},
                {id: 'kt10i3', text: '<b>Transport na lotnisko</b> — zamówione taxi (~15 min, ok. 20–30€) albo Alibus z Catania Centrale (4€, kursuje też w święta od 04:40, ok. 15 min). Na lotnisku bądźcie <b>ok. 07:45</b>.', checked: false},
                {id: 'kt10ryanair', text: '⚠️ <b>Boarding passy FR2727</b> w telefonie (rezerwacja B5MZJA)? Check-in otworzył się wczoraj o 10:05.', checked: false, checkin: true},
                {id: 'kt10i4', text: 'Walizka do nadania? <b>Bag drop zamyka się o 09:05</b> (60 min przed odlotem). Tylko plecaki? Od razu na security.', checked: false},
                {id: 'kt10i5', text: '<b>KONTROLA BEZPIECZEŃSTWA</b>: płyny 100ml w worku, elektronika i powerbank osobno. Pamiątki w płynie (wino, likiery) tylko w nadanej walizce!', checked: false, sec: true},
                {id: 'kt10i6', text: '🇪🇺 Włochy → Polska = <b>Schengen</b>, bez kontroli granicznej. Dowód/paszport do linii i przy bramce.', checked: false},
                {id: 'kt10i7', text: 'Tablica odlotów — <b>numer gate</b> pojawia się ~40–60 min przed odlotem. <b>Bramki zamykają się 09:35.</b>', checked: false},
                {id: 'kt10i8', text: '<b>10:05 → 12:35 — lot FR2727 Katania → Kraków.</b> Szczęśliwego Nowego Roku! 🎉', checked: false}
            ]
        }
    ],
    transportStopPhotos: [],
    ticketPhotos: [],
    customMapPins: [],
    foodSpots: [],
    journalEntries: [],
    cashStart: { dawid: 50, gosia: 50 },
    planVersion: 1,
    planDayMeta: {
        kt1: { outbound: '04:30 wyjazd · 07:10 lot', return: '09:40 przylot' },
        kt2: { outbound: '', return: '' },
        kt3: { outbound: '', return: '' },
        kt4: { outbound: '', return: '' },
        kt5: { outbound: '08:15 AST na Etnę', return: '16:30 zjazd' },
        kt6: { outbound: '', return: '' },
        kt7: { outbound: '', return: '' },
        kt8: { outbound: '', return: '' },
        kt9: { outbound: '', return: '' },
        kt10: { outbound: '06:45 wyjście', return: '10:05 wylot' }
    }
};

registerTrip('katania', {
    theme: { primary: '#1f6b45', accent: '#d4a017', dark: '#123524', light: '#f3f8f4', bar: '#123524' },
    mapZoneOrder: ['katania', 'etna', 'taormina', 'siracusa', 'acireale'],
    planDays: {
        kt1: { date: '2026-12-23', lat: 37.502, lng: 15.087, label: 'Przylot · Katania', mapZones: ['katania'], mapHint: 'Przylot · lotnisko, przystanek Alibus i apartament na mapie Katanii.' },
        kt2: { date: '2026-12-24', lat: 37.502, lng: 15.087, label: 'Wigilia · Katania', mapZones: ['katania'], mapHint: 'Targ Pescheria i katedra tuż obok apartamentu.' },
        kt3: { date: '2026-12-25', lat: 37.502, lng: 15.087, label: 'Boże Narodzenie', mapZones: ['katania'], mapHint: 'Miasto zamknięte · spacer po starówce i nad morze.' },
        kt4: { date: '2026-12-26', lat: 37.852, lng: 15.292, label: 'Taormina', mapZones: ['taormina', 'katania'], mapHint: 'Pociąg ~45 min · stacja jest nad morzem, miasto wysoko — autobus pod górę.' },
        kt5: { date: '2026-12-27', lat: 37.700, lng: 14.999, label: 'Etna (1900 m)', mapZones: ['etna', 'katania'], mapHint: 'Autobus AST 08:15 z placu przed Centrale · Rifugio Sapienza i kratery na mapie.' },
        kt6: { date: '2026-12-28', lat: 37.059, lng: 15.293, label: 'Syrakuzy · Ortygia', mapZones: ['siracusa', 'katania'], mapHint: 'Pociąg ~1h15 · Ortygia i Neapolis na mapie Syrakuz.' },
        kt7: { date: '2026-12-29', lat: 37.502, lng: 15.087, label: 'Katania', mapZones: ['katania'], mapHint: 'Dzień w mieście · targ, klasztor, zamek i Villa Bellini.' },
        kt8: { date: '2026-12-30', lat: 37.613, lng: 15.166, label: 'Acireale · Aci Trezza', mapZones: ['acireale', 'katania'], mapHint: 'Barok Acireale i skały Cyklopów nad morzem.' },
        kt9: { date: '2026-12-31', lat: 37.502, lng: 15.087, label: 'Sylwester', mapZones: ['katania'], mapHint: 'Piazza del Duomo · koncert i fajerwerki o północy.' },
        kt10: { date: '2027-01-01', lat: 37.467, lng: 15.068, label: 'Katania → lotnisko', mapZones: ['katania'], mapHint: 'Powrót · apartament, Catania Centrale i lotnisko na mapie.' }
    },
    def: {
        id: 'katania',
        roomId: 'katania-2026',
        lsPrefix: 'kataniaApp_',
        name: 'Katania 2026/27',
        short: 'Katania',
        subtitle: 'Sycylia · Via Zappalà-Gemelli 4',
        icon: 'fa-mountain-sun',
        appTitle: 'Katania Autopilot ✈️',
        greetings: {
            morning: 'Buongiorno Dawid! ☕',
            afternoon: 'Buon pomeriggio! Uwaga na sjestę 🌞',
            evening: 'Buonasera! Czas na winko z Etny 🍷'
        },
        start: '2026-12-23',
        end: '2027-01-01',
        departureAt: '2026-12-23T04:30:00',
        returnLabel: 'do Krakowa',
        seed: KATANIA_SEED,
        preDepartureChecklist: [
            'Check-in Ryanair zrobiony? Boarding passy FR2726 w telefonie (rezerwacja B5MZJA)',
            'Wyjazd z domu 04:30 — bramki na lotnisku zamykają się 06:40, a w grudniu dochodzi odladzanie',
            'Paszporty / dowody i EKUZ w podręcznym plecaku — nie w walizce!',
            'Powerbank i płyny 100ml do kuwety — powerbank nie może jechać w nadanej walizce',
            'Ciepłe rzeczy na Etnę spakowane? Czapka, rękawiczki, kurtka i porządne buty',
            'Check-in w Katanii dopiero 16:00–22:00 — ustal z gospodarzem, gdzie zostawić bagaże',
            'Kolacja sylwestrowa zarezerwowana? W Katanii 31.12 wchodzi się tylko z rezerwacją'
        ],
        magnetDays: ['2026-12-26', '2026-12-29', '2026-12-31'],
        checkoutVideoDate: '2027-01-01',
        startTabTitle: 'Start (23 grudnia)',
        siestaNote: 'Sjesta na Sycylii: <b>13:00 - 16:30</b>. Zimą część lokali zamyka się na dłużej, a 25–26.12 i 1.01 nie działa prawie nic.',
        planZonesNote: '<b>Różne dni = różne miejsca.</b> Pogoda przy każdym dniu jest lokalna — uwaga, na Etnie jest znacznie zimniej niż w mieście. <b>Mapa w Bazie</b> ma strefy: Katania, Etna, Taormina, Syrakuzy, Acireale.',
        apartment: {
            title: 'Via Zappalà-Gemelli 4',
            name: 'Karizza Home',
            address: 'Via Zappalà-Gemelli 4, 95121 Katania (CT)',
            mapsQuery: 'Via+Zappal%C3%A0-Gemelli+4,+95121+Catania+CT',
            checkinTitle: 'Check-in 16:00–22:00',
            checkinLines: [
                'Rezerwacja <b>Booking.com — potwierdzona</b> (2 625,31 zł). Instrukcje zameldowania są w apce Booking („Instrukcje zameldowania → Zobacz szczegóły”).',
                'Napisz gospodarzowi <b>godzinę przyjazdu</b> — lądujecie 9:40, a check-in jest dopiero od 16:00.',
                'Check-out: <b>do 10:00</b> w dniu 01.01, ale samolot startuje 10:05 — realnie wychodzicie ok. <b>06:45</b>. Nagraj wideo mieszkania!'
            ],
            hostLabel: 'Gospodarz (WhatsApp)',
            hostDefaultPhone: '',
            hostMessage: 'Buongiorno, siamo la prenotazione Booking per Karizza Home, Via Zappalà-Gemelli 4. '
        },
        transportNotesDefault: 'Alibus lotnisko ↔ Centrale (4€) · pociągi Taormina / Syrakuzy — wpisz godziny',
        insuranceNote: '23.12.2026–01.01.2027 · Europa — uzupełnij dane polisy na ten wyjazd',
        insurance: {
            provider: 'UNIQA',
            policyNumber: '',
            helpPhone: '+48225999185',
            helpPhoneLabel: '+48 22 599 91 85',
            smsPhone: '+48661001601',
            smsLabel: '+48 661 001 601',
            warnings: [
                'Polisy na ten wyjazd jeszcze nie ma. Przy kupnie sprawdź, czy wariant obejmuje <b>Etnę i zimowe wejście w terenie wysokogórskim</b> — podstawowe polisy potrafią to wyłączać.'
            ]
        },
        cashNote: 'Odejmuje tylko wydatki <b>Gotówka</b> tej osoby z rozliczeń. Pamiętaj: bilet AST na Etnę (6,60€) kupujesz u kierowcy za gotówkę.',
        trainLinkNote: 'Wycieczki: Taormina, Syrakuzy, Acireale, Etna',
        features: { aptBus: false, falAlert: false, muvt: false },
        bagSeedItems: {
            bagTemp: [],
            bag1: [
                { id: 'kb1i1', text: 'Kurtka zimowa / puchówka', qty: 2, checked: false },
                { id: 'kb1i2', text: 'Ciepłe buty (na Etnę — nieprzemakalne!)', qty: 2, checked: false },
                { id: 'kb1i3', text: 'Wygodne buty na miasto', qty: 2, checked: false },
                { id: 'kb1i4', text: 'Czapki, szaliki, rękawiczki', qty: 2, checked: false },
                { id: 'kb1i5', text: 'Swetry / polary', qty: 4, checked: false },
                { id: 'kb1i6', text: 'Termoaktywna bielizna na Etnę', qty: 2, checked: false },
                { id: 'kb1i7', text: 'Piżamy', qty: 2, checked: false },
                { id: 'kb1i8', text: 'Elegantszy strój na sylwestra', qty: 2, checked: false },
                { id: 'kb1i9', text: 'Parasol / kurtka przeciwdeszczowa', qty: 1, checked: false }
            ],
            bag2: [
                { id: 'kb2i1', text: 'Paszporty / Dowody', sec: true, pocket: true, qty: 1, checked: false },
                { id: 'kb2i2', text: 'Portfel (karty, EKUZ)', sec: true, pocket: true, qty: 1, checked: false },
                { id: 'kb2i3', text: 'Powerbank (tylko w podręcznym!)', sec: true, pocket: true, qty: 1, checked: false },
                { id: 'kb2i4', text: 'Kosmetyczka z płynami (worek 100ml!)', sec: true, qty: 1, checked: false },
                { id: 'kb2i5', text: 'Gotówka na start (taksa klimatyczna, bilet AST na Etnę)', qty: 1, checked: false }
            ],
            bag3: [
                { id: 'kb3i1', text: 'Okulary przeciwsłoneczne (śnieg na Etnie oślepia)', qty: 2, checked: false },
                { id: 'kb3i2', text: 'Płyny/kosmetyki Gosi (worek 100ml!)', sec: true, qty: 1, checked: false },
                { id: 'kb3i3', text: 'Krem z filtrem i balsam do ust (góry!)', sec: true, qty: 1, checked: false },
                { id: 'kb3i4', text: 'Leki i apteczka podróżna', qty: 1, checked: false }
            ]
        }
    }
});
