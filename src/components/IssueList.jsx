import React, { useEffect, useState} from 'react';
import {Route, Link } from 'react-router-dom';
import { loadData } from "../utils/loadData";

import Issue from './Issue';
import './IssueList.css';

const IssueList = props => {
   const [issueData, setIssues] = useState([]);

   useEffect(() => {
    (async function() {
        const response = await fetch("https://api.github.com/repos/facebook/create-react-app/issues");
        const issueData = await response.json();
        console.log("The data is: ", data)
        setIssues(issueData);
    })();
   }, [setIssues])

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
                                <Link to={`/issue/${issue.number}`}>View Details</Link>
                            </li>);
                    })}
                </ul>
            </Route>
            <Route path={`/issue/:issue_number`}>
                <Link to="/">Return to Issue List</Link>
                <Issue issueData={issueData} />
            </Route>
        </>
        ) : (
            <p>Fetching issues ...</p>
        )}
    </>
   
);
}

// class IssueList extends Component {

//     state = {
//         issueData: [],
//     }
//     async loadData() {
//         const response = await fetch("https://api.github.com/repos/facebook/create-react-app/issues");
//         const data = await response.json();
//         console.log("The data is: ", data)
//         return data;
//     }

//     async componentDidMount() {
//         const issueData = await this.loadData();
//          this.setState({
//              issueData: issueData,
//          });
//     }
//     render() {
//         const { issueData } = this.state;
//         console.log("Issue data: ", issueData);

        
//     }
// }

export default IssueList;