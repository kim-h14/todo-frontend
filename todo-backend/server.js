const express = require('express');
const mongoose = require('mongoose');
const Cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const { 
  getTodos, 
  createTodo, 
  updateTodo, 
  deleteTodo 
} = require('../todo-backend/controllers/todoController');

// App Config
const app = express();

const port = process.env.PORT || 8000;

const connectionURL = process.env.MONGO_URI;

// Middlewares
// Convert the data into json
app.use(express.json()); 
app.use(Cors());

// DB Config
mongoose.connect(connectionURL)
.then(() => {
  app.listen(port, () => console.log(`Running on port: ${port}`))
})
.catch((error) => 
  {console.log(err)}
);

// API Endpoints
// Get all Todos
app.get('/todos', getTodos);

// Create a new Todo
app.post('/todos', createTodo);

// Update a Todo
app.put('/todos/:id', updateTodo);

// Delete a Todo
app.delete('/todos/:id', deleteTodo);

