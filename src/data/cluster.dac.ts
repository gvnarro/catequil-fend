// import * as edge from "edge";
var edge = require('edge');
import {Config} from "./../config.cof"
// import * as q  from "q";
module ClusterDAC {
    var conf: Config = new Config();
    export function getClustersByPodId(id: any, done: any) {
        var config = {
            connectionString: conf.connectionString,
            source: "exec dbo.usp_Cap_ClusterFilter"
        };
        edge.func('sql', config)
            ({ PODID: id }, function (error, result) {
                return done(error, result);
            });
    }
}

export = ClusterDAC;