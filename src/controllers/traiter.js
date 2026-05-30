import model from '../models/traiter.js';

async function getByVideo(req, res) {
  try {
    const result = await model.selectByVideo(req.params.idVideo);
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function create(req, res) {
  try {
    const { idTheme, idVideo } = req.body;
    const result = await model.insert(idTheme, idVideo);
    res.status(201).json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function remove(req, res) {
  try {
    const { idTheme, idVideo } = req.params;
    await model.remove(idTheme, idVideo);
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export { getByVideo, create, remove };
