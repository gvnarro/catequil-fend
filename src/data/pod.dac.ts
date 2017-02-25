// import * as edge from "edge";
var edge = require('edge');
import {Config} from "./../config.cof"
// import * as q  from "q";
module PodDAC {
    var conf: Config = new Config();
    export function getPodsByDataCenterId(id, done) {
        var config = {
            connectionString: conf.connectionString,
            source: "exec dbo.usp_Cap_PODFilter"
        };
        edge.func('sql', config)
            ({ DatacenterID: id }, function (error, result) {
                return done(error, result);
            });
    }
}

export = PodDAC;