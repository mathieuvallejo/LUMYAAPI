import pool from '../config/database.js';

const Humeur = {
  selectAll: async function () {
    const [rows] = await pool.query('SELECT * FROM humeur');
    return rows;
  },

  selectById: async function (id) {
    const [rows] = await pool.query('SELECT * FROM humeur WHERE idHumeur = ?', [id]);
    return rows[0] || null;
  },

  selectByUser: async function (idUser) {
    const [rows] = await pool.query('SELECT * FROM humeur WHERE idUser = ? ORDER BY dateSuivi DESC', [idUser]);
    return rows;
  },

  insert: async function (data) {
    const { humeurs, idUser } = data;
    const [result] = await pool.query(
      'INSERT INTO humeur (humeurs, idUser) VALUES (?, ?)',
      [humeurs, idUser]
    );
    return { idHumeur: result.insertId, humeurs, idUser };
  },

  update: async function (id, data) {
    const { humeurs } = data;
    await pool.query('UPDATE humeur SET humeurs = ? WHERE idHumeur = ?', [humeurs, id]);
    return this.selectById(id);
  },

  remove: async function (id) {
    const humeur = await this.selectById(id);
    await pool.query('DELETE FROM humeur WHERE idHumeur = ?', [id]);
    return humeur;
  }
};

export default Humeur;
