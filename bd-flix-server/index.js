const { MongoClient, ServerApiVersion } = require('mongodb');
const express = require('express');
const app = express();
const cors = require('cors');
const port = 5000;
require('dotenv').config();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('hello');
})

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.ac1kfa5.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run() {
    try {
        const ComediesCollection = client.db("bdFlix").collection("comedies");
        const allMoviesCollection = client.db("bdFlix").collection("allmovies");

        app.post('/allmovies', async (req, res) => {
            const allmovies = req.body;
            const result = await allMoviesCollection.insertOne(allmovies);
            res.send(result);
        })

        app.get('/movies', async (req, res) => {
            const result = await allMoviesCollection.find({}).toArray();
            res.send(result);
        })

        // get movie by category
        app.get('/allmovie/:category', async (req, res) => {
            const allmovies = req.params.category;
            const getmovies = await allMoviesCollection.find({}).toArray();
            const result = await getmovies.filter(getmovie => getmovie.category == allmovies);
            res.send(result);
        })

        app.get('/movie/:id', async (req, res) => {
            const allmovies = req.params.id;
            const getmovies = await allMoviesCollection.find({}).toArray();
            const result = await getmovies.find(getmovie => getmovie.id == allmovies);
            res.send(result);
        })

        app.get('/comedies', async (req, res) => {
            const comedies = await ComediesCollection.find({}).toArray();
            res.send(comedies);
        })

    }
    finally { }
}
run().catch(console.dir);
app.listen(port, () => {
    console.log(`listening on ${port}`);
})