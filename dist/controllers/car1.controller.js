"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Car1Controller = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let Car1Controller = class Car1Controller {
    constructor(car1Repository) {
        this.car1Repository = car1Repository;
    }
    async create(car1) {
        return this.car1Repository.create(car1);
    }
    async count(where) {
        return this.car1Repository.count(where);
    }
    async find(filter) {
        return this.car1Repository.find(filter);
    }
    async updateAll(car1, where) {
        return this.car1Repository.updateAll(car1, where);
    }
    async findById(id, filter) {
        return this.car1Repository.findById(id, filter);
    }
    async updateById(id, car1) {
        await this.car1Repository.updateById(id, car1);
    }
    async replaceById(id, car1) {
        await this.car1Repository.replaceById(id, car1);
    }
    async deleteById(id) {
        await this.car1Repository.deleteById(id);
    }
};
tslib_1.__decorate([
    rest_1.post('/car1s'),
    rest_1.response(200, {
        description: 'Car1 model instance',
        content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.Car1) } },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Car1, {
                    title: 'NewCar1',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], Car1Controller.prototype, "create", null);
tslib_1.__decorate([
    rest_1.get('/car1s/count'),
    rest_1.response(200, {
        description: 'Car1 model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Car1)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], Car1Controller.prototype, "count", null);
tslib_1.__decorate([
    rest_1.get('/car1s'),
    rest_1.response(200, {
        description: 'Array of Car1 model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: rest_1.getModelSchemaRef(models_1.Car1, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Car1)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], Car1Controller.prototype, "find", null);
tslib_1.__decorate([
    rest_1.patch('/car1s'),
    rest_1.response(200, {
        description: 'Car1 PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Car1, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Car1)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Car1, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], Car1Controller.prototype, "updateAll", null);
tslib_1.__decorate([
    rest_1.get('/car1s/{id}'),
    rest_1.response(200, {
        description: 'Car1 model instance',
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Car1, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Car1, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], Car1Controller.prototype, "findById", null);
tslib_1.__decorate([
    rest_1.patch('/car1s/{id}'),
    rest_1.response(204, {
        description: 'Car1 PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Car1, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Car1]),
    tslib_1.__metadata("design:returntype", Promise)
], Car1Controller.prototype, "updateById", null);
tslib_1.__decorate([
    rest_1.put('/car1s/{id}'),
    rest_1.response(204, {
        description: 'Car1 PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.requestBody()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Car1]),
    tslib_1.__metadata("design:returntype", Promise)
], Car1Controller.prototype, "replaceById", null);
tslib_1.__decorate([
    rest_1.del('/car1s/{id}'),
    rest_1.response(204, {
        description: 'Car1 DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], Car1Controller.prototype, "deleteById", null);
Car1Controller = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(repositories_1.Car1Repository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.Car1Repository])
], Car1Controller);
exports.Car1Controller = Car1Controller;
//# sourceMappingURL=car1.controller.js.map