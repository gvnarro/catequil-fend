// import * as edge from "edge";
var edge = require('edge');
import {Config} from "./../config.cof"
// import * as q  from "q";
module DataCenterDAC {
    var conf: Config = new Config();
    export function getDataCentersByProductId(id, done) {
        var config = {
            connectionString: conf.connectionString,
            source: "exec dbo.usp_Cap_DatacenterFilter"
        };
        edge.func('sql', config)
            ({ Product: id }, function (error, result) {
                return done(error, result);
            });
    }
}

export = DataCenterDAC;