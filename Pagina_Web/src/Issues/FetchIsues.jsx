import React, { useState } from "react";
import { IssuesList } from './IssuesList'

export function FetchIsues() {
    const [issues, setIssues] = useState([]);
    var data = [];

    async function componentDidMount() {
        const url = "/issues";
        const response = await fetch(url);
        data = await response.json();
    }

    componentDidMount().then( res => {
        if (!issues.length) {
            setIssues((prevIssues) => {
                return[...prevIssues, data]
            });
        }
    });
    if (!issues.length) {
        return <p>Loading...</p>
    } else {
        return <IssuesList issues={issues}/>;
    }
}