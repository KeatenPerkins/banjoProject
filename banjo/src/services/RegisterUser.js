import Axios from '@/services/Axios'

export default{
  registerUser (credentials) {
    console.log('axios call: register', credentials)
    return Axios().post('register', credentials)
  },
  login (credentials) {
    console.log('axios call: register', credentials)
    return Axios().post('login', credentials)
  }
}
