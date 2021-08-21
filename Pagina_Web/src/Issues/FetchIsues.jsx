import { useState } from "react";
import IssuesList from './IssuesList';
import { getAllIssues, postIssue } from '../services/Issues'

function FetchIsues() {
    const [issues, setIssues] = useState([]);

    getAllIssues().then( data => {
        if (!issues.length) {
            setIssues((prevIssues) => {
                return[...prevIssues, data]
            });
        }
    });

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

    if (!issues.length) {
        return <p>Loading...</p>
    } else {
        return <IssuesList issues={issues}/>;
    }
}

export default FetchIsues;