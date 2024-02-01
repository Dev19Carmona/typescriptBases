(() => {
    class Avenger {
        // private name: string = 'Name';
        // public team: string = 'Team';
        // public realName?: string
        static avgAge: number = 35

        constructor(private name: string, public team: string, public realName?: string) {
            // this.name = name
            // this.team = team
            this.realName = `${name} ${team}`
        }
    }

    const atman: Avenger = new Avenger('Atman', 'Capitan')
    console.log(atman);
    console.log(Avenger.avgAge);


})()