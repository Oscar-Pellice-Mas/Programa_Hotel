import Issue from './Issue'

const IssuesList = ({ issues }) => {
    if (typeof issues == 'undefined') return <ul></ul>

    return (
        <ul>
            {issues.map((newIssue) => (
                <Issue key={newIssue.id} issue={newIssue}/>
            ))}
        </ul>
    )
}

export default IssuesList;