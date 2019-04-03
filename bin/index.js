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
var decorators_1 = require("./decorators");
var container_1 = require("./container");
var Piston = /** @class */ (function () {
    function Piston() {
        this.name = 'Piston';
    }
    Piston.prototype.getName = function () {
        return this.name;
    };
    Piston = __decorate([
        decorators_1.injectable(),
        __metadata("design:paramtypes", [])
    ], Piston);
    return Piston;
}());
exports.Piston = Piston;
var CarEngine = /** @class */ (function () {
    function CarEngine(pistion) {
        this.name = 'Car Engine';
        this.pistion = pistion;
    }
    CarEngine.prototype.getName = function () {
        return this.name;
    };
    CarEngine = __decorate([
        decorators_1.injectable(),
        __param(0, decorators_1.inject(Piston)),
        __metadata("design:paramtypes", [Piston])
    ], CarEngine);
    return CarEngine;
}());
exports.CarEngine = CarEngine;
var WarningLight = /** @class */ (function () {
    function WarningLight() {
        this.name = 'Warning light';
    }
    WarningLight.prototype.getName = function () {
        return this.name;
    };
    WarningLight = __decorate([
        decorators_1.injectable(),
        __metadata("design:paramtypes", [])
    ], WarningLight);
    return WarningLight;
}());
exports.WarningLight = WarningLight;
var Car = /** @class */ (function () {
    function Car(carEngine, warningLight) {
        this.carEngine = carEngine;
        this.warningLight = warningLight;
    }
    Car.prototype.getEngineName = function () {
        console.log(this.carEngine.getName());
    };
    Car.prototype.getWarningLightName = function () {
        console.log(this.warningLight.getName());
    };
    Car = __decorate([
        decorators_1.injectable(),
        __param(0, decorators_1.inject(CarEngine)),
        __param(1, decorators_1.inject(WarningLight)),
        __metadata("design:paramtypes", [CarEngine,
            WarningLight])
    ], Car);
    return Car;
}());
exports.Car = Car;
var container = new container_1.Container();
var car = container.resolve(Car);
console.log(car.carEngine);
console.log(car.warningLight);
//# sourceMappingURL=index.js.map