import React from "react";


export class Todotask extends React.Component {
    constructor(props, context) {
        super(props, context);

    }
    render() {
        let currentTask = this.props.tasklist;

        let taskItems = currentTask.map((val, i) => {
            console.log(i);
            /// console.log(val.title);
            console.log(val.description);
            // console.log(val.status);
            // console.log(val.subtask[0]);
            // console.log(val.subtask[1]);
            return (
                <span className="panel panel-danger" key={i}>
                    <div className="panel-heading">
                        <h3 className="panel-title" >{val.title}</h3>
                    </div>
                    <br />
                    <div className="panel-body">{val.description}
                        <hr />
                        <p><label>Status:</label><label>{val.status}</label></p>
                        <hr />
                        <p><label>Subtask:</label></p>
                        <p><label><input type="checkbox" value="" />{val.subtask[0]}</label></p>
                        <p><label><input type="checkbox" value="" />{val.subtask[1]}</label></p>
                    </div>

                </span>
            );
        });
        return (
            <div className="panel panel-danger">
                <div className="panel-heading">
                    <h3 className="panel-title">To Do</h3>
                </div>
                <br />
                {taskItems}
                <br />
            </div>
        );
    }
}
