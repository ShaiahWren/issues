import React from 'react';


const Issue = props => {
    const {issue} = props
    return (
       <>
        <p>{issue.title}</p>
        <p>{issue.url}</p>
        <p>{issue.body}</p>
       </> 
    )
};

export default Issue;