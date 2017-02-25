'use strict';
import { Router } from 'express';
import * as dataCenterCtr from '../controllers/dataCenter.ctr';
let router = Router();
router.get('/datacenter', (req, res) => dataCenterCtr.getDataCentersByProductId(req, res));
export = router;
