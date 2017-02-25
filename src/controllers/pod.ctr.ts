import { Request, Response } from 'express';
import * as podDac from '../data/pod.dac';
/**
 * Example controller that provides a healthcheck endpoint
 */
module PodCtr {

  'use strict';

  /*
   * Return an empty 200 response
   */
  export function getPodsByDataCenterId(req: Request, res: Response) {
    return podDac.getPodsByDataCenterId(req.query.id, (error, result) => {
      if (error) {
        console.log(error);
        return res.sendStatus(500);
      }
      return res.json(result);
    });
  }
}

export = PodCtr;
