const CommentsList = ({ comments }) => {

    const renderedComments = comments.map((comment) => {
        let content;

        if (comment.status === "Pending") {
            content = "Comment status is pending"
        } else if (comment.status === "Rejected") {
            content = "Comment status is Rejected"
        } else {
            content = comment.content
        }

        return <li key={comment.id}> {content} </li>

    });

    return <ul>
        {renderedComments}
    </ul>
}

export default CommentsList;