import React from 'react';
import DisplayTodo from './DisplayTodo';

class AddTodo extends React.Component {

    constructor() {
        super();
        this.state = {todos: [], edit: null}
        if(JSON.parse(localStorage.getItem("todo") === null))
            localStorage.setItem("todo", JSON.stringify([]));
    }
    
    componentDidMount() {
        this.loadTodos();
    }

    loadTodos = () => {
        const loadTodos = JSON.parse(localStorage.getItem("todo"));
        if(loadTodos === null)
            this.setState({todos: []});
        this.setState({todos: loadTodos});
    }

    addTodo = event => {
        let todos = this.state.todos;
        if(todos.length>0) {
            todos.push({id: (todos[todos.length-1].id+1), task: event.target.value});
            this.setState({todos: todos});
            event.target.value = "";
            localStorage.setItem("todo", JSON.stringify(todos));
        } else {
            todos = [{id: 0, task: event.target.value}];
            this.setState({todos: todos});
            localStorage.setItem("todo", JSON.stringify(todos));
            event.target.value="";
        }
    }

    editTodo = id => {
        this.setState({edit: id});
    }

    deleteTodo = id => {
        const newTodo  = this.state.todos.filter(todo => todo.id !== id);
        this.setState({todos: newTodo});
        localStorage.setItem("todo", JSON.stringify(newTodo));
    }

    editTodoTask = (id, newTask) => {
        // console.log(this.state.todos);
        const newTodo = this.state.todos;
        for(let i = 0; i<newTodo.length; i++) {
            if(newTodo[i].id === id)
                newTodo[i].task = newTask;
        }
        // console.log(newTodo);
        this.setState({todos: newTodo});
        this.setState({edit: null});
        localStorage.setItem("todo", JSON.stringify(newTodo));
    }

    render() {
        return (
            <div>
            <input id="addTodo"
                type="text" 
                placeholder="Enter Todo" 
                onKeyDown={(e) => { if (e.key === 'Enter' && e.target.value != '') this.addTodo(e) }}
            />
            <DisplayTodo todos={this.state.todos} editTodo={this.editTodo} deleteTodo={this.deleteTodo} edit={this.state.edit} editTodoTask={this.editTodoTask}/>
            </div>
        )
    }
}

export default AddTodo;