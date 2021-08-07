"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Hotel1Controller = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let Hotel1Controller = class Hotel1Controller {
    constructor(hotel1Repository) {
        this.hotel1Repository = hotel1Repository;
    }
    async create(hotel1) {
        return this.hotel1Repository.create(hotel1);
    }
    async count(where) {
        return this.hotel1Repository.count(where);
    }
    async find(filter) {
        return this.hotel1Repository.find(filter);
    }
    async updateAll(hotel1, where) {
        return this.hotel1Repository.updateAll(hotel1, where);
    }
    async findById(id, filter) {
        return this.hotel1Repository.findById(id, filter);
    }
    async updateById(id, hotel1) {
        await this.hotel1Repository.updateById(id, hotel1);
    }
    async replaceById(id, hotel1) {
        await this.hotel1Repository.replaceById(id, hotel1);
    }
    async deleteById(id) {
        await this.hotel1Repository.deleteById(id);
    }
};
tslib_1.__decorate([
    rest_1.post('/hotel1s'),
    rest_1.response(200, {
        description: 'Hotel1 model instance',
        content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.Hotel1) } },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Hotel1, {
                    title: 'NewHotel1',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], Hotel1Controller.prototype, "create", null);
tslib_1.__decorate([
    rest_1.get('/hotel1s/count'),
    rest_1.response(200, {
        description: 'Hotel1 model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Hotel1)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], Hotel1Controller.prototype, "count", null);
tslib_1.__decorate([
    rest_1.get('/hotel1s'),
    rest_1.response(200, {
        description: 'Array of Hotel1 model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: rest_1.getModelSchemaRef(models_1.Hotel1, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Hotel1)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], Hotel1Controller.prototype, "find", null);
tslib_1.__decorate([
    rest_1.patch('/hotel1s'),
    rest_1.response(200, {
        description: 'Hotel1 PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Hotel1, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Hotel1)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Hotel1, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], Hotel1Controller.prototype, "updateAll", null);
tslib_1.__decorate([
    rest_1.get('/hotel1s/{id}'),
    rest_1.response(200, {
        description: 'Hotel1 model instance',
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Hotel1, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Hotel1, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], Hotel1Controller.prototype, "findById", null);
tslib_1.__decorate([
    rest_1.patch('/hotel1s/{id}'),
    rest_1.response(204, {
        description: 'Hotel1 PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Hotel1, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Hotel1]),
    tslib_1.__metadata("design:returntype", Promise)
], Hotel1Controller.prototype, "updateById", null);
tslib_1.__decorate([
    rest_1.put('/hotel1s/{id}'),
    rest_1.response(204, {
        description: 'Hotel1 PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.requestBody()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Hotel1]),
    tslib_1.__metadata("design:returntype", Promise)
], Hotel1Controller.prototype, "replaceById", null);
tslib_1.__decorate([
    rest_1.del('/hotel1s/{id}'),
    rest_1.response(204, {
        description: 'Hotel1 DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], Hotel1Controller.prototype, "deleteById", null);
Hotel1Controller = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(repositories_1.Hotel1Repository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.Hotel1Repository])
], Hotel1Controller);
exports.Hotel1Controller = Hotel1Controller;
//# sourceMappingURL=hotel1.controller.js.map