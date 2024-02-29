import {Await, Link, useLoaderData, useSearchParams} from "react-router-dom";
import {BlogFilter} from "../../blogFilter/ui/BlogFilter";
import {Suspense} from "react";
import {PostList} from "../postShowComponent/PostList";
import classes from "./blogpage.module.css"

const BlogPage = () => {
    const {posts} = useLoaderData()
    const [searchParams, setSearchParams] = useSearchParams();
    const postQuery = searchParams.get('post') || '';

    const latest = searchParams.has('latest');
    const startsFrom = latest ? 80 : 1;

    return (<>
        <h2>Блог</h2>
        <BlogFilter postQuery={postQuery} latest={latest} setSearchParams={setSearchParams}/>

        <Suspense fallback={<h2 style={{textAlign: "center"}}>Loading...</h2>}>
            <Await resolve={posts}>
                {(resolvedPosts) => (
                    <PostList
                        resolvedPosts={resolvedPosts}
                        postQuery={postQuery}
                        startsFrom={startsFrom}
                    />
                )}
            </Await>
        </Suspense>
        <nav>
            <ul className={classes.blogContainerLink}>
                <li><Link to="/posts/new">Добавить блог</Link></li>
            </ul>
        </nav>
    </>);
};

async function getPosts() {
    const response = await fetch('http://localhost:4500/jsonData');
    return response.json();
}

const BlogLoader = async () => {
    const posts = getPosts()
    return {posts}
}

export {BlogPage, BlogLoader};