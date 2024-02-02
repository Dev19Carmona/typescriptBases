"use strict";
;
(() => {
    let flash = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Super velocidad', 'Viajar en el tiempo'],
    };
    let superman = {
        name: 'Clark Kent',
        age: 60,
        powers: ['Super fuerza'],
        getName() {
            return this.name;
        },
    };
})();
(() => {
    const client = {
        name: 'Juan',
        age: 25,
        address: {
            _id: 125,
            zip: 'KY2 SUD',
            city: 'Ottawa'
        },
    };
    const client2 = {
        name: 'Melissa',
        age: 30,
    };
})();
//# sourceMappingURL=main.js.map