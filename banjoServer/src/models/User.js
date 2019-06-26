// Bluebird gives more options for promises.
const Promise = require('bluebird')
const bcrypt = Promise.promisifyAll(require('bcrypt-nodejs'))

// Hash user password and set user.password as the hash
function hashPassword (user, options) {
  const SALT_FACTOR = 8

  if (!user.changed('password')) {
    return
  }

  return bcrypt
    .genSaltAsync(SALT_FACTOR)
    .then(salt => bcrypt.hashAsync(user.password, salt, null))
    .then(hash => {
      user.setDataValue('password', hash)
    })
}
// Define User as an email and password.
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: {
      type: DataTypes.STRING,
      unique: true
    },
    password: DataTypes.STRING
  }, {
    // Has the password before the password is saved, or updated
    hooks: {
      beforeCreate: hashPassword,
      beforeUpdate: hashPassword,
      beforeSave: hashPassword
    }
  })
  // Compare a user's password and the password in the database. Keeps failing the password. Need to figure out why.
  User.prototype.comparePassword = function (password) {
    console.log('COMPAREPASS ***', password)
    console.log('THIS.PASS', this.password)
    return bcrypt.compareAsync(password, this.password)
  }

  User.associate = function (models) {
  }

  return User
}
