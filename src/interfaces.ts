export type constructor<T> = { new(...args: any[]): T };

export type InjectionToken<T> = string | symbol | constructor<T>;

export type Dictionary<T> = { [key: string]: T };

export interface IContainer {
    resolve<T>(token: InjectionToken<T>): T;
}
