// import * as edge from "edge";
var edge = require('edge');
import {Config} from "./../config.cof"
// import * as q  from "q";
module CustomerDAC {
    var conf: Config = new Config();
    export function getCustomersByClusterId(params, done) {
        var config = {
            connectionString: conf.connectionString,
            source: "exec dbo.usp_Cap_CustomerFilter"
        };
        edge.func('sql', config)
            ({ ClusterID: params.clusterId, UserID:params.userId }, function (error, result) {
                return done(error, result);
            });
    }
}

export = CustomerDAC;