import React from 'react';
import classes from "./updatePosts.module.css"
import {Form} from "react-router-dom";

const UpdatePosts = ({id, title, body, userId, submitting}) => {
    return (
        <>
            <div className={classes.formEdit}>
                <Form className={classes.form
                } action={`/posts/${id}/edit`} method="post">
                    <label>Название поста</label>
                    <input type="text" name="title" defaultValue={title}/>

                    <label>Описание</label>
                    <input type="text" name="body" defaultValue={body}/>

                    <input type="hidden" name="userId" value={userId}/>
                    <input type="hidden" name="id" value={id}/>

                    <input type="submit" value="Add post" disabled={submitting}/>
                </Form>
            </div>
        </>
    );
};

export default UpdatePosts;