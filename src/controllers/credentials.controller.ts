import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {Credentials} from '../models';
import {CredentialsRepository} from '../repositories';

export class CredentialsController {
  constructor(
    @repository(CredentialsRepository)
    public credentialsRepository : CredentialsRepository,
  ) {}

  @post('/credentials')
  @response(200, {
    description: 'Credentials model instance',
    content: {'application/json': {schema: getModelSchemaRef(Credentials)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Credentials, {
            title: 'NewCredentials',
            exclude: ['id'],
          }),
        },
      },
    })
    credentials: Omit<Credentials, 'id'>,
  ): Promise<Credentials> {
    return this.credentialsRepository.create(credentials);
  }

  @get('/credentials/count')
  @response(200, {
    description: 'Credentials model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Credentials) where?: Where<Credentials>,
  ): Promise<Count> {
    return this.credentialsRepository.count(where);
  }

  @get('/credentials')
  @response(200, {
    description: 'Array of Credentials model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Credentials, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Credentials) filter?: Filter<Credentials>,
  ): Promise<Credentials[]> {
    return this.credentialsRepository.find(filter);
  }

  @patch('/credentials')
  @response(200, {
    description: 'Credentials PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Credentials, {partial: true}),
        },
      },
    })
    credentials: Credentials,
    @param.where(Credentials) where?: Where<Credentials>,
  ): Promise<Count> {
    return this.credentialsRepository.updateAll(credentials, where);
  }

  @get('/credentials/{id}')
  @response(200, {
    description: 'Credentials model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Credentials, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Credentials, {exclude: 'where'}) filter?: FilterExcludingWhere<Credentials>
  ): Promise<Credentials> {
    return this.credentialsRepository.findById(id, filter);
  }

  @patch('/credentials/{id}')
  @response(204, {
    description: 'Credentials PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Credentials, {partial: true}),
        },
      },
    })
    credentials: Credentials,
  ): Promise<void> {
    await this.credentialsRepository.updateById(id, credentials);
  }

  @put('/credentials/{id}')
  @response(204, {
    description: 'Credentials PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() credentials: Credentials,
  ): Promise<void> {
    await this.credentialsRepository.replaceById(id, credentials);
  }

  @del('/credentials/{id}')
  @response(204, {
    description: 'Credentials DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.credentialsRepository.deleteById(id);
  }
}
