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
    }

}

export default foodProvider