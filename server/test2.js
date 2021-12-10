"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Points = void 0;
var Points = /** @class */ (function () {
    function Points(x) {
        this._x = x;
    }
    Object.defineProperty(Points.prototype, "X", {
        get: function () {
            return this._x;
        },
        set: function (value) {
            if (value < 0) {
                throw new Error('x is smaller than 0');
            }
            this._x = value;
        },
        enumerable: false,
        configurable: true
    });
    return Points;
}());
exports.Points = Points;
