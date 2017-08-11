import React from 'react';
import { render } from 'react-dom';

import { Todotask } from "./components/Todotask";
import { Inprogress } from "./components/Inprogress";
import { Completed } from "./components/Completed";

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        let cardsList = [
            {
                //Completed
                id: 1,
                title: " Requirement gathering and analysis.",
                description: " Gather requirement and get document sign off.",
                status: "Completed",
                subtask: [" understand business use case.", " complete feasibility study and document use case."]
            },
            {
                //InProgress
                id: 2,
                title: " Implementation or coding.",
                description: " Analyse requirment and start coding.",
                status: "InProgress",
                subtask: [" create database objects.", " use react to create UI."]
            },
            {
                //in progress
                id: 3,
                title: " Design",
                description: " Design database and UI component.",
                status: "InProgress",
                subtask: [" Design the database.", " Design UI screen."]
            },
            {
                //completed
                id: 4,
                title: " Estimation Shared.",
                description: " Estimation need to shared with client.",
                status: "Completed",
                subtask: [" stimate the effort of development ", " Estimate the effort of testing"]

            },
            {
                //todo
                id: 5,
                title: "Deployment.",
                description: " Create automated builds.",
                status: "todo",
                subtask: [" Document  configuration and license.", " Create a octopus build."]
            },
            {
                //todo
                id: 6,
                title: "Maintenance.",
                description: "Fix the issues and code enhancements.",
                status: "todo",
                subtask: [" Fix the issues", " Analyse the enhancement"]
            }
            
          ];

       
        let tasktodo = cardsList.filter((task) => task.status==='todo');
        let taskinprogress = cardsList.filter((task) => task.status==='InProgress');
        let taskCompleted = cardsList.filter((task) => task.status==='Completed');
        
        return (
            <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            <th><Todotask tasklist={tasktodo} /></th>
                            <th><Inprogress tasklist={taskinprogress} /></th>
                            <th><Completed tasklist={taskCompleted}></Completed></th>
                        </tr>
                    </thead>
                </table>
            </div>
        );
    }
}
render(<App />, window.document.getElementById('app'));