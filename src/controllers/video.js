import  model  from '../models/video.js';

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
    const id = req.params.id;
    const result = await model.selectById(id);
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function getByUser(req, res) {
  try {
    const idUser = req.params.idUser;
    const result = await model.selectByUser(idUser);
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function create(req, res) {
  try {
    const data = req.body;
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

async function addView(req, res) {
  try {
    const id = req.params.id;
    const result = await model.incrementVues(id);
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

<<<<<<< HEAD
<<<<<<< HEAD
export { getAll, getOne, getByUser, create, edit, remove, addView };
=======
module.exports = { getAll, getOne, getByUser, create, edit, remove, addView };
>>>>>>> e726143 (add video (controller,models,routes))
=======
export { getAll, getOne, getByUser, create, edit, remove, addView };
>>>>>>> 48b2faf (correction transformation en import from)
