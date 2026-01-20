import express from 'express';

// port number for server listener
const PORT = 3000;

// create express application
const app = express();

// root path
app.get('/', (req, res) => {
    // send to client
    res.send('hello world');
});

// start server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});