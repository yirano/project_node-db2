// Update with your config settings.

module.exports = {

  client: 'sqlite3',
  connection: {
    filename: './data/car-dealer.db3'
  },
  migration: {
    directory: './data/migrations'
  },
  seeds: {
    directory: './data/seeds'
  },
  useNullAsDefault: true

}
