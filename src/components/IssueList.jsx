import React, {Component} from 'react';
import {Route, Link } from 'react-router-dom';

import Issue from './Issue';
import './IssueList.css';


class IssueList extends Component {

    state = {
        issueData: [],
    }
    async loadData() {
        const response = await fetch("https://api.github.com/repos/facebook/create-react-app/issues");
        const data = await response.json();
        console.log("The data is: ", data)
        return data;
    }

    async componentDidMount() {
        const issueData = await this.loadData();
         this.setState({
             issueData: issueData,
         });
    }
    render() {
        const { issueData } = this.state;
        console.log("Issue data: ", issueData);

        return (
            <>
            {!!issueData.length ? (
                <>
                    <h1>GiHub Issues List</h1>
                    <Route exact path ="/">
                        <ul>
                            {issueData.map((issue) => {
                                return (
                                    <li key={issue.id}>
                                        {issue.title}
                                        <a href={`/issue/${issue.number}`}>View Details</a>
                                    </li>);
                            })}
                        </ul>
                    </Route>
                    <Route path={`/issue/:issue_number`}>
                        <h2>This will be an issue</h2>
                    </Route>
                </>
                ) : (
                    <p>Fetching issues ...</p>
                )}
            </>
           
        );
    }
}

export default IssueList;