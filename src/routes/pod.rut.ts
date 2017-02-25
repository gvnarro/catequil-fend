'use strict';
import { Router } from 'express';
import * as podCtr from '../controllers/pod.ctr';
let router = Router();
router.get('/pod', (req, res) => podCtr.getPodsByDataCenterId(req, res));
export = router;
