const jwt = require('jsonwebtoken');
require('dotenv').config(); // ← obligatoire pour lire le .env

const payload = {
  id: 1,
  email: 'admin@example.com',
};

const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });

console.log('Ton nouveau token :');
console.log(token);
