import express from 'express';
import  pool from './src/config/database.js';
import cors from'cors';
// import  helmet from 'helmet';
import cookieParser from 'cookie-parser';
// require('dotenv').config();
import 'dotenv/config';

import  apiRouter from './src/routes/api.js';

const app = express();

// app.use(helmet());
app.use(cors({
  origin: 'http://localhost:4200',
  credentials: true
}));
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

const PORT = process.env.PORT ;
app.listen(PORT, () => {
  console.log(`🚀 Serveur LUMYA démarré sur http://localhost:${PORT}`);
});