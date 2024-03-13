import axios from 'axios'

const foodProvider = {

    async getFood() {
        try {
            const food = await axios.get('/food')
            return food.data
        } catch (error) {
            console.log(error.message)
        }
    },
    async postFood(foodObject) {
        try {
            const food = await axios.post('/food', foodObject)
            return food.data
        } catch (error) {
            console.log(error.message)
        }
    },
    async putFood(foodObject) {
        try {
            const food = await axios.put('/food', foodObject)
            return food.data
        } catch (error) {
            console.log(error.message)
        }
    },
    async getFoodById(id) {
        try {
            const foodById = await axios.get('/food', {params: id})
            return dessertById.data
        } catch (error) {
            console.log(error.message)
        }
    },
    async getFoodByName(name) {
        try {
            const foodByName = await axios.get('/food', {params: name})
            return dessertByName.data
        } catch (error) {
            console.log(error.message)
        }
    }

}

export default foodProvider