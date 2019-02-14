/* 
Imports
*/
    // NodeJS
    const { Router } = require('express');

    // Inner
    const FrontRouterClass = require('./front/front.routes')
//

/* 
Configuration
*/
    const mainRouter = Router();
    const frontRouter = new FrontRouterClass();
    mainRouter.use('/', frontRouter.init());
//

/* 
Export
*/
    module.exports = mainRouter;
//