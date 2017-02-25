import { Request, Response } from 'express';
import * as dashboardDac from '../data/dashboard.dac';
/**
 * Example controller that provides a healthcheck endpoint
 */
module DashboardCtr {

  'use strict';

  /*
   * Return an empty 200 response
   */
  export function getUsageByPod(req: Request, res: Response) {
    return dashboardDac.getUsageByPod(req.query.id, (error, result) => {
      if (error) {
        console.log(error);
        return res.sendStatus(500);
      }
      return res.json(result);
    });
  }

    export function getUsageByCluster(req: Request, res: Response) {
      console.log(req.query);
    return dashboardDac.getUsageByCluster(req.query.id, (error, result) => {
      if (error) {
        console.log(error);
        return res.sendStatus(500);
      }
      return res.json(result);
    });
  }
}

export = DashboardCtr;
