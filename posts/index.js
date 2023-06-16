const express = require('express');
const bodyParser = require('body-parser');
const { randomBytes } = require('crypto');
const cors = require('cors');//used to communicate between two localhost
const axios = require('axios');

const app = express();
app.use(bodyParser.json());
app.use(cors());  

const posts = {};

app.get('/posts',(req,res)=>{
    res.send(posts);  
});  

//added async and await in funciton but not working
app.post('/posts', async (req,res) => {
    const id = randomBytes(4).toString('hex'); 
    const {title} = req.body; 

    posts[id] = {
        id, 
        title   
    };
    
    await axios.post('http://localhost:4005/events',{
        type:"PostCreated",
        data:{
            id,title
        }   
    });
   
    res.status(201).send(posts[id]);
});

app.post('/events',(req,res)=>{
    console.log('Recieve event: ',req.body.type);
    
    res.send({});
})

app.listen(4000,()=>{
    console.log('Listening on port 4000')
})