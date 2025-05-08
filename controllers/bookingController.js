// controllers/bookingController.js
const db = require('../models/db');

// Obtenir toutes les réservations
exports.getAllBookings = (req, res) => {
  const query = 'SELECT * FROM bookings';
  db.query(query, (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.status(200).json(results);
  });
};

// Créer une nouvelle réservation
exports.createBooking = (req, res) => {
  const { user_name, email, reservation_date } = req.body;

  console.log('Données reçues :', req.body); // 🔍 Ajoute ceci

  const query = 'INSERT INTO bookings (user_name, email, reservation_date) VALUES (?, ?, ?)';
  db.query(query, [user_name, email, reservation_date], (err, result) => {
    if (err) {
      console.error('Erreur SQL :', err); // 🔍 Ajoute ceci aussi
      return res.status(500).json({ error: 'Erreur serveur' });
    }
    res.status(201).json({ message: 'Réservation créée', id: result.insertId });
  });
};


// Obtenir une réservation par ID
exports.getBookingById = (req, res) => {
  const query = 'SELECT * FROM bookings WHERE id = ?';
  db.query(query, [req.params.id], (err, results) => {
    if (err) return res.status(500).json({ error: err });
    if (results.length === 0) return res.status(404).json({ message: 'Réservation non trouvée' });
    res.status(200).json(results[0]);
  });
};

// Mettre à jour une réservation
exports.updateBooking = (req, res) => {
  const { user_name, email, reservation_date } = req.body;
  const query = 'UPDATE bookings SET user_name = ?, email = ?, reservation_date = ? WHERE id = ?';
  db.query(query, [user_name, email, reservation_date, req.params.id], (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.status(200).json({ message: 'Réservation mise à jour' });
  });
};

// Supprimer une réservation
exports.deleteBooking = (req, res) => {
  const query = 'DELETE FROM bookings WHERE id = ?';
  db.query(query, [req.params.id], (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.status(200).json({ message: 'Réservation supprimée' });
  });
};
