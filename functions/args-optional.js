"use strict";
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName || '---'}`;
    };
    const name = fullName('Camilo');
    console.log({ name });
})();
