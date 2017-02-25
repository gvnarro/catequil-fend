'use strict';
import { Router } from 'express';
import * as clusterCtr from '../controllers/cluster.ctr';
let router = Router();
router.get('/cluster', (req, res) => clusterCtr.getClustersByPodId(req, res));
export = router;
