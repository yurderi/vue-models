require('log-process-errors')()

const Vue = require('vue')
const VueModels = require('../src/index')
const axios = require('axios')
const requireContext = require('./components/require-context');

Vue.use(VueModels, {
    models: requireContext(__dirname + '/models/'),
    http: axios.create()
})

// ... later

Vue.models.user.list().then(users => {
    console.log(users)
})