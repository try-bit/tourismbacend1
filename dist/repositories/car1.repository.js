"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Car1Repository = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const datasources_1 = require("../datasources");
const models_1 = require("../models");
let Car1Repository = class Car1Repository extends repository_1.DefaultCrudRepository {
    constructor(dataSource) {
        super(models_1.Car1, dataSource);
    }
};
Car1Repository = tslib_1.__decorate([
    tslib_1.__param(0, core_1.inject('datasources.Tourism')),
    tslib_1.__metadata("design:paramtypes", [datasources_1.TourismDataSource])
], Car1Repository);
exports.Car1Repository = Car1Repository;
//# sourceMappingURL=car1.repository.js.map