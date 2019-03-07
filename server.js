/* 
Imports
*/
    // NodeJS
    require('dotenv').config();
    const express = require('express');
    const path = require('path');
    const bodyParser = require('body-parser');
    const ejs = require('ejs');

    // Inner
    const mainRouter = require('./routes/main.router');
//


/* 
Configuration
*/
    const server = express();
    const port = process.env.PORT;

    class ServerClass{

        init(){
            // Config du dossier client
            server.set( 'views', __dirname + '/www' );
            server.use( express.static(path.join(__dirname, 'www')) );

            // Config du moteur de rendu
            server.set( 'view engine', 'ejs' );

            // Body-parser
            server.use(bodyParser.urlencoded({ extended: false }))

            // Configurer les routes
            server.use('/', mainRouter);


            // Lancer le serveur
            this.launch();
        }

        launch(){
            server.listen(port, () => {
                console.log(`Server is active on port ${port}`);
            });
        }

    }
//

 
/* 
Démarrer le serveur
*/
    new ServerClass().init();
//