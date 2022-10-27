"use strict";
document.addEventListener("DOMContentLoaded", () => {
    var _a;
    (_a = document.getElementById('gomb')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        let szulo = document.getElementById('hiba');
        while (szulo.firstChild) {
            szulo.removeChild(szulo.lastChild);
        }
        function hiba(uzenet) {
            let p = document.createElement('p');
            p.innerHTML = uzenet;
            szulo.appendChild(p);
        }
        let nevEll = /^[a-zA-Z " "]+$/;
        let nev = (_a = document.getElementById('nev')) === null || _a === void 0 ? void 0 : _a.value;
        let orszagEll = /^[a-zA-Z]+$/;
        let orszag = (_b = document.getElementById('orszag')) === null || _b === void 0 ? void 0 : _b.value;
        let varosEll = /^[a-zA-Z]+$/;
        let varos = (_c = document.getElementById('varos')) === null || _c === void 0 ? void 0 : _c.value;
        let utcaEll = /^[a-zA-Z" "]+[0-9]+$/;
        let utca = (_d = document.getElementById('utca')) === null || _d === void 0 ? void 0 : _d.value;
        let iranyitoEll = /^[0-9]{4}$/;
        let iranyito = (_e = document.getElementById('iranyito')) === null || _e === void 0 ? void 0 : _e.value;
        let kartyaszamEll = /^[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4}$/;
        let kartyaszam = (_f = document.getElementById('kartyaszam')) === null || _f === void 0 ? void 0 : _f.value;
        let kodEll = /^[0-9]{3}$/;
        let kod = (_g = document.getElementById('kod')) === null || _g === void 0 ? void 0 : _g.value;
        let kartyanevEll = /^[A-Za-z" "]+$/;
        let kartyanev = (_h = document.getElementById('kartyanev')) === null || _h === void 0 ? void 0 : _h.value;
        if (!nevEll.test(nev)) {
            hiba('Hibás név!');
        }
        if (!orszagEll.test(orszag)) {
            hiba('Hibás ország név!');
        }
        if (!varosEll.test(varos)) {
            hiba('Hibás város név!');
        }
        if (!utcaEll.test(utca)) {
            hiba('Hibás utca név!');
        }
        if (!iranyitoEll.test(iranyito)) {
            hiba('Hibás irányítószám!');
        }
        if (!kartyaszamEll.test(kartyaszam)) {
            hiba('Hibás kártya szám!');
        }
        if (!kodEll.test(kod)) {
            hiba('Hibás kód!');
        }
        if (!kartyanevEll.test(kartyanev)) {
            hiba('Hibás kártyanév!');
        }
        if (!szulo.firstChild) {
            szulo = document.getElementById('alap');
            while (szulo.firstChild) {
                szulo.removeChild(szulo.lastChild);
            }
            let div = document.createElement("div");
            div.classList.add("card,");
            div.classList.add("col-md-12");
            div.classList.add("col-sm-12");
            let kep = document.createElement('img');
            kep.src = '/src/siker3.png';
            kep.classList.add("kep");
            div.appendChild(kep);
            let h4 = document.createElement("h4");
            h4.textContent = "Sikeres tranzakció!";
            div.appendChild(h4);
            szulo === null || szulo === void 0 ? void 0 : szulo.appendChild(div);
        }
    });
});
