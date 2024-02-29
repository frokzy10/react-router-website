import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom";
import {Layout} from "../component/layout/ui/Layout";
import {HomePage} from "../component/HomePage";
import {About} from "../component/About";
import {BlogLoader, BlogPage} from "../component/blogPage/ui/BlogPage";
import {PostLoader, SinglePage} from "../component/postsElements/ui/SinglePage";
import {EditPost, updatePostAction} from "../component/updatePosts/EditPost";
import {RouterAuth} from "./RouterAuth";
import {CreatePost, createPostAction} from "../component/newPost/CreatePost";
import {LoginPage} from "../component/loginPage/ui/LoginPage";
import {NotFound} from "../component/NotFound";
import ErrorPage from "../component/errorPage/ui/ErrorPage";

const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
        <Route index element={<HomePage/>}/>
        <Route path="about/*" element={<About/>}>
            <Route path="contacts" element={<p>Our contacts</p>}/>
            <Route path="team" element={<p>Our team</p>}/>
        </Route>
        <Route path="posts" element={<BlogPage/>} loader={BlogLoader} errorElement={<ErrorPage/>}/>
        <Route path="posts/:id" element={<SinglePage/>} loader={PostLoader} />
        <Route path="posts/:id/edit" element={<EditPost/>} loader={PostLoader} action={updatePostAction}/>
        <Route path="posts/new" element={
            <RouterAuth>
                <CreatePost/>
            </RouterAuth>
        } action={createPostAction}/>
        <Route path="login" element={<LoginPage/>}/>
        <Route path="*" element={<NotFound/>}/>
    </Route>
))

export default router;