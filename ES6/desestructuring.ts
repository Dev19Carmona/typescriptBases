;(() => {
  type Avengers = {
    nick: string;
    ironman: string;
    vision: string;
    activo: boolean;
    poder: number;
  }
  const avengers:Avengers = {
    nick: 'Samuel L. Jackson',
    ironman: 'Robert Downey Jr.',
    vision: 'Paul Bettany',
    activo: true,
    poder: 1500.0,
  }
  const callAvenger = ({ironman, ...rest}:Avengers) => {
    // console.log({ironman});
    // console.log(rest);
    
  }
  callAvenger(avengers)
  const avengersArr: string[] = ['Cap. America', 'Ironman', 'Hulk']
  const [, , hulk] = avengersArr
  // console.log({hulk});
  
  const { poder, vision } = avengers
})()
