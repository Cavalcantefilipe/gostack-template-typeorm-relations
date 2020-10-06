import { Request, Response } from 'express';
import CreateCustomerService from '@modules/customers/services/CreateCustomerService';
import { container } from 'tsyringe';
import ICreateCustomerDTO from '@modules/customers/dtos/ICreateCustomerDTO';

export default class CustomersController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, email }: ICreateCustomerDTO = request.body;

    const createCostumers = container.resolve(CreateCustomerService);

    const user = await createCostumers.execute({ email, name });

    return response.json(user);
  }
}
