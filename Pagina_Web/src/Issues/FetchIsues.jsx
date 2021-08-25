import IssuesList from '../Home/IssuesList';
import useFetch from '../services/Generic'

function FetchIsues() {
    const { data: issues, isPending, error } = useFetch('/issues');

    return (
        <div className="issue-list">
            { isPending && <p>Loading...</p> }
            { issues && <IssuesList issues={issues.lead}/> }
        </div>
    );
}

export default FetchIsues;