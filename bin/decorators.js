"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.provider = new Map();
exports.INJECTION_KEY = 'INJECTION_KEY';
function inject(token) {
    return function (target, propertyKey, parameterIndex) {
        // console.log(token);
        // console.log(target);
        // console.log(propertyKey);
        // console.log(parameterIndex);
        Reflect.defineMetadata(exports.INJECTION_KEY, token, target);
    };
}
exports.inject = inject;
function injectable() {
    return function (target) {
        console.log(target);
        // provider.set(target, );
    };
}
exports.injectable = injectable;
