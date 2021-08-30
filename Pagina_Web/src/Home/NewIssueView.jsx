import { useState } from "react";

const NewIssueView = () => {

    let [submitState, setSubmitState] = useState(0);

    var buttonStyle = "";
    if(submitState == 1){
        buttonStyle = "bg-customGrey py-3 px-10 mt-5 w-min text-xl text-white rounded-xl";
    } else if (submitState == 2){
        buttonStyle = "bg-customClearGrey py-3 px-10 mt-5 w-min text-xl text-white rounded-xl";
    } else {
        buttonStyle = "bg-gray-500 py-3 px-10 mt-5 w-min text-xl text-white rounded-xl";
    }

    return ( 
        <div className="flex flex-col">
            <form action="" method="post">
                <div className="bg-customDarkGrey mx-7 text-3xl h-full flex-row w-1/5 justify-center">
                    <input type="text" class="bg-customDarkGrey py-2 px-4 w-96 outline-none placeholder-gray-300 focus:ring-2 focus:ring-indigo-400 rounded" placeholder="Nom incidència" />
                </div>
                <div className="bg-customGrey mx-5 my-10 text-xl h-full flex flex-col w-11/12 justify-center p-4">
                    <div className="h-full w-full flex flex-row justify-start">
                        <div className="flex flex-row justify-start content-start">
                            <h2>Prioritat</h2>
                            <select class="bg-customClearGrey mx-3 px-1 w-56 outline-none focus:ring-2 focus:ring-indigo-400 rounded">
                                <option value="0">No urgent</option>
                                <option value="1">Urgent</option>
                                <option value="2">Molt urgent</option>
                            </select>
                        </div>
                        <div className="flex flex-row justify-start content-start">
                            <h2>Habitació</h2> 
                            <input type="text" class="bg-customClearGrey mx-3 px-1 w-56 outline-none placeholder-gray-600 focus:ring-2 focus:ring-indigo-400 rounded" placeholder="Número habitació" />   
                        </div>   
                    </div>
                    <div className="h-full w-full flex flex-col align-start justify-evenly mt-2">
                        <h2>Descripció</h2>
                        <textarea class="bg-customClearGrey px-1 w-full h-full mt-2 outline-none placeholder-gray-600 focus:ring-2 focus:ring-indigo-400 rounded" rows="8" placeholder="Introdueix una descripció de la incidència"></textarea>
                        <div className="flex flex-row mt-3">
                            <h2>Habitació ocupada </h2> 
                            <input type="checkbox" class="bg-customClearGrey m-2 outline-none placeholder-gray-600 focus:ring-2 focus:ring-indigo-400 rounded" name="Habitació ocupada" value="busyRoom"/>   
                        </div>   
                        
                    </div>
                
                </div>

                <div className="mx-7 text-3xl h-full flex-row w-min justify-center content-center">
                    <input type="submit" name="roomSubmit" value="Crear incidència" className={buttonStyle} onMouseEnter={()=>setSubmitState(1)} onMouseOut={()=>setSubmitState(0)} onClick={()=>setSubmitState(2)} />
                </div>
            </form>
            
        </div>
     );
}
 
export default NewIssueView;