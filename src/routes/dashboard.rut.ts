'use strict';
import { Router } from 'express';
import {getUsageByPod, getUsageByCluster } from '../controllers/dashboard.ctr';

let router = Router();
router.get('/dashboard/pod', (req, res) => getUsageByPod(req, res));
router.get('/dashboard/cluster', (req, res) => getUsageByCluster(req, res));

export = router;
