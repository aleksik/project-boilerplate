import { Request, Response } from 'express';

/**
 * GET /api/products
 */
export let getProducts = (req: Request, res: Response) => {
  res.send([
    {
      name: 'Example product',
      productNumeber: 12345,
      description: 'Lorem ipsum dolor sit amet'
    },
    {
      name: 'Another product',
      productNumeber: 12346,
      description: 'Sit amet lorem ipsum'
    }
  ]);
}