import React from 'react';
import {useAuth} from "../../hook/UseAuth";
import {redirect, useNavigate, useNavigation} from "react-router-dom";
import NewPost from "./ui/NewPost";

const CreatePost = () => {
    const {signOut} = useAuth();
    const navigate = useNavigate();
    const navigation = useNavigation();
    return (
        <div>
            <h1>Создать пост</h1>
            <NewPost submitting={navigation.state === 'submitting'}/>
            <button onClick={() => signOut(()=> navigate('/',{replace:true}))}>Log Out</button>
        </div>
    );
};

const createPost = async({title,body,userId}) => {
    const res = await fetch('http://localhost:4500/jsonData',{
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({title,body,userId})
    })

    const newPost = await res.json()
    return newPost
}

const createPostAction = async ({request}) => {
    const formData = await request.formData();

    const newPost = {
        title: formData.get('title'),
        body: formData.get('body'),
        userId : formData.get('userId')
    }

    const post = await createPost(newPost);

    return redirect('/posts/' + post.id)
}

export {CreatePost,createPostAction};