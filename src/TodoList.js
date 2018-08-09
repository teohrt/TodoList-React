import './TodoList.css';
import React from 'react';
import TodoItems from './TodoItems';

export default class TodoList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            items: []
        };
        
        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
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
        
        // Makes sure the submit doesn't wipe away changes
        e.preventDefault();
    }

    deleteItem(key) {
        var filteredItems = this.state.items.filter(function (item) {
            return (item.key !== key)
        });

        this.setState({ items: filteredItems });
    }

    render() {
        return (
            <div className="todoListMain">
                <div className="header">
                    <form onSubmit={this.addItem}>
                        <input  ref={(a) => this._inputElement = a} 
                                placeholder="enter todo" />
                        <button type="submit">add</button>
                    </form>
                </div>
                <TodoItems delete={this.deleteItem}
                            entries={this.state.items}/>
            </div>
        );
    }
}