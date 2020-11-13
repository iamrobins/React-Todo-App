import React from 'react';
import DisplayTodo from './DisplayTodo';

class AddTodo extends React.Component {

    state = {todos: null}

    componentDidMount() {
        this.setState({todos: this.getTodos()});
    }

    getTodos = () => JSON.parse(localStorage.getItem("todo"));

    addTodo = (event) => {
        let todos = this.state.todos;
        console.log(todos);
        console.log(this.state.todos);
        if(todos) {
            const task = {id: todos.length, task: event.target.value};
            todos.push(task);
            localStorage.setItem("todo", JSON.stringify(todos));
            this.setState({todos: JSON.parse(localStorage.getItem("todo"))});
            event.target.value = "";
        } else {
            const task = {id: 0, task: event.target.value};
            todos = [task];
            localStorage.setItem("todo", JSON.stringify(todos));
            this.setState({todos: JSON.parse(localStorage.getItem("todo"))});
            event.target.value="";
        }
    }


    render() {
        return (
            <div>
            <input 
                type="text" 
                placeholder="Enter Todo" 
                onKeyDown={(e) => { if (e.key === 'Enter') this.addTodo(e) }}
            />
            <DisplayTodo todos={this.state.todos}/>
            </div>
        )
    }
}

export default AddTodo;