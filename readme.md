# Reservation API

Ce projet est une application web complète permettant de gérer des réservations avec authentification sécurisée, opérations CRUD (Créer, Lire, Mettre à jour, Supprimer) et interface web dynamique.

## Fonctionnalités

- Connexion sécurisée avec mots de passe hachés (bcrypt)
- Authentification par jeton JWT
- Tableau de bord privé accessible uniquement après connexion
- Création, modification et suppression de réservations
- Interface utilisateur développée avec HTML, CSS et JavaScript
- API REST construite avec Node.js, Express et MySQL

## Technologies utilisées

- Backend : Node.js, Express.js
- Base de données : MySQL
- Sécurité : JWT, bcrypt
- Frontend : HTML, CSS, JavaScript natif
- Middleware personnalisé pour la vérification du token

## Prérequis

- Node.js installé
- MySQL installé et en service

## Installation

1. Cloner le projet
    ```bash
    
  git clone https://github.com/votre-utilisateur/reservation-api.git
  cd reservation-api

2. Installer les dépendances Node.js

npm install

3. Créer une base de données MySQL nommée reservationdb et exécuter les requêtes suivantes 

CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  email VARCHAR(100) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL
);

CREATE TABLE bookings (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_name VARCHAR(100),
  email VARCHAR(100),
  reservation_date DATE
);

"Tu peux ajouter manuellement un utilisateur avec un mot de passe haché (via bcrypt) ou via une route POST /api/createUser si elle existe"

4. Créer un fichier .env à la racine du projet avec les informations suivantes :

PORT=3000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=reservationdb
JWT_SECRET=supersecret123

5. Lancer le serveur

node server.js

6. Ouvrir l'application dans un navigateur

http://localhost:3000/login.html


7. Sécurité

    Les mots de passe sont hachés avec bcrypt
    Toutes les routes sont protégées via un middleware verifyToken
    Le token JWT est stocké en localStorage et utilisé dans le header Authorization

8. But

Projet réalisé dans un but d'apprentissage des API sécurisées et de la connexion frontend-backend avec MySQL
