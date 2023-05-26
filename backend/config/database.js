/*const mongoose = require("mongoose")

DB_URI="mongodb://0.0.0.0:27017/ECommerce"
"proxy": "http://192.168.135.214:4000"
DB_URI="mongodb+srv://Beans:beans27@e-commerce.pq5en9h.mongodb.net/ECommerce?retryWrites=true&w=majority"

const connectDatabase = ()=>{

    mongoose.connect(process.env.DB_URI,{useNewUrlParser:true,useUnifiedTopology:true,useCreateIndex:true}).then(()=>{
        console.log(`MongoDB Connected with server:${data.connection.host}`)
    }).catch((err)=>{
        console.log(err)
    })
}

module.exports = connectDatabase
*/
const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose.connect(process.env.DB_URI,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
    })
    .then((data) => {
        console.log(`Mongodb connected with server: ${data.connection.host}`);
    });
};

module.exports = connectDatabase;