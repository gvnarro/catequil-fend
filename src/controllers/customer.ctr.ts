import { Request, Response } from 'express';
import * as customerDac from '../data/customer.dac';

module CustomerCtr {
  'use strict';
  export function getCustomersByClusterId(req: Request, res: Response) {
    console.log(req.query);
    return customerDac.getCustomersByClusterId(req.query, (error, result) => {
      if (error) {
        console.log(error);
        return res.sendStatus(500);
      }
      return res.json(result);
    });
  }
}

export = CustomerCtr;
