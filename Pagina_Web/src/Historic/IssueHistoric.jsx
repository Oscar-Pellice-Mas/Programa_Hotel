const Issue = ({ issue }) => {
    const {title, room, reporter, priority, status, description, visual_id} = issue;

    return (
        <li>
            <div className="mx-5 my-4 bg-customDarkGrey flex flex-col">
                <p className="pl-2 bg-customClearGrey">Incidència {visual_id}: {title} a la habitació {room}</p>
                <p className="pl-2 overflow-auto overscroll-none">{description}</p>
            </div>
        </li>
    )
}

export default Issue;