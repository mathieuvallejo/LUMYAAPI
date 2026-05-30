import model from '../models/video.js';
import Preferer from '../models/preferer.js';

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
    if (req.file) {
      data.urlVideo = `/uploads/videos/${req.file.filename}`;
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

async function getFeed(req, res) {
  try {
    const idUser = req.user.idUser;
    const preferences = await Preferer.selectByUser(idUser);
    const themeIds = preferences.map(p => p.idTheme);

    if (themeIds.length === 0) {
      const result = await model.selectAll();
      return res.status(200).json(result);
    }

    const result = await model.selectByThemes(themeIds);
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export { getAll, getOne, getByUser, getFeed, create, edit, remove, addView };