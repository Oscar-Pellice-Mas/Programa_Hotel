import Line from './Line';

const Comment = ({ comment }) => {
    const {type, comentari, issue} = comment;
    const hour = new Date(issue.createdAt).toLocaleString('en-US', { hour12: false, timeStyle: "short" });
    var content;

    switch (type) {
        case 0:
            content = <p>{hour} Incidència {issue.visual_id}:</p>;//
            break;
        case 1:
            content = <p>{hour} Incidència {issue.visual_id} completada</p>
            break;
        case 2:
            content = <p>{hour} Modificació incidència {issue.visual_id}</p>//
            break;
        case 3:
            content = <p>{hour} Comentari sobre incidència {issue.visual_id}</p>//
            break;
    }

    return (
        <li className="flex flex-row border-l-2 py-1 mx-5 border-black">
            <Line />
            <div className="mx-3 pl-2 text-black">
                {content}
                {type!==1 && <p>{comentari}</p>}
            </div>
        </li>
    );
}

export default Comment;