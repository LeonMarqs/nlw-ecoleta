import knex from 'knex';
import path from 'path'; //Padroniza o acesso às pastas

const connection = knex({
  client: 'sqlite3',
  connection: {
    filename: path.resolve(__dirname, 'database.sqlite'),
  },
  useNullAsDefault: true
});

export default connection;