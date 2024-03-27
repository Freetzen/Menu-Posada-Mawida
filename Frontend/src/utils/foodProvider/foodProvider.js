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
            const obj = {
                id: id
            }
            const foodById = await axios.get('/food/id', {params: obj})
            return foodById.data
        } catch (error) {
            console.log(error.message)
        }
    },
    async getFoodByName(name) {
        try {
            const foodByName = await axios.get('/food/name', {params: name})
            return foodByName.data
        } catch (error) {
            console.log(error.message)
        }
    },
    async deleteFoodById(id) {
        try {
            const obj = {
                id: id
            }
            const foodById = await axios.delete('/food', {params: obj})
            return foodById.data
        } catch (error) {
            console.log(error.message)
        }
    }
}

export default foodProvider