// set server port and DB information
module.exports = {
  port: process.env.PORT || 8081,
  db: {
    database: process.env.DB_NAME || 'banjoDB',
    user: process.env.DB_USER || 'banjoDB',
    password: process.env.DB_PASS || 'banjoDB',
    options: {
      dialect: process.env.DIALECT || 'sqlite',
      host: process.env.HOST || 'localhost',
      storage: './banjoDB.sqlite'
    }
  },
  authentication: {
    jwtSecret: process.env.JWT_SECRET || 'secret'
  }
}
