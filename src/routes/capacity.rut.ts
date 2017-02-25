'use strict';
import { Router } from 'express';
import * as capacityCtr from '../controllers/capacity.ctr';
let router = Router();
router.post('/capacity/search', (req, res) => capacityCtr.getCapacityByClusterId(req, res));
router.post('/capacity/filters', (req, res) => capacityCtr.getCapacityFilters(req, res));
export = router;
