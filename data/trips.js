/* Rejestr wyjazdów.
   Pliki z data/trips/*.js zgłaszają się tutaj w kolejności wczytania,
   a index.html czyta gotowe słowniki zamiast trzymać dane u siebie. */

window.TRIPS = {
    order: [],
    defs: {},
    themes: {},
    planDays: {},
    mapZoneOrder: {}
};

function registerTrip(id, trip) {
    const T = window.TRIPS;
    if (T.defs[id]) throw new Error('Wyjazd ' + id + ' jest już zarejestrowany');
    T.order.push(id);
    T.defs[id] = trip.def;
    T.themes[id] = trip.theme;
    T.planDays[id] = trip.planDays || {};
    T.mapZoneOrder[id] = trip.mapZoneOrder || [];
}
