const express = require('express');
const pool = require('./src/config/database');
const cors = require('cors');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
require('dotenv').config();

const apiRouter = require('./src/routes/api');

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(cookieParser());

// Tester la connexion à MariaDB
pool.getConnection()
  .then(connection => {
    console.log('✅ Succès : connectée à MariaDB');
    connection.release();
  })
  .catch(err => console.error('❌ Erreur de connexion DB :', err));

app.use('/api', apiRouter);

app.get('/', (req, res) => {
  res.json({ message: "Bienvenue sur l'API LUMYA", status: 'La Safe Place est en ligne 🌿' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Serveur LUMYA démarré sur http://localhost:${PORT}`);
});