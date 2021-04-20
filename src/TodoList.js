import React from 'react';
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

function TodoList(props) {
    return (
        <div>
          <Paper>
              <List>
                  {props.todos.map(todo => (
                      <>
                      <ListItem>
                          <ListItemText>{todo.task}</ListItemText>
                      </ListItem>
                      <Divider />
                      </>
                  ))}
              </List>
          </Paper>
        </div>
    )
}

export default TodoList;