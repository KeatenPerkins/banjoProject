// Joi is a package for validating requests
const Joi = require('joi')

module.exports = {
  register (req, res, next) {
    // console.log('***** AUTH POLICY*****')
    // console.log('EMAIL:', req.body.email)
    // console.log('PASSWORD:', req.body.password)

    // Set up Joi validation schema
    const schema = Joi.object().keys({
      email: Joi.string().email(),
      password: Joi.string().regex(/^[a-zA-Z0-9]{8,30}$/).required()
    }).with('email', 'password')

    // Assign the email and password to an object that can be validated.
    let myObj = {
      email: req.body.email,
      password: req.body.password
    }

    // Call Validate and return an error or success.
    Joi.validate(myObj, schema, function (error) {
      if (error) {
        // console.log('HAS ERROR*************')
        // send a 422 error response if validation fails
        res.status(422).json({
          status: 'error',
          message: 'Registration requires: A valid email that is not in use. A password with at least 8 characters.'
        })
      } else {
        // console.log('NO ERROR**********')
        next()
      }
    })
  }
}
