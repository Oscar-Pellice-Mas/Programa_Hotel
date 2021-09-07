import Comment from './Comment'

const CommentsList = ({ comments }) => {
    if (typeof comments == 'undefined') return <ul></ul>

    return (
        <ul className="relative">
            {comments.map((comment) => (
                <Comment key={comment.id} comment={comment}/>
            ))}
        </ul>
    )
}

export default CommentsList;