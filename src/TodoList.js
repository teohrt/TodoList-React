import React from "react";

export default class TodoList extends React.Component {
    render() {
        return (
            <div className="todoListMain">
                <div className="header">
                    <form>
                        <input placeholder="So it shall be written..." />
                        <button type="submit">ADD!</button>
                    </form>
                </div>
            </div>
        );
    }
}