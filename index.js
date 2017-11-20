let MIC = require('mic-sdk-js').default

const CONFIG = {
  // Username of the Cognito user
  username: '',
  // Password of the Cognito user
  password: '',
  // The application endpoint
  app:      ''
}

// Instantiate a new Managed IoT Cloud API object
let api = new MIC

// Init by providing the app endpoint
api.init(CONFIG.app)

  // The manifest is fetched and a 'unauthorized'
  // Cognito identity is created
  .then((manifest, credentials) => {

    // Login the Cognito user
    return api.login(CONFIG.username, CONFIG.password)
      .then(user => {
        console.log(user)
      })
  })
  .catch(err => console.error(err))