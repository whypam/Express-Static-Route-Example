import express from 'express';

const app = express();
const PORT = 3000;

//Using the public folder at the root (/) of the project
app.use(express.static('public'));

//Using the images folder at the route /images
app.use('/images', express.static('images'));

//Using the videos folder at the route /videos
app.use('/videos', express.static('videos'));

app.listen(PORT, () => {
    console.log(`The server is running on port ${PORT}`)
});
