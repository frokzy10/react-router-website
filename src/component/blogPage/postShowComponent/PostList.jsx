import { Link } from "react-router-dom";

export const PostList = ({ resolvedPosts, postQuery, startsFrom }) => {
    return (
        <>
            {resolvedPosts
                .filter(post =>
                    post.title && post.title.toLowerCase().includes(postQuery.toLowerCase()) && post.id >= startsFrom
                )
                .map(post => (
                    <Link key={post.id} to={`/posts/${post.id}`}>
                        <li>{post.title}</li>
                    </Link>
                ))}
        </>
    );
};
