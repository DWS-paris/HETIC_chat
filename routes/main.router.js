/* 
Imports
*/
    // NodeJS
    const { Router } = require('express');

    // Inner
    const FrontRouterClass = require('./front/front.routes');
    const ApiRouterClass = require('./api/api.routes');
//

/* 
Configuration
*/
    const mainRouter = Router();
    const frontRouter = new FrontRouterClass();
    const apiRouter = new ApiRouterClass();
    
    mainRouter.use('/api', apiRouter.init());
    mainRouter.use('/', frontRouter.init());
//

/* 
Export
*/
    module.exports = mainRouter;
//