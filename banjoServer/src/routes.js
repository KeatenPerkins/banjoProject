const AuthController = require('./controllers/AuthController')
const AuthControllerPolicy = require('./policies/AuthControllerPolicy')
// Define routes 
module.exports = (app) => {
  app.post('/register',
    AuthControllerPolicy.register,
    AuthController.register)

  app.post('/login',
    AuthController.login)
}
