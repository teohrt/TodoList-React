import React from "react";
import TodoItems from "./TodoItems";

export default class TodoList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            items: []
        };
        
        this.addItem = this.addItem.bind(this);
    }

    addItem(e) {
        if (this._inputElement !== "") {
            var newTask = {
                text: this._inputElement.value,
                key: Date.now()
            };
            this.setState( (prevState) => {
                 return { items: prevState.items.concat(newTask) };
            });
        }

        this._inputElement.value = "";
        e.preventDefault();
        // Makes sure the submit doesn't wipe away changes
        
        console.log(this.state.items);
    }

    render() {
        return (
            <div className="todoListMain">
                <div className="header">
                    <form onSubmit={this.addItem}>
                        <input  ref={(a) => this._inputElement = a} 
                                placeholder="So it shall be written..." />
                        <button type="submit">ADD!</button>
                    </form>
                </div>
                <TodoItems entries={this.state.items}/>
            </div>
        );
    }
}