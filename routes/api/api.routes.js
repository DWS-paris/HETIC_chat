/* 
Imports
*/
    const express = require('express');
    const router = express.Router();
//

/* 
Cofiguration
*/
    class ApiRouterClass{
        routes(){
            router.post('/register', (req, res) => {
                res.json('register');
            });

            router.post('/login', (req, res) => {
                res.json('login');
            });
        }

        init(){
            this.routes();
            return router
        }
    }
//

/* 
Export
*/
    module.exports = ApiRouterClass;
//