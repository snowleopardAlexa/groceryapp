import React from 'react';
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";

function Todo({task, completed}) {
    return (
        <ListItem>
            <Checkbox tabIndex={-1} checked={completed} />
            <ListItemText
              style={{ textDecoration: completed ? "line-through" : "none "}}
            >
               {task}
            </ListItemText>
            <ListItemSecondaryAction>
                <DeleteIcon aria-label='Delete' style={{padding: "5px"}}/> 
                <EditIcon aria-label='Edit' style={{padding: "5px"}} />
            </ListItemSecondaryAction>
        </ListItem>
    );
}

export default Todo;