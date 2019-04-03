import 'reflect-metadata';
import { inject, injectable } from './decorators';

@injectable()
export class Dog {
    getName() {
        return "Dog";
    }
}

@injectable()
export class Cat {

    name: string;

    constructor() {
        this.name = "Dog";
    }

    getName() {
        return this.name;
    }
}

export const Type = {
    dog: Symbol("Dog"),
}

@injectable()
export class Animal {

    dog: Dog;
    cat: Cat;

    constructor(
        @inject(Dog) dog: Dog,
        @inject(Cat) cat: Cat,
        ) {
        this.dog = dog;
        this.cat = cat;
    }

    getDogName() {
        console.log(this.dog.getName());
    }
}