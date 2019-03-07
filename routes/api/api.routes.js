/* 
Imports
*/
    const express = require('express');
    const router = express.Router();
    const fetch = require('node-fetch');
//

/* 
Couch DB
*/
    const NodeCouchDb = require('node-couchdb');
    
    // node-couchdb instance with default options
    const couch = new NodeCouchDb();

    // node-couchdb instance talking to external service
    const couchExternal = new NodeCouchDb({
        host: 'dws-5.local',
        protocol: 'http',
        port: 5984,
        auth: {
            user: 'admin',
            pass: 'root'
        }
    });
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
                    // TODO: add data to CouchDB

                    couch.insert("hetic-user", {
                        email: req.body.email,
                        password: req.body.password,
                        pseudo: req.body.pseudo

                    }).then(({data, headers, status}) => {
                        
                        console.log(data)
                        console.log(headers)
                        console.log(status)

                        return res.json(data)

                    }, err => {
                        return res.json(err)
                    });
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