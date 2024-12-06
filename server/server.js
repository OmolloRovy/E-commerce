const express =  require ('express');
const mongoose = require ('mongoose');
const cookieParser = require('cookie-parser');
const cors = require ('cors')





//db connection 
mongoose.connect(
    "mongodb+srv://masimevanistelrooy:<db_password>@cluster0.wxacs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
)
.then (()=> console.log('Mongodb Connected'))
.catch((error) => console.log(error));

const app = express()
const PORT = process.env.PORT || 5000;

app.use(
    cors({
        origin : 'http://localhost:5173/'
    })
)