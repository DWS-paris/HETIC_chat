/* 
Imports
*/
    const express = require('express');
    const router = express.Router();
//

/* 
Cofiguration
*/
    class FrontRouterClass{
        routes(){
            router.get('/', (req, res) => {
                res.render('index', { connected: false });
            });
        
            router.get('/register', (req, res) => {
                res.render('register', { connected: false });
            });
        
            router.get('/login', (req, res) => {
                res.render('login', { connected: false });
            });
        
            router.get('/chat', (req, res) => {
                res.render('chat', { connected: false });
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
    module.exports = FrontRouterClass;
//