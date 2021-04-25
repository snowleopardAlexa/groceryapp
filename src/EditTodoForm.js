import React from 'react';
import useInputState from './hooks/useInputState';
import TextField from '@material-ui/core/TextField';

function EditTodoForm({ id, editTodo, task, toggleEditForm }) {
  const [value, handleChange, reset] = useInputState(task);
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      editTodo(id, value);
      reset();
      toggleEditForm();
    }}
      style={{ marginLeft: '1rem', width: '100%' }}
    >
       <TextField 
       margin="normal" 
       value={value}
       onChange={handleChange}
       fullWidth
       // eliminates the need to click on the 
       // input form again to start typing
       // we can start type right away after clicking edit icon
       autoFocus
       />
    </form>
  )
}

export default EditTodoForm;

