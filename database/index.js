const { Client } = require('pg');
const client = new Client({
  host: 'localhost',
  port: 5432,
  database: 'similarlistings',
});
client.connect()
  .then(() => console.log('Connected'))
  .catch((err) => console.log(err));

module.exports = {
  client,
};
