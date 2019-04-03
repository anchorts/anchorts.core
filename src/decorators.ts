export type constructor<T> = { new(...args: any[]): T };

export type InjectionToken<T> = string | symbol | constructor<T>;

export type Dictionary<T> = { [key: string]: T };

export const provider = new Map<constructor<any>, any[]>();

export const INJECTION_TOKEN_KEY = 'INJECTION_TOKEN_KEY';

export const PARAMS_KEY = 'design:paramtypes';

export function inject<T>(token: InjectionToken<T>) {
    return function (target: Object, propertyKey: string, parameterIndex: number) {
        // console.log(token);
        // console.log(target);
        // console.log(propertyKey);
        // console.log(parameterIndex);
        let injectionTokens = Reflect.getOwnMetadata(INJECTION_TOKEN_KEY, target) || {};
        injectionTokens[parameterIndex] = token;
        Reflect.defineMetadata(INJECTION_TOKEN_KEY, injectionTokens, target);
    }
}

export function injectable<T>() {
    return function (target: constructor<T>) {
        let params: any[] = Reflect.getOwnMetadata(PARAMS_KEY, target) || [];
        let injectionTokens = Reflect.getOwnMetadata(INJECTION_TOKEN_KEY, target) || {};
        console.log(injectionTokens);
        console.log(params);
    }
}

