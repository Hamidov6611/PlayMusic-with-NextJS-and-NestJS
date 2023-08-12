import {getItem} from '../helpers/persistense-storage'
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:5000/tracks'

// axios.interceptors.request.use(config => {
// 	const token = getItem('token')
// 	const authorization = token ? `Token ${token}` : ''
// 	config.headers.Authorization = authorization
// 	return config
// })

export default axios