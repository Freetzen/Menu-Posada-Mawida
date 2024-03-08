import axios from "axios"

const userAdminProvider = {
    
    async getUserAdmin(user) {
        try {
            const response = await axios.get('/puseradminm', {params: user})
            return response.data
        } catch (error) {
            console.log(error.message)
        }
    },
    async postUserAdmin(object) {
        try {
            const response = await axios.post('/puseradminm', object)
            return response.data
        } catch (error) {
            console.log(error.message)
        }
    }

}

export default userAdminProvider