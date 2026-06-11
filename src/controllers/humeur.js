import model from '../models/humeur.js';

async function getAll(req, res) {
  try {
    const result = await model.selectAll();
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function getOne(req, res) {
  try {
    const result = await model.selectById(req.params.id);
    if (!result) return res.status(404).json({ error: 'Humeur non trouvée' });
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function getByUser(req, res) {
  try {
    const result = await model.selectByUser(req.params.idUser);
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function create(req, res) {
  try {
    const { humeurs, idUser } = req.body;
    const recent = await model.selectRecentByUser(idUser);
    if (recent) {
      const result = await model.update(recent.idHumeur, { humeurs });
      return res.status(200).json(result);
    }
    const result = await model.insert(req.body);
    res.status(201).json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function edit(req, res) {
  try {
    const result = await model.update(req.params.id, req.body);
    if (!result) return res.status(404).json({ error: 'Humeur non trouvée' });
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function remove(req, res) {
  try {
    await model.remove(req.params.id);
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export { getAll, getOne, getByUser, create, edit, remove };
