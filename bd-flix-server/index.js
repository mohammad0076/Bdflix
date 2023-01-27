const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
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
        const MostPopularMoviesCategoriCollection = client.db("bdFlix").collection("MostPopularMovie");
        const MoviesForYouCategoriCollection = client.db("bdFlix").collection("MoviesForYou");
        const ComediesCollection = client.db("bdFlix").collection("comedies");
        const allMoviesCollection = client.db("bdFlix").collection("allmovies");

        const allUsers = client.db("bdFlix").collection("user");

        app.get('/mostPopularMovies', async (req, res) => {
            const result = await MostPopularMoviesCategoriCollection.find({}).toArray();
            res.send(result);
        })

        app.post('/allmovies', async (req, res) => {
            const allmovies = req.body;
            const result = await allMoviesCollection.insertOne(allmovies);
            res.send(result);
        })


        //  movie upload in mongodb 

        app.post('/addMovie', async (req, res) => {
            const upLoaded = req.body;
            const result = await allMoviesCollection.insertOne(upLoaded)
            res.send(result);
          });

        //   all users get 

        app.get('/allUsers', async (req, res) => {
            const result = await allUsers.find({}).toArray();
            res.send(result);
        })



        // all movies get 

        app.get('/allMovie', async (req, res)=>{
            const result = await allMoviesCollection.find({}).toArray();
            res.send(result)
        })


        // delete button  

           app.delete('/allMovie/:id', async (req, res) => {
            const { id } = req.params;

            const deleteId = {_id:ObjectId(id)};
           
            const result = await allMoviesCollection.deleteOne( deleteId );
      
            res.send(result);
          });





        //   update movie ---------------------


        app.put('/updateMovie/:updateId', async (req, res) => {
            const id = req.params.updateId;  
            
      
            const filter = { _id: ObjectId(id) };
            const user = req.body;   
          
            const option = { upsert: true };     
            const updatedMovie = {
              $set: user,
            }      
    
            const result = await allMoviesCollection.updateOne(filter, updatedMovie, option);
   
            res.send(result);
          })









        app.get('/MoviesForYou', async (req, res) => {
            const result = await MoviesForYouCategoriCollection.find({}).toArray();
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