import axios from 'axios'

const drinksProvider = {

    async getDrinks() {
        try {
            const response = await axios.get('/drinks')
            return response.data
        } catch (error) {
            console.log(error.message)
        }
    },
    async postDrinks(object) {
        try {
            const response = await axios.post('/drinks', object)
            return response.data
        } catch (error) {
            console.log(error.message)
        }
    },
    async putDrinks(object) {
        try {
            const response = await axios.put('/drinks', object)
            return response.data
        } catch (error) {
            console.log(error.message)
        }
    },
    async getDrinkById(id) {
        try {
            const drinkById = await axios.get('/drinks', {params: id})
            return drinkById.data
        } catch (error) {
            console.log(error.message)
        }
    },
    async getDrinkByName(name) {
        try {
            const drinkByName = await axios.get('/drinks', {params: name})
            return drinkById.data
        } catch (error) {
            console.log(error.message)
        }
    }

}

export default drinksProvider