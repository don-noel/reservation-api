const express = require('express');
const dotenv = require('dotenv');
const db = require('./models/db');

// Configuration de dotenv pour lire .env
dotenv.config();

// Initialisation d'Express
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware pour lire le JSON
app.use(express.json());
const bookingRoutes = require('./routes/bookings');
app.use('/api/bookings', bookingRoutes);

// Route de base pour vérifier que le serveur fonctionne
app.get('/', (req, res) => {
  res.send('Bienvenue sur l\'API de réservation !');
});

// Démarrage du serveur
app.listen(PORT, () => {
  console.log(`Serveur en cours d’exécution sur http://localhost:${PORT}`);
});
