import axios from 'axios'

const dessertsProvider = {

    async getDesserts() {
        try {
            const response = await axios.get('/desserts')
            return response.data
        } catch (error) {
            console.log(error.message)
        }
    },
    async postDesserts(object) {
        try {
            const response = await axios.post('/desserts', object)
            return response.data
        } catch (error) {
            console.log(error.message)
        }
    },
    async putDesserts(object) {
        try {
            const response = await axios.put('/desserts', object)
            return response.data
        } catch (error) {
            console.log(error.message)
        }
    },
    async getDessertById(id) {
        try {
            const obj = {
                id: id
            }
            const drinkById = await axios.get('/drinks/id', {params: obj})
            return drinkById.data
        } catch (error) {
            console.log(error.message)
        }
    },

}

export default dessertsProvider