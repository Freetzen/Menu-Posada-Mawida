import mongoose from 'mongoose'
import server from './src/server.js'
import 'dotenv/config'

const PORT = 3001

server.listen(PORT, () => {
  console.log(`The server is ON`);
})

//Mongo DB
const connectionMongoose = async () => {
  await mongoose.connect(process.env.URLMONGODB)
    .catch((err) => console.log(err));
  console.log(`Database connected to MongoDB`)
}

connectionMongoose()