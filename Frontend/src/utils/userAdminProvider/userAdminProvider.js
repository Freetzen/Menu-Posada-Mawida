import axios from "axios"

const urlLogin = import.meta.env.VITE_API_SECRET_LOGIN
const urlPost = import.meta.env.VITE_API_SECRET_POST

const userAdminProvider = {
    
    async getUserAdmin(user) {
        try {
            axios.defaults.withCredentials = true;
            const response = await axios.post(urlLogin, user) //COLOCAR EN .ENV
            return response.data
        } catch (error) {
            console.log(error.message)
        }
    },
    async postUserAdmin(object) {
        try {
            const response = await axios.post(urlPost, object)
            return response.data
        } catch (error) {
            console.log(error.message)
        }
    },
    async validateAdmin() {
        try {
            const headers = {
                withCredentials: true
            }
            const response = await axios.post(`/auth/api/log/validating`, headers)
            return response.data
        } catch (error) {
            console.log(error.message)
        }
    },
    async destroySession (){
        try {
            const response = await axios.get('/auth/api/log/destroysession')
            return response
        } catch (error) {
            console.log(error)
        }
    }

}

export default userAdminProvider