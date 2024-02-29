import React from 'react';
import {useLocation, useNavigate} from "react-router-dom";
import {useAuth} from "../../../hook/UseAuth";
import loginPageClasses from "./loginpage.module.css"

const LoginPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const {signIn} = useAuth();

    const fromPage = location.state?.from?.pathname || '/';

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const user = form.username.value;

        if(!user.trim()){
            alert("Введите имя")
            return;
        }

        signIn(user, () => navigate(fromPage, {replace: true}));
    }

    return (
        <>
        <div className={loginPageClasses.formContainer}>
            <form className={loginPageClasses.formLogin} onSubmit={handleSubmit}>
                <h2 className={loginPageClasses.loginTitle}>Войдите чтобы редактировать пост</h2>
                <label className={loginPageClasses.labelLogin}>Ваше имя</label>
                    <input className={loginPageClasses.loginInput} name="username" type="text"/>
                <button className={loginPageClasses.loginBtn} type={"submit"}>Login</button>
            </form>
        </div>
        </>
    );
};

export {LoginPage};
