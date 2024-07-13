import React, { useEffect, useState } from 'react';
import axios from '../../axios';
import { Container } from '../styles';
import Form from '../Form';
import TodoList from '../TodoList';
import Key from '../Key';
import Author from '../Author';


function Todo() {
  const [input, setInput] = useState('');
  // Create an array of the todos
  const [todos, setTodos] = useState([]);


  const fetchData = async () => {
    try {
      // Fetch the todos from the database
      const response = await axios.get('/todos');
      setTodos(response.data);
    } catch (error) {
      console.log(error.message);
    }
  }

  // Fetch the todos from the database
  useEffect(() => {
    fetchData();
  }, []);


  const addTodo = async (e) => {
    e.preventDefault();
    // Guard clause to prevent adding empty todos
    if (input.length === 0) return null;
    // Add the new todo to the database
    await axios.post('/todos', [{
      // Spread the data in - Add the existing todos into the body
      ...todos,
      // Add the new todo
      text: input,
      completed: false
    }])
    fetchData();
    setInput('');
  };

  return (
    <Container><h2>List of Todos</h2>
    {/* Form component */}
    <Form input={input} setInput={setInput} addTodo={addTodo}/>
    {/* TodoList */}
    <TodoList todos={todos} fetchData={fetchData} />
    {/* Key component */}
    <Key/>
    {/* Author */}
    <Author/>
    </Container>
  )
}

export default Todo