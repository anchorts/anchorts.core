"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.INJECTION_KEY = 'INJECTION_KEY';
function inject(token) {
    return function (target, propertyKey, parameterIndex) {
        console.log(token);
        console.log(target);
        console.log(propertyKey);
        console.log(parameterIndex);
    };
}
exports.inject = inject;
