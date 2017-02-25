var edge = require('edge');
import {Config} from "./../config.cof"
module CapacityDAC {
    var conf: Config = new Config();
    export function getCapacityByClusterId(params: any, done: any) {
        console.log(params);
        var config = {
            connectionString: conf.connectionString,
            source: "exec dbo.usp_Cap_CapacityByCluster"
        };
        edge.func('sql', config)
            ({ vStartDate: params.startDate, vEndDate: params.endDate, vClusterID: params.clusterId }, function (error, result) {
                return done(error, result);
            });
    }

    export function getCapacityFilters(params: any, done: any) {        
        var config = {
            connectionString: conf.connectionString,
            source: "exec dbo.usp_Cap_ListCustomerFilter"
        };
        edge.func('sql', config)
            ({ Product: params.productId, UserID: params.userId}, function (error, result) {
                console.log(result);
                return done(error, result);
            });
    }
}

export = CapacityDAC;