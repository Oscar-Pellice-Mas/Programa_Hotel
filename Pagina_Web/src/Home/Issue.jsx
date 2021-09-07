const Issue = ({ issue }) => {
    const {title, room, reporter, priority, status, description, visual_id} = issue;

    return (
        <li>
            <div className="mx-3 pl-2 my-1 bg-customDarkGrey text-white flex flex-row items-center justify-between">
                <p>Incidència {visual_id}: {title} a la habitació {room}</p>
                <button className="bg-customClearGrey p-1 m-1 w-1/5 rounded">Editar</button>
            </div>
        </li>
    )
}

export default Issue;