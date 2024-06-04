// create web server and listen to port 3000
// create a route to handle /comments
// and return a json response with a list of comments
// [{ id: 1, author: 'John Doe', text: 'Hello World' }]
// use express to create the server and handle the routes
// use the app.get method to handle the /comments route

const express = require('express');
const app = express();

app.get('/comments', (req, res) => {
  res.json([{ id: 1, author: 'John Doe', text: 'Hello World' }]);
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
