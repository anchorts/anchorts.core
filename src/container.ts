import { InjectionToken, constructor, typeInfo } from "./decorators";

export interface IContainer {
    resolve<T>(token: InjectionToken<T>): T;
}

export class Container implements IContainer {

    public constructor(private parent?: Container) {}

    resolve<T>(token: InjectionToken<T>): T {
        return this.construct(<constructor<T>> token);
    }

    private construct<T>(ctor: constructor<T>): T {
        if (ctor.length === 0) {
          return new ctor();
        }
    
        const paramInfo = typeInfo.get(ctor);
    
        if (!paramInfo || paramInfo.length === 0) {
          throw `TypeInfo not known for ${ctor}`;
        }
    
        const params = paramInfo.map(param => this.resolve(param));
    
        return new ctor(...params);
    }

}