"use strict";
(() => {
    class Avenger {
        constructor(name, team, realName) {
            this.name = name;
            this.team = team;
            this.realName = realName;
            this.realName = `${name} ${team}`;
        }
    }
    Avenger.avgAge = 35;
    const atman = new Avenger('Atman', 'Capitan');
    console.log(atman);
    console.log(Avenger.avgAge);
})();
//# sourceMappingURL=main.js.map