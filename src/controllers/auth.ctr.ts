import { Request, Response } from 'express';
// import { request }  from 'request';
var request = require('request');

import {Config} from './../config.cof';
/**
 * Example controller that provides a healthcheck endpoint
 */
module Auth {
    'use strict';
    /*
     * Return an empty 200 response
     */
    export function login(req: Request, res: Response) {
        let config: Config = new Config();
        request.post({
            url: config.vzOAoauth.accessTokenUri,
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: 'grant_type=password&username=' + req.body.username + '&password=' + req.body.password + '&client_id=' + config.vzOAoauth.clientId + '&client_secret=' + config.vzOAoauth.clientSecret
        }, function (err, response, body) {
            //console.log('Proxying: %s %s', response.req.method, response.req.path);
            console.log('err: ', err);     
            var result = JSON.parse(body);
            if (!result.access_token)
                res.status(401);
            return res.json(result);
        });
    }
}

export = Auth;
