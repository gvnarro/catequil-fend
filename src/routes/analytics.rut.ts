'use strict';
import { Router } from 'express';
import * as analyticsCtr from '../controllers/Analytics.ctr';
let router = Router();
router.get('/analytics', (req, res) => analyticsCtr.getShowAssistance(req, res));
export = router;
