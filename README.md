# HETIC_chat

Mise en place d'une application de chat (chatbot)

## Configuration de base
- Créer un fichier pour le serveur
- Initialiser le dossier serveur (npm init)
- Importer les composants express, body-parser, dotenv, ejs, mongoose, path, nodemon (npm i -s ...)
- Configurer le fichier serveur :
    - créer une constante pour les imports (attention à dotenv)
    - créer une constante pour le serveur (utilisation de la fonction express())
    - Configurer les composants
    - Lancer le serveur

## Configuration des vues client
- Définir le _moteur de rendu_ en __ejs__
- Définir une dossier "__www__" comme étant le _dossier client_
- Créer un fichier "__index.ejs__" dans le dossier "__www__"
- Créer un router front
    - Créer la routes Homepage
    - Créer la route register
    - Créer la route login
    - Créer la route chat

## Création de l'API
- Créer un fichier de routes pour l'api (cf. font.routes)
- Créer une route "/register"
- Créer une route "/login"

## Création des formulaires register/login
- Le formulaire d'inscription contient
    - email
    - pseudo
    - password (x2)
    - cgu

- Le formulaire de connexion contient :
    - email
    - password