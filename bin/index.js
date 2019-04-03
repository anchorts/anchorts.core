"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const decorators_1 = require("./decorators");
let Dog = class Dog {
    getName() {
        return "Dog";
    }
};
Dog = __decorate([
    decorators_1.injectable()
], Dog);
exports.Dog = Dog;
let Cat = class Cat {
    constructor() {
        this.name = "Dog";
    }
    getName() {
        return this.name;
    }
};
Cat = __decorate([
    decorators_1.injectable(),
    __metadata("design:paramtypes", [])
], Cat);
exports.Cat = Cat;
exports.Type = {
    dog: Symbol("Dog"),
};
let Animal = class Animal {
    constructor(dog, cat) {
        this.dog = dog;
        this.cat = cat;
    }
    getDogName() {
        console.log(this.dog.getName());
    }
};
Animal = __decorate([
    decorators_1.injectable(),
    __param(0, decorators_1.inject(Dog)),
    __param(1, decorators_1.inject(Cat)),
    __metadata("design:paramtypes", [Dog,
        Cat])
], Animal);
exports.Animal = Animal;
