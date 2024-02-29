import React from 'react';
import {Link, Outlet} from "react-router-dom";

const About = () => {
    return (
        <div>
            <h2>О нас </h2>
            <p>Эта страница о нас</p>
            <div>
                <ul>
                    <li><Link to="contacts">контакты</Link></li>
                    <li><Link to="team">Команда</Link></li>
                </ul>
            </div>
            <Outlet/>
        </div>
    );
};

export {About};