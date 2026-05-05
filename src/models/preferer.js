import pool from '../config/database.js';

const Preferer = {
  selectByUser: async function (idUser) {
    const [rows] = await pool.query(
      `SELECT p.idTheme, t.libelle
       FROM preferer p
       JOIN theme t ON t.idTheme = p.idTheme
       WHERE p.idUser = ?`,
      [idUser]
    );
    return rows;
  },

  selectByTheme: async function (idTheme) {
    const [rows] = await pool.query(
      'SELECT idUser FROM preferer WHERE idTheme = ?',
      [idTheme]
    );
    return rows;
  },

  insert: async function (idUser, idTheme) {
    await pool.query(
      'INSERT INTO preferer (idUser, idTheme) VALUES (?, ?)',
      [idUser, idTheme]
    );
    return { idUser, idTheme };
  },

  remove: async function (idUser, idTheme) {
    await pool.query(
      'DELETE FROM preferer WHERE idUser = ? AND idTheme = ?',
      [idUser, idTheme]
    );
  }
};

export default Preferer;
