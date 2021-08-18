import React, { useState } from "react";
import { IssuesList } from './IssuesList';
import { getAllIssues } from '../services/Issues'

export function FetchIsues() {
    const [issues, setIssues] = useState([]);

    getAllIssues().then( data => {
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