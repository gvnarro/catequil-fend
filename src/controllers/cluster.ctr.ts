import { Request, Response } from 'express';
import * as clusterDac from '../data/cluster.dac';
/**
 * Example controller that provides a healthcheck endpoint
 */
module ClusterCtr {

  'use strict';

  /*
   * Return an empty 200 response
   */
  export function getClustersByPodId(req: Request, res: Response) {
    return clusterDac.getClustersByPodId(req.query.id, (error, result) => {
      if (error) {
        console.log(error);
        return res.sendStatus(500);
      }
      return res.json(result);
    });
  }
}

export = ClusterCtr;
