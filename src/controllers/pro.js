import { verifierProfessionnel } from '../services/opendata.js';
import userModel from '../models/user.js';

async function verifyPro(req, res) {
  try {
    const { nom, siret } = req.body;

    if (!nom || !siret) {
      return res.status(400).json({ error: 'Les champs nom et siret sont obligatoires.' });
    }

    const existe = await verifierProfessionnel(siret, nom);

    if (!existe) {
      return res.status(404).json({ error: 'Professionnel non trouvé dans le répertoire RPPS.' });
    }

    return res.status(200).json({ message: 'Professionnel vérifié avec succès.' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function upgradeToPro(req, res) {
  try {
    const { nom, siret } = req.body;
    const id = req.params.id;

    if (!nom || !siret) {
      return res.status(400).json({ error: 'Les champs nom et siret sont obligatoires.' });
    }

    const existe = await verifierProfessionnel(siret, nom);

    if (!existe) {
      return res.status(404).json({ error: 'Professionnel non trouvé dans le répertoire RPPS.' });
    }

    const user = await userModel.upgradeToProRole(id);
    return res.status(200).json({ message: 'Compte passé en professionnel.', user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export { verifyPro, upgradeToPro };