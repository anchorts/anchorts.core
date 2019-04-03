"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var container_1 = require("./container");
var types_1 = require("./types");
function inject(token) {
    return function (target, propertyKey, parameterIndex) {
        var injectionTokens = Reflect.getOwnMetadata(types_1.INJECTION_TOKEN_KEY, target) || {};
        injectionTokens[parameterIndex] = token;
        Reflect.defineMetadata(types_1.INJECTION_TOKEN_KEY, injectionTokens, target);
    };
}
exports.inject = inject;
function injectable() {
    return function (target) {
        var params = Reflect.getOwnMetadata(types_1.PARAMS_KEY, target) || [];
        var injectionTokens = Reflect.getOwnMetadata(types_1.INJECTION_TOKEN_KEY, target) || {};
        Object.keys(injectionTokens).forEach(function (key) {
            params[+key] = injectionTokens[key];
        });
        container_1.typeInfo.set(target, params);
    };
}
exports.injectable = injectable;
//# sourceMappingURL=decorators.js.map