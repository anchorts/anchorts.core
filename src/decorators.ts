export type constructor<T> = new (...args: any[]) => T;

export type InjectionToken<T> = string | symbol | constructor<T>;

export function inject<T>(token: InjectionToken<T>) {
    return function(target: Object, propertyKey: string, parameterIndex: number) {
        console.log(token);
        console.log(target);
        console.log(propertyKey);
        console.log(parameterIndex);
    }
}

