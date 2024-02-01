(() => {
    class Avenger {
        // private name: string = 'Name';
        // public team: string = 'Team';
        // public realName?: string
        static avgAge: number = 35
        static getAvgAge(){
            return this.name
        }

        constructor(private name: string, public team: string, public realName?: string) {
            // this.name = name
            // this.team = team
            this.realName = `${name} ${team}`
        }
        public bio(){
            return `${this.name} (${this.team})`
        }
    }

    const atman: Avenger = new Avenger('Atman', 'Capitan')
    // console.log(atman.bio());
    // console.log(Avenger.getAvgAge());
    
    // console.log(Avenger.avgAge);


})()