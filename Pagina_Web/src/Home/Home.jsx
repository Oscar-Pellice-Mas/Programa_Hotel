import useFetch from '../services/Generic'
import { useState, useEffect } from "react";
import IssuesList from './IssuesList';

const Home = () => {
    const { data: issues, isPending, error } = useFetch('/issues');
    const [nU, setnU] = useState(null);
    const [u, setU] = useState(null);
    const [mU, setmU] = useState(null);

    //todo: mirar porque hace 4 veces refresh
    useEffect(() => {
        if (issues) {
            setnU(issues.lead.filter((issue) => issue.priority === 0));
            setU(issues.lead.filter((issue) => issue.priority === 1));
            setmU(issues.lead.filter((issue) => issue.priority === 2));
        }
    }, [issues]);

    return ( 
        <div className="text-xl h-full flex flex-row w-full justify-center">
            <div className="bg-customGrey h-4/5 w-5/12 mx-10">
                <h2 className="bg-customDarkGrey text-5xl py-5 pl-5">Historial</h2>
            </div>
            <div className="bg-customDarkRed h-4/5 w-5/12 mx-10 grid grid-cols-1 grid-rows-3">
                <div className="bg-customClearGrey mx-5 mt-5 mb-2.5">
                    <h3 className="pl-3 pt-3 pb-1.5">Molt Urgent</h3>
                    { isPending && <p className="pl-3">Loading...</p> }
                    { mU && <IssuesList issues={ mU }/> }
                </div>
                <div className="bg-customClearGrey mx-5 my-2.5">
                    <h3 className="pl-3 pt-3 pb-1.5">Urgent</h3>
                    { isPending && <p className="pl-3">Loading...</p> }
                    { u && <IssuesList issues={ u }/> }
                </div>
                <div className="bg-customClearGrey mx-5 mb-5 mt-2.5">
                    <h3 className="pl-3 pt-3 pb-1.5">No Urgent</h3>
                    { isPending && <p className="pl-3">Loading...</p> }
                    { nU && <IssuesList issues={ nU }/> }
                </div>
            </div>
        </div>
     );
}
 
export default Home;