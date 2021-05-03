// it is not about re-using the content, it is simplification of the TodoApp.js
// we migrate all hook functions here
import useLocalStorageState from './useLocalStorageState';
import uuid from 'uuid/v4';

export default initialTodos => {
    // we use one custom hook inside another custom hook
    const [todos, setTodos] = useLocalStorageState("todos", initialTodos);
    return {
        todos,
        addTodo: newTodoText => {
            setTodos([...todos, {id: uuid(), task: newTodoText, completed: false }]);
        },
        removeTodo: todoID => {
            // filter out removed todo
            const updatedTodos = todos.filter(todo => todo.id !== todoID);
            // call setTodos with new todos array
            setTodos(updatedTodos);
        },
        toggleTodo: todoId => {
            const updatedTodos = todos.map(todo => 
              todo.id === todoId ? {...todo, completed: !todo.completed } : todo
            );
            setTodos(updatedTodos);
        },   
        editTodo: (todoId, newTask) => {
            const updatedTodos = todos.map(todo => 
              todo.id === todoId ? { ...todo, task: newTask } : todo
              );
              setTodos(updatedTodos);
            }
         };
      };
    
