const express = require('express');
const mongoose = require('mongoose');
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

const mongoURI = process.env.MONGO_URI || 'mongodb://admin:lumya_secure_pass@localhost:27017/lumya?authSource=admin';

mongoose.connect(mongoURI)
  .then(() => console.log('✅ Succès : connectée à MongoDB'))
  .catch(err => console.error('❌ Erreur de connexion DB :', err));

app.use('/api', apiRouter);

app.get('/', (req, res) => {
  res.json({ message: "Bienvenue sur l'API LUMYA", status: 'La Safe Place est en ligne 🌿' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Serveur LUMYA démarré sur http://localhost:${PORT}`);
});