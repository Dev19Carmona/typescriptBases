namespace Validations {
  export const validateText = (text: string): boolean =>
    text.length > 3 ? true : false

  const validateDate = (myDate: Date): boolean =>
    isNaN(myDate.valueOf()) ? false : true

  
}

console.log(Validations.validateText('Juan'))