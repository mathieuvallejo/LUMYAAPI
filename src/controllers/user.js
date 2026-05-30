import   model  from '../models/user.js';
import bcrypt from'bcrypt';

const saltRounds = 12;

async function getAll(_req, res) {
  try {
    const result = await model.selectAll();
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function getOne(req, res) {
  try {
    const id = req.params.id;
    const result = await model.selectById(id);
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function create(req, res) {
  try {
    const data = req.body;
    if (data.password) {
      data.password = await bcrypt.hash(data.password, saltRounds);
    }
    const result = await model.insert(data);
    res.status(201).json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function edit(req, res) {
  try {
    const id = req.params.id;
    const data = req.body;
    if (data.password) {
      data.password = await bcrypt.hash(data.password, saltRounds);
    }
    const result = await model.update(id, data);
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function remove(req, res) {
  try {
    const id = req.params.id;
    await model.remove(id);
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function uploadPdp(req, res) {
  try {
    const id = req.params.id;
    if (!req.file) return res.status(400).json({ error: 'Aucun fichier reçu' });
    const ext = req.file.originalname.split('.').pop().toLowerCase();
    const photoUrl = `/uploads/img/pdp-${id}.${ext}`;
    const result = await model.update(id, { pdp: photoUrl });
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export { getAll, getOne, create, edit, remove, uploadPdp };
