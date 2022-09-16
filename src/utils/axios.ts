import axios from 'axios'

const axiosInstance = axios.create({
	baseURL: 'https://stoplight.io/mocks/no-name-company/admin-tool/91222677',
})

export default axiosInstance
