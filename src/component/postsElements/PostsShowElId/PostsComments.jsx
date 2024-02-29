export const PostsComments = ({ comments }) => {
    return (
        <div>
            <h2>Comments</h2>
            {comments.map(com => (
                <div key={com.id}>
                    <h3>{com.email}</h3>
                    <h4>{com.name}</h4>
                    <p>{com.body}</p>
                </div>
            ))}
        </div>
    );
};
