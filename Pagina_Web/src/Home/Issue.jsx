const Issue = ({ issue }) => {
    const {title, room, reporter, priority, status, description, visual_id} = issue;

    return (
        <li>
            <div className="mx-3 pl-2 my-1 bg-customDarkGrey text-white">
                <p>Incidència {visual_id}: {title} {room}</p>
            </div>
        </li>
    )
}

export default Issue;