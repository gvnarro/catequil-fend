'use strict';
import { Router } from 'express';
import { getHome } from '../controllers/home.ctr';

let router = Router();
router.get('/', getHome);

export = router;