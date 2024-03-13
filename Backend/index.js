import 'dotenv/config'
import server from './src/server.js'
import dbConfig from './src/config/dbConfig.js'

//Mongo DB
const connectionMongoose = async () => {
try {
  await dbConfig()
  server.listen(process.env.PORT, () => {
    console.log(`The server is ON`);
    console.log(`Database connected to MongoDB`)
  })
} catch (error) {
  console.log(error)
}

}

connectionMongoose()