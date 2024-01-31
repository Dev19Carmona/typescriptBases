"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
;
(() => {
    const avengers = {
        nick: 'Samuel L. Jackson',
        ironman: 'Robert Downey Jr.',
        vision: 'Paul Bettany',
        activo: true,
        poder: 1500.0,
    };
    const callAvenger = (_a) => {
        var { ironman } = _a, rest = __rest(_a, ["ironman"]);
    };
    callAvenger(avengers);
    const avengersArr = ['Cap. America', 'Ironman', 'Hulk'];
    const [, , hulk] = avengersArr;
    const { poder, vision } = avengers;
})();
;
(() => {
    const ironman = {
        name: 'Ironman',
        weapon: 'Armorsuit',
    };
    const captainAmerican = {
        name: 'Capitan America',
        weapon: 'Escudo',
    };
    const thor = {
        name: 'Thor',
        weapon: 'Mjolnir',
    };
    const avengers = [ironman, captainAmerican, thor];
    for (const avenger of avengers) {
        console.log(avenger.name);
    }
})();
;
(() => {
    let a = 'Camilo';
})();
//# sourceMappingURL=main.js.map