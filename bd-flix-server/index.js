const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const express = require('express');
const app = express();
const cors = require('cors');
const port = 5000;
require('dotenv').config();

//implement jwt token
const jwt = require('jsonwebtoken')

app.use(cors());
app.use(express.json());


//firebase*************************************************

const multer = require('multer');
const upload = multer();
const firebase = require('firebase-admin');
const credentials = require('./bdflix-f2281-firebase-adminsdk-kif2f-1e3bc57c48.json');

const firebaseConfig = {
    apiKey: "AIzaSyC6rov5IQ_uuDeY_DRnHhSADgnb3XoukL8",
    authDomain: "bdflix-f2281.firebaseapp.com",
    projectId: "bdflix-f2281",
    storageBucket: "bdflix-f2281.appspot.com",
    messagingSenderId: "259794146141",
    appId: "1:259794146141:web:bab53915941d9a79830eb4"
};

firebase.initializeApp({
    credential: firebase.credential.cert(credentials),
    storageBucket: "gs://bdflix-f2281.appspot.com",
});

const db = firebase.firestore();
// const person = db.collection("person");
const bucket = firebase.storage()


app.post('/upload-video', upload.single('video'), async (req, res) => {
    // Get the video file from the request
    const videoFile = req.file;

    // Create a unique name for the video file
    const videoName = `${Date.now()}_${videoFile.originalname}`;

    // Create a reference to the video file in Firebase Storage
    const videoRef = storage.ref().child(`videos/${videoName}`);

    // Upload the video file to Firebase Storage
    const snapshot = await videoRef.put(videoFile.buffer);

    // Get the download URL of the video file
    const downloadURL = await snapshot.ref.getDownloadURL();

    // Connect to Firestore
    const db = firebase.firestore();
    // Add the download URL of the video in the firestore collection
    db.collection('videos').add({ downloadURL, name: videoName })
        .then(() => {
            // Send a response indicating that the video was successfully uploaded
            res.send({ message: 'Video uploaded successfully' });
        })
        .catch(error => {
            // Send an error response if there was a problem uploading the video
            res.status(500).send({ error });
        });
});
// db.collection('videos').add({ downloadURL, name: videoName })

app.post('/uploadVideo', upload.single("filename"), (req, res) => {
    const storageRef = ref(storage, req.file.originalname);
    const metadata = {
        contentType: 'video/mp4'
    };
    uploadBytes(storageRef, req.file.buffer, metadata)

        .then(() => {
            // console.log("file uploaded");
            getDownloadURL(storageRef).then(url => {
                // console.log(`Download URL: ${url}`);

                res.send({ url });
            });
        })
        .catch(error => {
            console.error(error);
            res.status(500).send(error);
        });
});





//firebase*************************************************

app.get('/', (req, res) => {
    res.send('hello');
})


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.ac1kfa5.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run() {
    try {

        const ComediesCollection = client.db("bdFlix").collection("comedies");
        const allMoviesCollection = client.db("bdFlix").collection("allmovies");
        const allUsers = client.db("bdFlix").collection("user");

        //user collection
        const usersCollection = client.db("bdFlix").collection("user");


        app.get('/mostPopularMovies', async (req, res) => {
            const result = await MostPopularMoviesCategoriCollection.find().toArray();
            res.send(result);
        })

        app.get('/allsearch', async (req, res) => {
            const result = await allMoviesCollection.find().toArray();
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

        app.get('/allMovie', async (req, res) => {
            const result = await allMoviesCollection.find({}).toArray();
            res.send(result)
        })


        // delete button  

        app.delete('/allMovie/:id', async (req, res) => {
            const { id } = req.params;

            const deleteId = { _id: ObjectId(id) };

            const result = await allMoviesCollection.deleteOne(deleteId);

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
            const result = await MoviesForYouCategoriCollection.find().toArray();
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

        //save user email and generate JWT token
        app.put('/user/:email', async (req, res) => {
            const email = req.params.email
            const user = req.body
            const filter = { email: email }
            const options = { upsert: true }
            const updateDoc = {
                $set: user,
            }
            const result = await usersCollection.updateOne(filter, updateDoc, options)
            console.log(result)

            const token = jwt.sign(user, process.env.ACCESS_TOKEN,
                { expiresIn: '1d' })
            console.log(token);
            res.send({ result, token })
        })

    }


    finally { }
}
run().catch(console.dir);

app.listen(port, () => {
    console.log(`listening on ${port}`);
})
