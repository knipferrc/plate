const nextRoutes = require('next-routes');

module.exports = nextRoutes()
  .add('/')
  .add('dashboard')
  .add('platefiller', '/platefiller/:id')
  .add('account')
  .add('login')
  .add('register')
  .add('forgotpassword');
