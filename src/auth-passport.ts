// import * as passport from 'passport';
// import {Strategy as BearerStrategy} from 'passport-http-bearer';
// import request = require('request');
// import { Config } from './config.cof';
// let config: Config = new Config();

// passport.use('accessToken', new BearerStrategy(
//     function (accessToken, done) {
//         request.post({
//             url: config.vzOAoauth.accessTokenInfoUri,
//             headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
//             body: 'client_id=' + config.vzOAoauth.clientId + '&client_secret=' + config.vzOAoauth.clientSecret+'&token='+accessToken
//         }, function (err, response, body) {
//             var result = JSON.parse(body);
//             done(null,result.actived);       
            
//         });

//     }));   
// export class BearerPassport{
//      isTokenAuthenticated = passport.authenticate('accessToken', { session: false });
// }