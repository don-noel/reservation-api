// routes/createUser.js
const bcrypt = require('bcrypt');
const db = require('../models/db');

const email = 'admin@example.com';
const plainPassword = '123456';

async function createUser() {
  try {
    const hashedPassword = await bcrypt.hash(plainPassword, 10);

    const query = 'INSERT INTO users (email, password) VALUES (?, ?)';
    db.query(query, [email, hashedPassword], (err, result) => {
      if (err) {
        console.error('Erreur lors de l\'insertion :', err.message);
      } else {
        console.log('Utilisateur inséré avec succès, ID =', result.insertId);
      }
      db.end();
    });
  } catch (error) {
    console.error('Erreur bcrypt :', error.message);
  }
}

createUser();
