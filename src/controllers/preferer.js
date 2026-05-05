import model from '../models/preferer.js';

async function getByUser(req, res) {
  try {
    const result = await model.selectByUser(req.params.idUser);
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function getByTheme(req, res) {
  try {
    const result = await model.selectByTheme(req.params.idTheme);
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function create(req, res) {
  try {
    const { idUser, idTheme } = req.body;
    const result = await model.insert(idUser, idTheme);
    res.status(201).json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function remove(req, res) {
  try {
    const { idUser, idTheme } = req.params;
    await model.remove(idUser, idTheme);
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export { getByUser, getByTheme, create, remove };
