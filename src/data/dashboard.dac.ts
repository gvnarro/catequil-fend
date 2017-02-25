// import * as edge from "edge";
var edge = require('edge');
import {Config} from "./../config.cof"
// import * as q  from "q";
module DashboardDA {
    var conf: Config = new Config();
    export function getUsageByPod(id, done) {
        var config = {
            connectionString: conf.connectionString,
            source: "exec dbo.usp_Cap_UsageByPod"
        };
        edge.func('sql', config)
            ({ Product: id }, function (error, result) {
                return done(error, result);
            });
    }

    export function getUsageByCluster(id, done) {
        var config = {
            connectionString: conf.connectionString,
            source: "exec dbo.usp_Cap_UsageByCluster"
        };
        edge.func('sql', config)
            ({ PodId: id }, function (error, result) {
                return done(error, result);
            });
    }
}

export = DashboardDA;