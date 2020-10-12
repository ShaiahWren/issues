import React, {Component} from 'react';

import Issue from './Issue';


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
                <div>
                    {
                        issueData.map((issue, index) => (
                            <ul>
                                <li key={issue.id}><Issue issue = {issue} /></li>
                            </ul>
                        ))
                    }
                </div>
            </>
           
        );
    }
}

export default IssueList;