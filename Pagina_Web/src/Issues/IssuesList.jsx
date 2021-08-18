import React from 'react'
import { Issue } from './Issue'

export function IssuesList({ issues }) {
    if (typeof issues[0] == 'undefined') return <ul></ul>

    return (
        <ul>
            {issues[0].lead.map((newIssue) => (
                <Issue key={newIssue.id} issue={newIssue}/>
            ))}
        </ul>
    )
}
