var DB_CONFIG = {
  host: '127.0.0.1',
  user: 'root',
  password: 'Digicorp@123',
  database: 'sc-smart_category',
  connectionLimit: 10
};

process.env.DB_CONFIG = DB_CONFIG;

module.exports = {
  DB_CONFIG: DB_CONFIG
}