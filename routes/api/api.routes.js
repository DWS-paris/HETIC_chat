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

            router.get( '/', (req, res) => {
                res.json({ msg: 'Hello API' })
            })

            router.post('/register', (req, res) => {
                // Récupérer les données de l'utilisateurs
                res.json(req.body);
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