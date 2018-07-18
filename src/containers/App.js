import React from 'react';
import uuid from 'uuid';
import style from '../containers/App.css';
import Title from '../components/Title';
import TodoList from '../components/TodoList';
import TodoForm from '../components/TodoForm';
import ToDo from '../components/Todo';

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [
                {
                    id: 1,
                    text: "Tidy up the room"
                }, {
                    id: 2,
                    text: "Wash the dishes"
                }, {
                    id: 3,
                    text: "Walk the dog"
                }
            ]
        }
    }
    addTodo(e) {
        e.preventDefault();
        const todo = {
            text: this.state.input,
            id: uuid.v4(),
        }
        const data = [...this.state.data, todo]
        this.setState({ data })
    }
    removeTodo(id) {
        const remainder = this.state.data.filter(todo => todo.id !== id)
        this.setState({ data: remainder })
    }
    onChangeHandler(event) {
        let task = event.target.value
        this.setState({ input: task })
        event.preventDefault()
    }
    render() {
        return (
            <div className={style.TodoApp}>
                <Title counter={this.state.data.length} />
                <TodoList items={this.state.data} remove={this.removeTodo.bind(this)} />
                <TodoForm
                    input={this.state.input}
                    fill={this.onChangeHandler.bind(this)}
                    submit={this.addTodo.bind(this)}
                />
            </div>
        )
    }
}

export default App

