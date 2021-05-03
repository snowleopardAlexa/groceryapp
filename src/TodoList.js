import React from 'react';
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import Todo from "./Todo";

function TodoList({ todos, removeTodo, toggleTodo, editTodo }) {
    // we eliminate a design tweak - an empty todo card that is left when there is zero list items
    if (todos.length)
    return (
          <Paper>
              <List>
                  {todos.map((todo, i) => (
                      <>
                      <Todo 
                      // we manually passing  
                      //  id={todo.id}
                      //  task={todo.task} 
                      //  completed={todo.completed} 
                      // so we can just pass {...todo}
                      // id, task, completed will be passed down as individual props
                      {...todo}
                        id={todo.id}
                        task={todo.task} 
                        key={todo.id} 
                        removeTodo={removeTodo}
                        toggleTodo={toggleTodo}
                        editTodo={editTodo}
                      />
                      {/* remove the last divider - a design tweak */}
                      {i < todos.length - 1 && <Divider />}
                    </>
                  ))}
              </List>
          </Paper>
    );
    return null; 
}

export default TodoList;