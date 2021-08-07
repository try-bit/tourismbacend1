"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Hotel1Repository = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const datasources_1 = require("../datasources");
const models_1 = require("../models");
let Hotel1Repository = class Hotel1Repository extends repository_1.DefaultCrudRepository {
    constructor(dataSource) {
        super(models_1.Hotel1, dataSource);
    }
};
Hotel1Repository = tslib_1.__decorate([
    tslib_1.__param(0, core_1.inject('datasources.Tourism')),
    tslib_1.__metadata("design:paramtypes", [datasources_1.TourismDataSource])
], Hotel1Repository);
exports.Hotel1Repository = Hotel1Repository;
//# sourceMappingURL=hotel1.repository.js.map