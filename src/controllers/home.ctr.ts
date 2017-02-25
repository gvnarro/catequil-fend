import { Request, Response } from 'express';
module HomeCtr {
    'use strict';
    export function getHome(req: Request, res: Response) {
        res.end();
    }
}
export = HomeCtr;