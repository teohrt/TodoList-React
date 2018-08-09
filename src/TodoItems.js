import React from 'react';
import FlipMove from 'react-flip-move';

export default class TodoItems extends React.Component {
    constructor(props) {
        super(props);

        this.createTasks = this.createTasks.bind(this);

    }

    createTasks(item) {
        return <li onClick={() => this.delete(item.key)}
                    key={item.key}>{item.text}</li>
    }

    delete(key) {
        this.props.delete(key);
    }

    render() {
        var todoEntries = this.props.entries;
        var listItems = todoEntries.map(this.createTasks);
        
        return (
            <ul className="ItemList">
                <FlipMove duration={200} easing="ease-out">
                    {listItems}
                </FlipMove>
            </ul>
        );
    }
}