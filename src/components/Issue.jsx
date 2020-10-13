import React from 'react';
import ReactMarkdown from 'react-markdown';
import { useParams } from 'react-router-dom';

const Issue = props => {
    const {issueData} = props
    const { issue_number } = useParams();
    const issue = issueData.find((issue) => {
        return issue.number === parseInt(issue_number) ? issue : null;
    });

    return (
       <>
        <p>{issue.title}</p>
        <p>{issue.body}</p>
        <ReactMarkdown source={issue.body} escapeHtml={false}/>
       </> 
    )
};

export default Issue;