(()=>{
  class Avenger {
    constructor(
      public name: string,
      public realName: string, // puedo acceder dentro y fuera de la clase
    ){
      // console.log('Constructor Avenger llamado')
    }
    protected getFullName():string{ // Puedo acceder dentro de la misma clase o hijos
      return `${this.name} ${this.realName}`
    }
    private getPower():number{ // Solo puedo acceder dentro de la clase
      return 100000
    }
  }
  class Xmen extends Avenger {
    constructor(
      name: string,
      realName: string,
      public isMutant:boolean
    ) {
      super(name, realName)
      // console.log('Constructor Xmen llamado');
      
    }
    get fullName( ){
      return `${this.name} - ${this.realName}`;
    }
    set fullName(name:string){
      if(name.length < 3){
        throw new Error('El nombre debe tener al menos 3 letras')
      }
      this.name = name
    }
    getFullNameXmen(){
      // console.log(super.getFullName());
      
    }
  }
  const wolverine = new Xmen('Wolverine', 'Logan', true)
  // wolverine.getFullNameXmen()
  
  wolverine.fullName = 'Wolverine2'
  // console.log(wolverine.fullName);
  // console.log(wolverine);
  
  
})()