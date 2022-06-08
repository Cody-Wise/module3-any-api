const pool = require('../utils/pool');
module.exports = class Star_War {
  id;
  name;
  height;
  mass;
  hair_color;
  skin_color;
  birth_year;
  gender;
  homeworld;

  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.height = row.height;
    this.mass = row.mass;
    this.hair_color = row.hair_color;
    this.skin_color = row.skin_color;
    this.birth_year = row.birth_year;
    this.gender = row.gender;
    this.homeworld = row.homeworld;
  }

  static async getAll() {
    const { rows } = await pool.query('SELECT * FROm star_wars;');
    return rows.map((row) => new Star_War(row));
  }
  static async getById(id) {
    const { rows } = await pool.query('SELECT * FROM star_wars WHERE id=$1;', [
      id,
    ]);
    if (!rows[0]) return null;

    return new Star_War(rows[0]);
  }
};
