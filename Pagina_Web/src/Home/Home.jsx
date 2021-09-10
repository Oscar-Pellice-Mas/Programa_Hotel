import useFetch from '../services/Generic'
import { useState, useEffect } from "react";
import { useHistory } from "react-router";
import IssuesList from './IssuesList';
import CommentsList from './CommentsList';

const Home = () => {
    const history = useHistory();
    const { data: issues, isPending, error } = useFetch('/issues');
    const { data: comment, isPending: comPending, error: errCom } = useFetch('/system/comments');
    const [nU, setnU] = useState(null);
    const [u, setU] = useState(null);
    const [mU, setmU] = useState(null);
    const [comments, setComments] = useState(null);
    const [doneFetchIss, setDoneFetchIss] = useState(false);
    const [doneFetchCom, setDoneFetchCom] = useState(false);

    useEffect(() => {
        if (!isPending && !error && !doneFetchIss) {
            setnU(issues?.lead.filter((issue) => issue.priority === 0));
            setU(issues?.lead.filter((issue) => issue.priority === 1));
            setmU(issues?.lead.filter((issue) => issue.priority === 2));
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
            <div className="bg-customDarkRed h-4/5 w-5/12 mx-10 grid grid-cols-1 grid-rows-3">
                <div className="bg-customClearGrey mx-5 mt-5 mb-2.5 overflow-auto overscroll-none">
                    <h3 className="pl-3 pt-3 pb-1.5">Molt Urgent</h3>
                    { isPending && <p className="pl-3">Loading...</p> }
                    { mU && !error && <IssuesList issues={ mU }/> }
                    { error && <p className="pl-3 text-red-700 text-2xl text-center">Ha ocorregut un error inesperat</p> }
                </div>
                <div className="bg-customClearGrey mx-5 my-2.5 overflow-auto overscroll-none">
                    <h3 className="pl-3 pt-3 pb-1.5">Urgent</h3>
                    { isPending && <p className="pl-3">Loading...</p> }
                    { u && !error && <IssuesList issues={ u }/> }
                    { error && <p className="pl-3 text-red-700 text-2xl text-center">Ha ocorregut un error inesperat</p> }
                </div>
                <div className="bg-customClearGrey mx-5 mb-5 mt-2.5 overflow-auto overscroll-none">
                    <h3 className="pl-3 pt-3 pb-1.5">No Urgent</h3>
                    { isPending && <p className="pl-3">Loading...</p> }
                    { nU && !error && <IssuesList issues={ nU }/> }
                    { error && <p className="pl-3 text-red-700 text-2xl text-center">Ha ocorregut un error inesperat</p> }
                </div>
            </div>
        </div>
     );
}
 
export default Home;