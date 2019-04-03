import { constructor, InjectionToken, Dictionary } from "./interfaces";
import { typeInfo } from "./container";
import { INJECTION_TOKEN_KEY, PARAMS_KEY } from "./types";

export function inject<T>(token: InjectionToken<T>) {
    return function (target: Object, propertyKey: string, parameterIndex: number) {
        let injectionTokens = Reflect.getOwnMetadata(INJECTION_TOKEN_KEY, target) || {};
        injectionTokens[parameterIndex] = token;
        Reflect.defineMetadata(INJECTION_TOKEN_KEY, injectionTokens, target);
    }
}

export function injectable<T>() {
    return function (target: constructor<T>) {
        let params: any[] = Reflect.getOwnMetadata(PARAMS_KEY, target) || [];
        let injectionTokens: Dictionary<InjectionToken<any>> = Reflect.getOwnMetadata(INJECTION_TOKEN_KEY, target) || {};
        Object.keys(injectionTokens).forEach(key => {
            params[+key] = injectionTokens[key];
        });
        typeInfo.set(target, params);
    }
}
