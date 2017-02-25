import { Request, Response } from 'express';
import * as dataCenterDac from '../data/dataCenter.dac';
/**
 * Example controller that provides a healthcheck endpoint
 */
module DataCenterCtr {
  'use strict';
  /*
   * Return an empty 200 response
   */
  export function getDataCentersByProductId(req: Request, res: Response) {
    console.log(req.query);
    return dataCenterDac.getDataCentersByProductId(req.query.id, (error, result) => {
      if (error) {
        console.log(error);
        return res.sendStatus(500);
      }
      return res.json(result);
    });
  }
}

export = DataCenterCtr;
