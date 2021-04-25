import React, { useState } from 'react';
import TodoList from './TodoList'
import TodoForm from './TodoForm';
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import uuid from 'uuid/v4';


function TodoApp() {

  const initialTodos = [
    { id: 1, task: "Bananas", completed: false},
    { id: 2, task: "Strawberries", completed: false},
    { id: 3, task: "Lemons", completed: true },
    { id: 4, task: "Apples", completed: false }
  ];

  const [todos, setTodos ] = useState(initialTodos);
  const addTodo = newTodoText => {
    setTodos([...todos, {id: uuid(), task: newTodoText, completed: false }]);
  };

  // remove, we can't use delete because is a reserved keyword for JS
  const removeTodo = todoID => {
  // filter out removed todo
  const updatedTodos = todos.filter(todo => todo.id !== todoID);
  // call setTodos with new todos array
  setTodos(updatedTodos);
  };

  // checkbox
  const toggleTodo = todoId => {
    const updatedTodos = todos.map(todo => 
      todo.id === todoId ? {...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  }

  return (
    <div className="todo">
       <Paper style={{
           padding: 0,
           margin: 0,
           height: "100vh",
           backgroundColor: "#fafafa"
       }}
       elevation={0}
       >
           <AppBar color='secondary' position='static' style={{ height: "64px" }}>
              <Toolbar>
                  <Typography color='inherit'>Todos with Hooks</Typography>
              </Toolbar>
           </AppBar>
           <Grid container justify="center" style={{marginTop: "1rem"}}>
             <Grid item xs={11} md={8} lg={4}>
            <TodoForm addTodo={addTodo} />
            <TodoList
              todos={todos} 
              removeTodo={removeTodo} 
              toggleTodo={toggleTodo}
            />
             </Grid>
           </Grid>
       </Paper>
    </div>
  );
}

export default TodoApp;

// todoapp: todoform, todolist, todoitem
