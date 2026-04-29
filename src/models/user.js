import pool from'../config/database.js';

const User = {
  selectAll: async function () {
    const [rows] = await pool.query('SELECT * FROM utilisateur');
    return rows;
  },

  selectById: async function (id) {
    const [rows] = await pool.query('SELECT * FROM utilisateur WHERE idUser = ?', [id]);
    return rows[0] || null;
  },

  selectByEmail: async function (name) {
    const [rows] = await pool.query('SELECT * FROM utilisateur WHERE email = ?', [name]);
    return rows;
  },

insert: async function (data) {
  const { nom, prenom, email, password, date, role = 'user' } = data;
  const [result] = await pool.query(
    'INSERT INTO utilisateur (nom, prenom, email, dateNaissance, motDePasseHash, typeRole, dateCreation) VALUES (?, ?, ?, ?, ?, ?, NOW())',
    [nom, prenom, email, date, password, role]
  );
  return { idUser: result.insertId, nom, prenom, email, date, role, createdAt: new Date() };
},

  update: async function (id, data) {
    const fields = [];
    const values = [];
    
    Object.keys(data).forEach(key => {
      if (key !== 'id' && key !== 'createdAt') {
        fields.push(`${key} = ?`);
        values.push(data[key]);
      }
    });
    
    if (fields.length === 0) return this.selectById(id);
    
    values.push(id);
    await pool.query(`UPDATE utilisateur SET ${fields.join(', ')} WHERE idUser = ?`, values);
    return this.selectById(id);
  },

  remove: async function (id) {
    const user = await this.selectById(id);
    await pool.query('DELETE FROM utilisateur WHERE idUser = ?', [id]);
    return user;
  }, 
  upgradeToProRole: async function (id) {
    await pool.query("UPDATE utilisateur SET typeRole = 'pro' WHERE idUser = ?", [id]);
    return this.selectById(id);
  }
};

export default User;
