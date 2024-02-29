import { Form } from "react-router-dom";
import classes from "./newPost.module.css";
import { useState } from "react";

const NewPost = ({ submitting }) => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState("");

    const handleTitle = (e) => {
        setTitle(e.target.value);
    }

    const handleBody = (e) => {
        setBody(e.target.value);
    }

    const handleSubmit = (e) => {
        if (!title.trim() || !body.trim()) {
            alert('Введите поле ввода');
            return;
        }
    }

    return (
        <div className={classes.formEdit}>
            <Form action="/posts/new" method="post" className={classes.form} onSubmit={handleSubmit}>
                <label className={classes.NewPostLabel}>Название</label>
                <input value={title} type="text" name="title" onChange={handleTitle} />

                <label className={classes.NewPostLabel}>Описание</label>
                <input value={body} type="text" name="body" onChange={handleBody} />

                <input type="hidden" name="userId" value="1" />
                <input type="submit" value="Add post" disabled={submitting} />
            </Form>
        </div>
    );
};

export default NewPost;
