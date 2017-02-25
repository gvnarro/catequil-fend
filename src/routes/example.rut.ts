'use strict';
import { Router } from 'express';
import * as podCtr from '../controllers/pod.ctr';
let router = Router();
router.get('/example', (req, res) => function (req, res) {
    return res.json("{}");
});
export = router;
