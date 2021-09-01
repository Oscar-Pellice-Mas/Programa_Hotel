import { useState } from "react";


const NewIssueView = () => {

    // Controlamos y guardamos cada valor del formulario
    let [title, setTitle] = useState('');
    let [priority, setPriority] = useState('');
    let [room, setRoom] = useState('');
    let [description, setDescription] = useState('');
    let [isBusy, setBusy] = useState('');

    let [isPending, setIsPending] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault(); // Evitamos refresh

        const currTime = Date.now();
        const newIssue = {title, room, priority, status: 0, description, isBusy, 
        id_reporter: "94f1bbad-067f-11ec-a416-020000fcbc46", id_hotel: "623fbf6c-067f-11ec-a416-020000fcbc46",
        picture: "urlpic", category: "cat", subcategory: "subcat", date: currTime.toString()}; // Construimos el issue

        const issueSend = {issue: newIssue} // Añadimos la palabra issue: para la peticion
        console.log(newIssue);

        
        fetch('/issues/new', { // Creamos peticion POST
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(issueSend)
        }).then(() => {
            console.log('incidencia creada!'); // TODO Aqui comprobaremos si se ha realizado correctamente
            setIsPending(false);
        });
    }
    // TODO Falta añadir campos y controlar errores

    return ( 
        <div className="flex flex-col">
            <form onSubmit={handleSubmit}>
                <div className="bg-customDarkGrey mx-7 text-3xl h-full flex-row w-1/5 justify-center">
                    <input type="text" class="bg-customDarkGrey py-2 px-4 w-96 outline-none placeholder-gray-300 focus:ring-2 focus:ring-indigo-400 rounded" 
                    placeholder="Nom incidència" 
                    required 
                    value={title}
                    onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div className="bg-customGrey mx-5 my-10 text-xl h-full flex flex-col w-11/12 justify-center p-4">
                    <div className="h-full w-full flex flex-row justify-start">
                        <div className="flex flex-row justify-start content-start">
                            <h2>Prioritat</h2>
                            <select class="bg-customClearGrey mx-3 px-1 w-56 outline-none focus:ring-2 focus:ring-indigo-400 rounded"
                                required
                                value={priority}
                                onChange={(e) => setPriority(e.target.value)}>
                                <option value="" hidden selected disabled>Tria una prioritat</option>
                                <option value="0">No urgent</option>
                                <option value="1">Urgent</option>
                                <option value="2">Molt urgent</option>
                            </select>
                        </div>
                        <div className="flex flex-row justify-start content-start">
                            <h2>Habitació</h2> 
                            <input type="text" class="bg-customClearGrey mx-3 px-1 w-56 outline-none placeholder-gray-600 focus:ring-2 focus:ring-indigo-400 rounded" 
                                placeholder="Número habitació"
                                required
                                value={room}
                                onChange={(e) => setRoom(e.target.value)} />   
                        </div>   
                    </div>
                    <div className="h-full w-full flex flex-col align-start justify-evenly mt-2">
                        <h2>Descripció</h2>
                        <textarea class="bg-customClearGrey px-1 w-full h-full mt-2 outline-none placeholder-gray-600 focus:ring-2 focus:ring-indigo-400 rounded" 
                            rows="8" 
                            placeholder="Introdueix una descripció de la incidència"
                            required
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}></textarea>
                        <div className="flex flex-row mt-3">
                            <h2>Habitació ocupada </h2> 
                            <input type="checkbox" class="bg-customClearGrey m-2 outline-none placeholder-gray-600 focus:ring-2 focus:ring-indigo-400 rounded" 
                                name="Habitació ocupada"
                                required
                                value={isBusy}
                                onChange={(e) => setBusy(e.target.value)} />   
                        </div>   
                        
                    </div>
                
                </div>

                <div className="mx-7 text-3xl h-full flex-row w-min justify-center content-center">
                    { !isPending && <input type="submit" name="roomSubmit" value="Crear incidència" 
                    className="bg-gray-500 py-3 px-10 mt-5 w-min text-xl text-white rounded-xl hover:bg-white hover:text-black" />}
                    { isPending && <input type="submit" name="roomSubmit" value="Creant incidència..." disabled
                    className="bg-gray-500 py-3 px-10 mt-5 w-min text-xl text-white rounded-xl hover:bg-white hover:text-black" />}
                </div>
            </form>
        </div>
     );
}
 
export default NewIssueView;