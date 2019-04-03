"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeInfo = new Map();
var Container = /** @class */ (function () {
    function Container(parent) {
        this.parent = parent;
    }
    Container.prototype.resolve = function (token) {
        return this.construct(token);
    };
    Container.prototype.construct = function (ctor) {
        var _this = this;
        if (ctor.length === 0) {
            return new ctor();
        }
        var paramInfo = exports.typeInfo.get(ctor);
        if (!paramInfo || paramInfo.length === 0) {
            throw "TypeInfo not known for " + ctor;
        }
        var params = paramInfo.map(function (param) { return _this.resolve(param); });
        return new (ctor.bind.apply(ctor, [void 0].concat(params)))();
    };
    return Container;
}());
exports.Container = Container;
//# sourceMappingURL=container.js.map