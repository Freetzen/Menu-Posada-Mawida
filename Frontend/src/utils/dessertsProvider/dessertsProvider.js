import axios from "axios"

const dessertsProvider =  {
 
    async getDesserts() {
        try {
            const desserts = await axios.get('/desserts')
            return desserts.data
        } catch (error) {
            console.log(error.message)
        }
    },
    async postDesserts(dessertObject) {
        try {
            const createDesserts = await axios.post('/desserts', dessertObject)
            return createDesserts.data
        } catch (error) {
            console.log(error.message)
        }
    },
    async putDesserts(dessertObject) {
        try {
            const updateDesserts = await axios.put('/desserts', dessertObject)
            return updateDesserts.data
        } catch (error) {
            console.log(error.message)
        }
    },
    async getDessertsById(id) {
        try {
            const dessertById = await axios.get('/desserts', {params: id})
            return dessertById.data
        } catch (error) {
            console.log(error.message)
        }
    },
    async getDessertsByName(name) {
        try {
            const dessertByName = await axios.get('/desserts', {params: name})
            return dessertByName.data
        } catch (error) {
            console.log(error.message)
        }
    }
}

export default dessertsProvider