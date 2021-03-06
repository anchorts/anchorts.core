import 'reflect-metadata';
import { inject, injectable } from './decorators';
import { Container } from './container';


@injectable()
export class Piston {
    name: string;
    
    constructor() {
        this.name = 'Piston';
    }

    getName() {
        return this.name;
    }
}

@injectable()
export class CarEngine {
    name: string;
    pistion: Piston;

    constructor(
        @inject(Piston) pistion: Piston
    ) {
        this.name = 'Car Engine';
        this.pistion = pistion;
    }

    getName() {
        return this.name;
    }
}

@injectable()
export class WarningLight {
    name: string;

    constructor() {
        this.name = 'Warning light';
    }

    getName() {
        return this.name;
    }
}

@injectable()
export class Car {

    pistion: Piston;
    carEngine: CarEngine;
    warningLight: WarningLight;

    constructor(
        @inject(Piston) pistion: Piston,
        @inject(CarEngine) carEngine: CarEngine,
        @inject(WarningLight) warningLight: WarningLight,
        ) {
        this.pistion = pistion;
        this.carEngine = carEngine;
        this.warningLight = warningLight;
    }

    getEngineName() {
        console.log(this.carEngine.getName());
    }

    getWarningLightName() {
        console.log(this.warningLight.getName());
    }
}


let container = new Container();
let car = container.resolve(Car);
console.log(car);
console.log(car.carEngine);
console.log(car.warningLight);