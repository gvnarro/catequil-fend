'use strict';
import { Router } from 'express';
import * as customerCtr from '../controllers/customer.ctr';
let router = Router();
router.get('/customer', (req, res) => customerCtr.getCustomersByClusterId(req, res));
export = router;
