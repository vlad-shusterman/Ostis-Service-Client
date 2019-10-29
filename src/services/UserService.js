import api from '@/services/api'

export default {
  getFile (link) {
    var clientSecret = 'password'
    var clientId = 'user'

    var authorizationBasic = window.btoa(clientId + ':' + clientSecret)

    return api().post(`parse/url?url=${link}`, '', {
      headers: {
        'Authorization': 'Basic ' + authorizationBasic,
      }
    })
  },

  getSmth (text) {
    const clientSecret = 'password'
    const clientId = 'user'

    const authorizationBasic = window.btoa(clientId + ':' + clientSecret)

    return api().post('/essay/classic', text, {
      headers: {
        'Authorization': 'Basic ' + authorizationBasic,
        'Content-Type': 'text/plain'
      }
    })
  },

  getSmth1 (text) {
    const clientSecret = 'password'
    const clientId = 'user'

    const authorizationBasic = window.btoa(clientId + ':' + clientSecret)

    return api().post('/essay/key', text, {
      headers: {
        'Authorization': 'Basic ' + authorizationBasic,
        'Content-Type': 'text/plain'
      }
    })
  }
}
