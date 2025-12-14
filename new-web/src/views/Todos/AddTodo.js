import React from "react";
import { toast } from "react-toastify";


class AddTodo extends React.Component {
    state = {
        title: ''
    }

    handleOnchangeTitle = (e) => {
        this.setState({
            title: e.target.value
        })
    }
    handleAddTodo = () => {
        if (!this.state.title) {
            toast.error("Empty todo not allowed!");
            return;
        }
        let todo = {
            id: Math.floor(Math.random() * 1001) + '-todo',
            title: this.state.title
        }
        this.props.addNewTodo(todo);
        this.setState({
            title: ''
        })
    }
    render() {
        let { title } = this.state;
        return (
            <div className="add-todo">
                <input type="text" value={title}
                    onChange={(e) => this.handleOnchangeTitle(e)} />
                <button type="button" className="add" onClick={() => this.handleAddTodo()}>
                    Add</button>
            </div>
        )
    }
}

export default AddTodo
