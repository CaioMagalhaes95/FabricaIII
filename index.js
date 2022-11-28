const express = require('express');
const mongoose = require('mongoose')
const cors = require('cors')
const app = express();
const port = 3000;
var path = require('path')

const router = require('./server/routes/personRoutes.js')

app.use(cors())
app.use(router)

app.use(express.json());
app.engine('html', require('ejs').renderFile)
app.set('view engine', 'html')
app.set('views', path.join(__dirname, './views'))


mongoose.connect('mongodb://localhost:27017')//'mongodb+srv://Caio:mongodb@cluster1.ajekz50.mongodb.net/?retryWrites=true&w=majority')//
.then(() =>{
    console.log("Conectado!");
    app.listen(port, ()=>{
        
    })
})
.catch((err) => console.log(err))

// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://Caio:<Salvar17182910@>@cluster0.wljzu.mongodb.net/?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });