import IssuesList from './IssuesList';
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

// var data = [{"issue":{
    //     "id_hotel": "0f1c446d-f92e-11eb-a416-020000fcbc46",
    //     "room": "testRoom4",
    //     "title": "titletest4",
    //     "description": "descriptiontest4",
    //     "picture": "urltest4",
    //     "status": 0,
    //     "id_reporter": "26ac1d7c-f92e-11eb-a416-020000fcbc46",
    //     "category": "cattest4",
    //     "subcategory": "subcategorytest4",
    //     "priority": 0,
    //     "date": "testdate3"
    // }}];
    // postIssue(data).then(console.log("d"));