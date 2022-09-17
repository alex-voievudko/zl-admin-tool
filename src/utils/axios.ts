import axios from 'axios'

const axiosInstance = axios.create({
	baseURL: 'https://zl-mock-server.herokuapp.com',
})

export default axiosInstance
