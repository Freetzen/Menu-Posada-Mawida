import axios from 'axios'
const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUDNAME

const foodProvider = {

    async getFood() {
        try {
            axios.defaults.withCredentials = true;
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
    },
    async uploadImage(image) {
        try {
            const url = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`
                  const data = new FormData();
                  data.append("file", image);
                  data.append("upload_preset", "PosadaMawida");
                  const upload = await fetch(url, {
                      method: "POST",
                      body: data
                  })
                  const responseData = await upload.json()
                  return responseData
          } catch (error) {
            console.log(error)
          }
    }
}

export default foodProvider