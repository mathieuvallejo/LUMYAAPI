import pool from '../config/database.js';

const Traiter = {
  selectByVideo: async function (idVideo) {
    const [rows] = await pool.query(
      `SELECT t.idTheme, t.libelle
       FROM traiter tr
       JOIN theme t ON t.idTheme = tr.idTheme
       WHERE tr.idVideo = ?`,
      [idVideo]
    );
    return rows;
  },

  selectByTheme: async function (idTheme) {
    const [rows] = await pool.query(
      'SELECT idVideo FROM traiter WHERE idTheme = ?',
      [idTheme]
    );
    return rows;
  },

  insert: async function (idTheme, idVideo) {
    await pool.query(
      'INSERT INTO traiter (idTheme, idVideo) VALUES (?, ?)',
      [idTheme, idVideo]
    );
    return { idTheme, idVideo };
  },

  remove: async function (idTheme, idVideo) {
    await pool.query(
      'DELETE FROM traiter WHERE idTheme = ? AND idVideo = ?',
      [idTheme, idVideo]
    );
  }
};

export default Traiter;
