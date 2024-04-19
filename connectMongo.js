const mongoose = require('mongoose')

const connectDB = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log('Connect to mongodb succesfully')
    }catch(error){
        console.log("Connection failed " + error.message)
    }
}

module.exports = connectDB