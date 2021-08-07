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
import {Hotel1} from '../models';
import {Hotel1Repository} from '../repositories';

export class Hotel1Controller {
  constructor(
    @repository(Hotel1Repository)
    public hotel1Repository : Hotel1Repository,
  ) {}

  @post('/hotel1s')
  @response(200, {
    description: 'Hotel1 model instance',
    content: {'application/json': {schema: getModelSchemaRef(Hotel1)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Hotel1, {
            title: 'NewHotel1',
            exclude: ['id'],
          }),
        },
      },
    })
    hotel1: Omit<Hotel1, 'id'>,
  ): Promise<Hotel1> {
    return this.hotel1Repository.create(hotel1);
  }

  @get('/hotel1s/count')
  @response(200, {
    description: 'Hotel1 model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Hotel1) where?: Where<Hotel1>,
  ): Promise<Count> {
    return this.hotel1Repository.count(where);
  }

  @get('/hotel1s')
  @response(200, {
    description: 'Array of Hotel1 model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Hotel1, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Hotel1) filter?: Filter<Hotel1>,
  ): Promise<Hotel1[]> {
    return this.hotel1Repository.find(filter);
  }

  @patch('/hotel1s')
  @response(200, {
    description: 'Hotel1 PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Hotel1, {partial: true}),
        },
      },
    })
    hotel1: Hotel1,
    @param.where(Hotel1) where?: Where<Hotel1>,
  ): Promise<Count> {
    return this.hotel1Repository.updateAll(hotel1, where);
  }

  @get('/hotel1s/{id}')
  @response(200, {
    description: 'Hotel1 model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Hotel1, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Hotel1, {exclude: 'where'}) filter?: FilterExcludingWhere<Hotel1>
  ): Promise<Hotel1> {
    return this.hotel1Repository.findById(id, filter);
  }

  @patch('/hotel1s/{id}')
  @response(204, {
    description: 'Hotel1 PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Hotel1, {partial: true}),
        },
      },
    })
    hotel1: Hotel1,
  ): Promise<void> {
    await this.hotel1Repository.updateById(id, hotel1);
  }

  @put('/hotel1s/{id}')
  @response(204, {
    description: 'Hotel1 PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() hotel1: Hotel1,
  ): Promise<void> {
    await this.hotel1Repository.replaceById(id, hotel1);
  }

  @del('/hotel1s/{id}')
  @response(204, {
    description: 'Hotel1 DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.hotel1Repository.deleteById(id);
  }
}
