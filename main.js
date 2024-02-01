"use strict";
;
(() => {
    class Mutante {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
        }
    }
    class Xmen extends Mutante {
        salvarMundo() {
            return 'Mundo a salvo!';
        }
    }
    class Villian extends Mutante {
        conquistarMundo() {
            return 'Mundo conquistado!';
        }
    }
    const wolverine = new Xmen('Wolverine', 'Logan');
    const magneto = new Villian('Magneto', 'Magnus');
    const printName = (character) => {
        console.log(character.realName);
    };
    printName(wolverine);
})();
(() => {
    class Avenger {
        static getAvgAge() {
            return this.name;
        }
        constructor(name, team, realName) {
            this.name = name;
            this.team = team;
            this.realName = realName;
            this.realName = `${name} ${team}`;
        }
        bio() {
            return `${this.name} (${this.team})`;
        }
    }
    Avenger.avgAge = 35;
    const atman = new Avenger('Atman', 'Capitan');
})();
(() => {
    class Avenger {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
        }
        getFullName() {
            return `${this.name} ${this.realName}`;
        }
        getPower() {
            return 100000;
        }
    }
    class Xmen extends Avenger {
        constructor(name, realName, isMutant) {
            super(name, realName);
            this.isMutant = isMutant;
        }
        get fullName() {
            return `${this.name} - ${this.realName}`;
        }
        set fullName(name) {
            if (name.length < 3) {
                throw new Error('El nombre debe tener al menos 3 letras');
            }
            this.name = name;
        }
        getFullNameXmen() {
        }
    }
    const wolverine = new Xmen('Wolverine', 'Logan', true);
    wolverine.fullName = 'Wolverine2';
})();
//# sourceMappingURL=main.js.map