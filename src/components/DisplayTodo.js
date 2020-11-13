import React from 'react';
import EditTodo from './EditTodo';

class DisplayTodo extends React.Component {

    renderTodos = () => {
        console.log(this.props.todos);
        if(this.props.todos === undefined)
            return null;
        
        return this.props.todos.map((task) => {
            return (
                <div key={task.id}>
                    <p id="taskContainer">
                        { this.props.edit === task.id
                          ? <> <EditTodo id={task.id} editTodoTask = {this.props.editTodoTask}/> </>
                          : <> {task.task}
                           <div id="taskButtons"> 
                            <button id="editBtn" onClick={ () => this.props.editTodo(task.id) }><i class="far fa-edit"></i></button>
                            <button id="deleteBtn" onClick={ () => this.props.deleteTodo(task.id) }><i class="far fa-trash-alt"></i></button>
                          </div>
                          </>
                        }
                    </p>
                </div>
            )
        })
    }

    render() {
        return (
            <div>
                {this.renderTodos()}
            </div>
        )
    }
};

export default DisplayTodo;