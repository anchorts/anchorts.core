"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.provider = new Map();
exports.INJECTION_TOKEN_KEY = 'INJECTION_TOKEN_KEY';
exports.PARAMS_KEY = 'design:paramtypes';
function inject(token) {
    return function (target, propertyKey, parameterIndex) {
        // console.log(token);
        // console.log(target);
        // console.log(propertyKey);
        // console.log(parameterIndex);
        let injectionTokens = Reflect.getOwnMetadata(exports.INJECTION_TOKEN_KEY, target) || {};
        injectionTokens[parameterIndex] = token;
        Reflect.defineMetadata(exports.INJECTION_TOKEN_KEY, injectionTokens, target);
    };
}
exports.inject = inject;
function injectable() {
    return function (target) {
        let params = Reflect.getOwnMetadata(exports.PARAMS_KEY, target) || [];
        let injectionTokens = Reflect.getOwnMetadata(exports.INJECTION_TOKEN_KEY, target) || {};
        console.log(injectionTokens);
        console.log(params);
    };
}
exports.injectable = injectable;
