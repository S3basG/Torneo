const express = requrie('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express()
const PORT = 5000; // express is running on local port 5000

//allows the backend to communicate with the frontend
app.use(cors())
app.use(express.json())

//connects the mongoDB atlas to the backend

//unsure which database it is connected too, might make a new database
mongoose.connect('mongodb+srv://admin:admin@opensourceghw.d8d8rxl.mongodb.net/',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

.then(() => console.log("MongoDB is connected"))
.catch(err => console.log("MongoDB can't connect", err));

const User = require('./models/Users')

app.post('/api/register', async (req, res) => {
    const {username, email, password} = req.body;

    try{
        const newUser = new User({username, email, password})
        await newUser.save()

        // res.status(###) sets respected HTTP status for the response
        res.status(201).json({message: 'User registeration is complete'})
        
    }
    catch (error){
        console.error(error);
        res.status(500).json({message: 'User registeration failed'})
    }
});