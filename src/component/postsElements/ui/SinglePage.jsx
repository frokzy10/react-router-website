import {Await, Link, useLoaderData, useNavigate} from "react-router-dom";
import {Suspense} from "react";
import {PostsIdEl} from "../PostsShowElId/PostsIdEl";
import {PostsComments} from "../PostsShowElId/PostsComments";

const SinglePage = () => {
    const {post, id, comments} = useLoaderData();
    const navigate = useNavigate();
    const goBack = () => navigate(-1);

    return (
        <div>
            <button onClick={goBack}>Go back</button>
            <Suspense fallback={<h2>Posts is Loading...</h2>}>
                <Await resolve={post}>
                    {(resolvedPost) => (
                        <PostsIdEl post={resolvedPost}/>
                    )}
                </Await>
            </Suspense>
            <Suspense fallback={<h2>Comments is Loading...</h2>}>
                <Await resolve={comments}>
                    {(resolvedComments) => (
                        <PostsComments
                            comments={resolvedComments}
                        />
                    )}
                </Await>
            </Suspense>
            <Link to={`/posts/${id}/edit`}>Редактировать</Link>
        </div>
    );
};

async function getPostsById(id) {
    const res = await fetch(`http://localhost:4500/jsonData/${id}`);
    return res.json();

}

async function getAllComments(id) {
    const res = await fetch(`http://localhost:4500/jsonData/${id}/commentsJson`);
    return res.json();
}

const PostLoader = async ({ params }) => {
    const id = params.id;
    return { post: await getPostsById(id), id, comments: getAllComments(id) };
}

export {SinglePage, PostLoader};
