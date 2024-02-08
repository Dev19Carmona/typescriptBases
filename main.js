"use strict";
var Validations;
(function (Validations) {
    Validations.validateText = (text) => text.length > 3 ? true : false;
    const validateDate = (myDate) => isNaN(myDate.valueOf()) ? false : true;
})(Validations || (Validations = {}));
console.log(Validations.validateText('Juan'));
//# sourceMappingURL=main.js.map