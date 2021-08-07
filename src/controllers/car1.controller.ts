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
import {Car1} from '../models';
import {Car1Repository} from '../repositories';

export class Car1Controller {
  constructor(
    @repository(Car1Repository)
    public car1Repository : Car1Repository,
  ) {}

  @post('/car1s')
  @response(200, {
    description: 'Car1 model instance',
    content: {'application/json': {schema: getModelSchemaRef(Car1)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Car1, {
            title: 'NewCar1',
            exclude: ['id'],
          }),
        },
      },
    })
    car1: Omit<Car1, 'id'>,
  ): Promise<Car1> {
    return this.car1Repository.create(car1);
  }

  @get('/car1s/count')
  @response(200, {
    description: 'Car1 model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Car1) where?: Where<Car1>,
  ): Promise<Count> {
    return this.car1Repository.count(where);
  }

  @get('/car1s')
  @response(200, {
    description: 'Array of Car1 model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Car1, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Car1) filter?: Filter<Car1>,
  ): Promise<Car1[]> {
    return this.car1Repository.find(filter);
  }

  @patch('/car1s')
  @response(200, {
    description: 'Car1 PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Car1, {partial: true}),
        },
      },
    })
    car1: Car1,
    @param.where(Car1) where?: Where<Car1>,
  ): Promise<Count> {
    return this.car1Repository.updateAll(car1, where);
  }

  @get('/car1s/{id}')
  @response(200, {
    description: 'Car1 model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Car1, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Car1, {exclude: 'where'}) filter?: FilterExcludingWhere<Car1>
  ): Promise<Car1> {
    return this.car1Repository.findById(id, filter);
  }

  @patch('/car1s/{id}')
  @response(204, {
    description: 'Car1 PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Car1, {partial: true}),
        },
      },
    })
    car1: Car1,
  ): Promise<void> {
    await this.car1Repository.updateById(id, car1);
  }

  @put('/car1s/{id}')
  @response(204, {
    description: 'Car1 PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() car1: Car1,
  ): Promise<void> {
    await this.car1Repository.replaceById(id, car1);
  }

  @del('/car1s/{id}')
  @response(204, {
    description: 'Car1 DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.car1Repository.deleteById(id);
  }
}
