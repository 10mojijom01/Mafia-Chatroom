// importing
import express from 'express'
import mongoose from 'mongoose'
import Messages from './dbMessages.js'
import Pusher from 'pusher'
import cors from 'cors'

// app config
const app = express()
const port = process.env.PORT || 9000





const pusher = new Pusher({
  appId: "1280399",
  key: "00497ef6125b21ef38b1",
  secret: "a8c33baf4df6ef54f185",
  cluster: "us2",
  useTLS: true
});

pusher.trigger("my-channel", "my-event", {
  message: "hello world"
});


//middleware
app.use(express.json())
app.use(cors())


// DB config

const connection_url = 'mongodb+srv://admin:RVLOJw9dsKVorPb0@cluster0.uklnc.mongodb.net/MafiaChatdb?retryWrites=true&w=majority'

mongoose.connect(connection_url, {

    useNewUrlParser: true,
    useUnifiedTopology: true
});


const db = mongoose.connection
db.once('open', () => {
    console.log("DB connected"); 
    const msgCollection = db.collection("messagecontents")
    
    const changeStream = msgCollection.watch();
    
    changeStream.on("change", (change) => {
        
        if (change.operationType === "insert") {
            const messageDetails = change.fullDocument;
            pusher.trigger("messages", "inserted", {
                name: messageDetails.name,
                message: messageDetails.message,
                timestamp:messageDetails.timestamp,
                sender_userid:messageDetails.sender_userid,

            })
            console.log(messageDetails)

        } else {
            console.log("Error triggering Pusher");
        }
    })
})


//api routes
app.get('/', (req, res) => res.status(200).send('hello world'))

app.post('/messages/new', (req, res) => {
    const dbMessages = req.body;

    Messages.create(dbMessages, (err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(201).send(`new message created \n ${data}`)
        }
    })
})

app.get('/messages/sync', (req, res) => {
    Messages.find((err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(200).send(data)
        }
    })
})

// listen
app.listen(port, () => console.log(`Listening on localhost : ${port}`))