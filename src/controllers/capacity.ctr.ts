import { Request, Response } from 'express';
import * as capacityDac from '../data/capacity.dac';
module CapacityCtr {
  'use strict';
  export function getCapacityByClusterId(req: Request, res: Response) {
    return capacityDac.getCapacityByClusterId(req.body, (error, result) => {
      if (error) {
        console.log(error);
        return res.sendStatus(500);
      }
      return res.json(result);
    });
  }

  export function getCapacityFilters(req: Request, res: Response) {
    return capacityDac.getCapacityFilters(req.body, (error, result) => {
      if (error) {
        console.log(error);
        return res.sendStatus(500);
      }
      return res.json(result);
    });
  }
}

export = CapacityCtr;
