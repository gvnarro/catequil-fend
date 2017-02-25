'use strict';
import { Router } from 'express';
import { login } from '../controllers/auth.ctr';
let router = Router();
router.post('/login',(req, res)=> login(req, res));
export = router;
