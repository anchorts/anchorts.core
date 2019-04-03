export type constructor<T> = {new (...args: any[]): T};

export type InjectionToken<T> = string | symbol | constructor<T>;

export type Dictionary<T> = {[key: string] : T};

export const provider = new Map<constructor<any>, any[]> ();

export const INJECTION_TOKEN_KEY = 'INJECTION_TOKEN_KEY';

export function inject<T>(token: InjectionToken<T>) {
    return function(target: Object, propertyKey: string, parameterIndex: number) {
        // console.log(token);
        // console.log(target);
        // console.log(propertyKey);
        // console.log(parameterIndex);

        Reflect.defineMetadata(INJECTION_TOKEN_KEY, token, target);
    }
}

export function injectable<T>() {
    return function(target: constructor<T>) {
        console.log(target);
    }
}

