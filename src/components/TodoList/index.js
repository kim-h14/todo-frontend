import React from 'react'
import axios from '../../axios';
import { ListContainer, Row, Text, DeleteIcon } from '../TodoList/styles';

function TodoList({ todos, fetchData }) {
  console.log(todos, "Hello");

  const updateTodo = async(id) => {
    try{
      const response = await axios.put(`/todos/${id}`, {
        id,
      });
      fetchData();
      return response.data.json;
    } catch(error) {
      console.error(error.message);
    }
  };

  const deleteTodo = async(id) => {
    try{
      const response = await axios.delete(`/todos/${id}`, {
        id,
      });
      fetchData();
      return response.data.json;
    } catch(error) {
      console.error(error.message);
    }
  };

  return (
    <div>
      <ListContainer>
        {/* Render all Todos in bullet pooints */}
        {todos?.map((todo) => (
            <Row key={todo._id}>
                <Text 
                onClick={() => updateTodo(todo._id)}
                $isCompleted={todo.completed}
                >
                    {todo.text}
                </Text>
                <DeleteIcon onClick={() => deleteTodo(todo._id)}>X</DeleteIcon>
            </Row>
        )
      )}
      </ListContainer>
    </div>
  )
}

export default TodoList