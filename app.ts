// Crear interfaces
interface Auto {
  encender: boolean;
  velocidadMaxima: number;
  acelear(): void;
}
interface Villano {
  reir: boolean;
  comer: boolean;
  llorar: boolean;
}
// Cree una interfaz para validar el auto (el valor enviado por parametro)
const conducirBatimovil = ( auto:Auto ):void => {
  auto.encender = true;
  auto.velocidadMaxima = 100;
  auto.acelear();
}

const batimovil:Auto = {
  encender:false,
  velocidadMaxima:0,
  acelear(){
    console.log("...... gogogo!!!");
  }
}

// Cree una interfaz con que permita utilzar el siguiente objeto
// utilizando propiedades opcionales

const guason: Villano = {
  reir: true,
  comer:true,
  llorar:false
}

const reir = ( guason:Villano ):void => {
  if( guason.reir ){
    console.log("JAJAJAJA");
  }
}


// Cree una interfaz para la siguiente funcion
interface numeroDeCiudadanos {
  (ciudadanos:string[]):number;
}
const ciudadGotica:numeroDeCiudadanos = ( ciudadanos:string[] ):number => {
  return ciudadanos.length;
}

// Cree una interfaz que obligue crear una clase
// con las siguientes propiedades y metodos
interface Humano {
  nombre: string;
  edad: number;
  sexo: string;
  estadoCivil: string;
  imprimirBio(): string;
}
/*
  propiedades:
    - nombre
    - edad
    - sexo
    - estadoCivil
    - imprimirBio(): void // en consola una breve descripcion.
*/
class Persona implements Humano {
  public nombre: string;
  public edad: number;
  public sexo: string;
  public estadoCivil: string;
  public imprimirBio(): string {
    return `Nombre: ${this.nombre}, Edad: ${this.edad}, Sexo: ${this.sexo}, Estado Civil: ${this.estadoCivil}`;
  }
} {}