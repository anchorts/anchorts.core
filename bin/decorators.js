"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeInfo = new Map();
exports.INJECTION_TOKEN_KEY = 'INJECTION_TOKEN_KEY';
exports.PARAMS_KEY = 'design:paramtypes';
function inject(token) {
    return function (target, propertyKey, parameterIndex) {
        // console.log(token);
        // console.log(target);
        // console.log(propertyKey);
        // console.log(parameterIndex);
        var injectionTokens = Reflect.getOwnMetadata(exports.INJECTION_TOKEN_KEY, target) || {};
        injectionTokens[parameterIndex] = token;
        Reflect.defineMetadata(exports.INJECTION_TOKEN_KEY, injectionTokens, target);
    };
}
exports.inject = inject;
function injectable() {
    return function (target) {
        var params = Reflect.getOwnMetadata(exports.PARAMS_KEY, target) || [];
        var injectionTokens = Reflect.getOwnMetadata(exports.INJECTION_TOKEN_KEY, target) || {};
        Object.keys(injectionTokens).forEach(function (key) {
            params[+key] = injectionTokens[key];
        });
        exports.typeInfo.set(target, params);
        // console.log(injectionTokens);
        // console.log(params);
    };
}
exports.injectable = injectable;
//# sourceMappingURL=decorators.js.map