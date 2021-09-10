import useFetch from '../services/Generic'
import { useState, useEffect } from "react";
import IssuesList from './IssuesListHistoric';
import CommentsList from '../Home/CommentsList';

const Historic = () => {
    const { data: issue, isPending, error } = useFetch('/issues');
    const { data: comment, isPending: comPending, error: errCom } = useFetch('/system/comments');
    const [comments, setComments] = useState(null);
    const [issues, setIssues] = useState(null);
    const [doneFetchIss, setDoneFetchIss] = useState(false);
    const [doneFetchCom, setDoneFetchCom] = useState(false);

    useEffect(() => {
        if (!isPending && !error && !doneFetchIss) {
            setIssues(issue?.lead);
            setDoneFetchIss(true);         
        }
        if (!comPending && !errCom && !doneFetchCom){
            setComments(comment?.lead);
            setDoneFetchCom(true); 
        }
    }, [isPending, comPending]);
    return ( 
        <div className="text-xl h-full flex flex-row w-full justify-center">
            <div className="bg-customGrey h-4/5 w-5/12 mx-10 overflow-auto overscroll-none">
                <h2 className="bg-customDarkGrey text-5xl py-5 pl-5 sticky top-0 z-50">Historial</h2>
                { comPending && <p className="pl-3 relative">Loading...</p> }
                { comments && !errCom && <CommentsList comments={ comments }/> }
                { errCom && <p className="pl-3 text-red-700 text-3xl text-center mt-5">Ha ocorregut un error inesperat</p> }
            </div>
            <div className="bg-customGrey h-4/5 w-5/12 mx-10 overflow-auto overscroll-none">
                <h2 className="bg-customDarkGrey text-5xl py-5 pl-5 sticky top-0 z-50">Incidències</h2>
                <div className="py-4 bg-customGrey">
                    { isPending && <p className="pl-3">Loading...</p> }
                    { issues && !error && <IssuesList issues={ issues }/> }
                    { error && <p className="pl-3 text-red-700 text-2xl text-center">Ha ocorregut un error inesperat</p> }
                </div>
            </div>
        </div>
     );
}
 
export default Historic;