'use strict';

// Include dependencies
import * as express from 'express';
import * as path from 'path';
import * as logger from 'morgan';
import * as favicon from 'serve-favicon';
import * as cookieParser from 'cookie-parser';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';

// import {BearerPassport} from './auth-passport';

// Modular Route definitions
import * as dashboardRoute from './routes/dashboard.rut';
import * as authRoute from './routes/auth.rut';
import * as homeRoute from './routes/home.rut';
import * as dataCenterRoute from './routes/dataCenter.rut';
import * as podRoute from './routes/pod.rut';
import * as clusterRoute from './routes/cluster.rut';
import * as customerRoute from './routes/customer.rut';
import * as capacityRoute from './routes/capacity.rut';
import * as analticsyRoute from './routes/analytics.rut';

// Error handler service
import { development as DevelopmentErrorHandler, production as ProductionErrorHandler } from './services/errorHandler';

// Variables
// let bearerPassport: BearerPassport = new BearerPassport();

// Main app
const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public'))); //serve public files

// Register routes (as middleware layer through express.Router())

app.use(homeRoute);
app.use(authRoute);
app.use(dashboardRoute);
app.use(dataCenterRoute);
app.use(podRoute);
app.use(clusterRoute);
app.use(customerRoute);
app.use(capacityRoute);
app.use(analticsyRoute);
// app.use('/dashboard', new  dashboardRoute.DashboardRut(bearerPassport.isTokenAuthenticated));
// app.use('/database', dataBaseRoute(bearerPassport));
// app.use('/pod', podRoute(bearerPassport));
// app.use('/cluster', clusterRoute(bearerPassport));
// app.use('/customer', customerRoute(bearerPassport));



// catch 404 and forward to error handler
app.use((req: express.Request, res: express.Response, next: Function) => {
    let err = new Error('Not Found');
    res.status(404);
    console.log('catching 404 error');
    return next(err);
});

// error handlers

// development error handler - will print stacktrace
// production error handler - no stacktraces leaked to user
if (app.get('env') === 'development') {
  app.use(DevelopmentErrorHandler);
} else {
  app.use(ProductionErrorHandler);
}

export default app;
