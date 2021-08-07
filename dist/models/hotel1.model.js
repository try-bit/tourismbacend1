"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Hotel1 = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let Hotel1 = class Hotel1 extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        id: true,
        generated: true,
    }),
    tslib_1.__metadata("design:type", String)
], Hotel1.prototype, "id", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], Hotel1.prototype, "days_agra", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], Hotel1.prototype, "price_agra", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], Hotel1.prototype, "ppl_agra", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], Hotel1.prototype, "hotel_agra", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], Hotel1.prototype, "city_agra", void 0);
Hotel1 = tslib_1.__decorate([
    repository_1.model(),
    tslib_1.__metadata("design:paramtypes", [Object])
], Hotel1);
exports.Hotel1 = Hotel1;
//# sourceMappingURL=hotel1.model.js.map