import axios from 'axios'

const saveAxios = axios.create({
    baseURL: 'http://localhost:4000/api'
})

export default saveAxios