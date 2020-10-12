import { React, Component } from 'react';


class IssueList extends Component {
    state = {
        issueData = [],
    }
    loadData = async () => {
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
        const { issueData } = this.state.issueData;
        return (

        );
    }
}

export default IssueList;