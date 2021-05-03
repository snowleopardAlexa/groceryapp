import React, { useEffect } from 'react';
import useTodoState from './hooks/useTodoState';
import TodoList from './TodoList'
import TodoForm from './TodoForm';
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";

function TodoApp() {
  // when we add a list item and refresh the page, the list item does not disappear
  // instead of array of objects 
  const initialTodos = [{id: 1, task: "Pet a Cat", completed: false }];
  const {todos, addTodo, removeTodo, toggleTodo, editTodo} = useTodoState(initialTodos);

 // const initialTodos = [
 //   { id: 1, task: "Bananas", completed: false},
 //   { id: 2, task: "Strawberries", completed: false},
 //   { id: 3, task: "Lemons", completed: true },
 //   { id: 4, task: "Apples", completed: false }
 //  ];

  // when we add a list item and refresh the page, the list item does not disappear
  // it runs when every time the component rerenders. 
  // useEffect(() => {
  //  window.localStorage.setItem("todos", JSON.stringify(todos));
  // }, [todos]); --> WE SENT THIS PIECE OF CODE TO useLocalStorageState.js

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
              editTodo={editTodo}
            />
             </Grid>
           </Grid>
       </Paper>
    </div>
  );
}

export default TodoApp;

// todoapp: todoform, todolist, todoitem
