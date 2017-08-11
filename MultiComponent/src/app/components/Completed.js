import React from "react";

export class Completed extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let completedtask = this.props.tasklist;
        let completedtaskItems = completedtask.map((val, i) => {
            
            return (
                <span className="panel panel-success" key={i}>
                    <div className="panel-heading">
                        <h3 className="panel-title" >{val.title}</h3>
                    </div>
                    <br />
                    <div className="panel-body">{val.description}
                        <hr />
                        <p><label>Status:</label><label>{val.status}</label> </p>
                         <hr />
                        <p><label>Subtask:</label></p>
                        <p><label><input type="checkbox" value="" />{val.subtask[0]}</label> </p>
                        <p><label><input type="checkbox" value="" />{val.subtask[1]}</label> </p>
                    </div>
                </span>
            );
        });
        return (
            <div className="panel panel-success">
                <div className="panel-heading">
                    <h3 className="panel-title">Completed</h3>
                </div>
                 <br />
                {completedtaskItems}
                <br />
            </div>
        );
    }
}
