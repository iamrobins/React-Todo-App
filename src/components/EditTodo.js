import React from 'react';

const EditTodo = props => {
    console.log(props.id);
    return (
        <input
         id="editTodo"
         type="text" 
         placeholder="enter new task"
         onKeyDown= {(e) => { if (e.key === 'Enter') props.editTodoTask(props.id, e.target.value) }} />
    )
}

export default EditTodo;