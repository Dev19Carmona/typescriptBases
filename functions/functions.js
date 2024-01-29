"use strict";
;
(() => {
    const hero = 'Flash';
    function returnName() {
        return hero;
    }
    const activateBatisignal = () => {
        return 'Batiseñal activada';
    };
    console.log({ type: typeof activateBatisignal });
})();
