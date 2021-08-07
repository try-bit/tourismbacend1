"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CredentialsController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let CredentialsController = class CredentialsController {
    constructor(credentialsRepository) {
        this.credentialsRepository = credentialsRepository;
    }
    async create(credentials) {
        return this.credentialsRepository.create(credentials);
    }
    async count(where) {
        return this.credentialsRepository.count(where);
    }
    async find(filter) {
        return this.credentialsRepository.find(filter);
    }
    async updateAll(credentials, where) {
        return this.credentialsRepository.updateAll(credentials, where);
    }
    async findById(id, filter) {
        return this.credentialsRepository.findById(id, filter);
    }
    async updateById(id, credentials) {
        await this.credentialsRepository.updateById(id, credentials);
    }
    async replaceById(id, credentials) {
        await this.credentialsRepository.replaceById(id, credentials);
    }
    async deleteById(id) {
        await this.credentialsRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    rest_1.post('/credentials'),
    rest_1.response(200, {
        description: 'Credentials model instance',
        content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.Credentials) } },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Credentials, {
                    title: 'NewCredentials',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CredentialsController.prototype, "create", null);
tslib_1.__decorate([
    rest_1.get('/credentials/count'),
    rest_1.response(200, {
        description: 'Credentials model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Credentials)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CredentialsController.prototype, "count", null);
tslib_1.__decorate([
    rest_1.get('/credentials'),
    rest_1.response(200, {
        description: 'Array of Credentials model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: rest_1.getModelSchemaRef(models_1.Credentials, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Credentials)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CredentialsController.prototype, "find", null);
tslib_1.__decorate([
    rest_1.patch('/credentials'),
    rest_1.response(200, {
        description: 'Credentials PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Credentials, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Credentials)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Credentials, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CredentialsController.prototype, "updateAll", null);
tslib_1.__decorate([
    rest_1.get('/credentials/{id}'),
    rest_1.response(200, {
        description: 'Credentials model instance',
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Credentials, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Credentials, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CredentialsController.prototype, "findById", null);
tslib_1.__decorate([
    rest_1.patch('/credentials/{id}'),
    rest_1.response(204, {
        description: 'Credentials PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Credentials, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Credentials]),
    tslib_1.__metadata("design:returntype", Promise)
], CredentialsController.prototype, "updateById", null);
tslib_1.__decorate([
    rest_1.put('/credentials/{id}'),
    rest_1.response(204, {
        description: 'Credentials PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.requestBody()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Credentials]),
    tslib_1.__metadata("design:returntype", Promise)
], CredentialsController.prototype, "replaceById", null);
tslib_1.__decorate([
    rest_1.del('/credentials/{id}'),
    rest_1.response(204, {
        description: 'Credentials DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], CredentialsController.prototype, "deleteById", null);
CredentialsController = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(repositories_1.CredentialsRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.CredentialsRepository])
], CredentialsController);
exports.CredentialsController = CredentialsController;
//# sourceMappingURL=credentials.controller.js.map