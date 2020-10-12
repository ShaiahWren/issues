import React from 'react';


const Issue = props => {
    const {issue} = props
    return (
       <>
        <p>{issue.title}</p>
        <a href={issue.url}>{issue.url}</a>
        <p>{issue.body}</p>
       </> 
    )
};

export default Issue;