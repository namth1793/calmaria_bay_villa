require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5007;

const allowedOrigins = process.env.FRONTEND_URL
  ? process.env.FRONTEND_URL.split(',').map(o => o.trim())
  : ['http://localhost:3000'];

app.use(cors({
  origin: (origin, cb) => {
    if (!origin || allowedOrigins.some(o => origin.startsWith(o))) return cb(null, true);
    cb(new Error('Not allowed by CORS'));
  }
}));
app.use(express.json());

app.use('/api/bookings', require('./routes/bookings'));

app.get('/', (req, res) => res.json({ message: 'Calmaria Bay Villa API running' }));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
