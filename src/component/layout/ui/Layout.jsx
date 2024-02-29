import React from 'react';
import {Outlet} from "react-router-dom";
import {CustomLink} from "../../../configs/LinkConfig/CustomLink";



const Layout = () => {
    return (
        <>
            <header>
                <CustomLink to="/">Home</CustomLink>
                <CustomLink to="/posts">Blog</CustomLink>
                <CustomLink to="/about" >About</CustomLink>
            </header>

            <main className="container">
                <Outlet/>
            </main>

            <footer className="container footer">
                footer
            </footer>
        </>
    );
};

export {Layout};