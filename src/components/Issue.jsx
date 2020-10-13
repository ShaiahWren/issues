import React from 'react';


const Issue = props => {
    const {issue} = props
    return (
       <>
        <p>{issue.title}</p>
        <p><a href={issue.url}>{issue.url}</a></p>
        <p>{issue.body}</p>
       </> 
    )
};

export default Issue;