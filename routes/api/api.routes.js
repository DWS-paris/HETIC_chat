/* 
Imports
*/
    const express = require('express');
    const router = express.Router();
    const fetch = require('node-fetch');
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

                console.log(req.body)
                // Vérifier les données de la requête
                if(
                    req.body.email != undefined && req.body.email.length > 4 &&
                    req.body.password != undefined && req.body.password.length > 4 &&
                    req.body.pseudo != undefined && req.body.pseudo.length > 1
                ){
                    // Configuration des données
                    const userData = JSON.stringify(req.body);

                    // Enregistrer les données dans la BDD  
                    fetch('http://localhost:3000/users', {
                        method: 'POST',
                        body: userData,
                        headers: { 'Content-Type': 'application/json' }
                    })
                    .then( newUser => res.json( { msg: 'User registrated', data: newUser } ) )
                    .catch( error => res.json( { msg: 'User not registrated', data: error } ) );
                }
                else{
                    res.json({ msg: 'Bad fields provided' });
                }
            });

            router.post('/login', (req, res) => {
                // Vérifier les données de la requête
                if(
                    req.body.email != undefined && req.body.email.length > 4 &&
                    req.body.password != undefined && req.body.password.length > 4
                ){
                    // Configuration des données
                    const userData = JSON.stringify(req.body);

                    // Enregistrer les données dans la BDD  
                    fetch(`http://localhost:3000/users?password=${req.body.password}&email=${req.body.email}`, {
                        method: 'GET',
                        headers: { 'Content-Type': 'application/json' }
                    })
                    .then( rawData => {
                        // Convertir la répo,nse en JSON
                        return rawData.json();
                    })
                    .then( jsonData => {
                        // Vérifier la taille de jsonData
                        if( jsonData.length > 0 ){
                            res.json( { msg: 'User connected', data: jsonData } )
                        }
                        else {
                            res.json( { msg: 'User not connected', data: null } )
                        }
                    })
                    .catch( error => res.json( { msg: 'Connection error', data: error } ) );
                }
                else{
                    res.json({ msg: 'Bad fields provided' });
                }
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