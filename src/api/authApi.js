
import axios from 'axios'


const authApi = axios.create({
    baseURL: 'https://identitytoolkit.googleapis.com/v1/accounts',
    params: {
        key: 'AIzaSyBymBeKRK3A27-e59e4LAea6CW-c_JCRrg'
    }
})

// console.log( process.env.NODE_ENV ) // TEST durante testing, 

export default authApi


