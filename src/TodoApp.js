import React, { useState } from 'react';
import TodoList from './TodoList.js'
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

function TodoApp() {

  const initialTodos = [
    { id: 1, task: "Bananas", completed: false},
    { id: 2, task: "Lemons", completed: true },
    { id: 3, task: "Apples", completed: false }
  ];

  const [todos, setTodos ] = useState(initialTodos);

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
           <AppBar color='primary'  position='static' style={{ height: "64px" }}>
              <Toolbar>
                  <Typography color='inherit'>Todos with Hooks</Typography>
              </Toolbar>
           </AppBar>
           <TodoList todos={todos} />
       </Paper>
    </div>
  );
}

export default TodoApp;

// todoapp: todoform, todolist, todoitem
