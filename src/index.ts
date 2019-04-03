import 'reflect-metadata';
import { inject } from './decorators';


export class Dog {
    getName() {
        return "Dog";
    }
}

export class Cat {
    getName() {
        return "Cat";
    }
}

export const type = {
    dog: Symbol("Dog"),
}

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