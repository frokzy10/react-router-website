import React from 'react';
import {Link} from "react-router-dom";

const NotFound = () => {
    return (
        <div>
            <h2>Эта страница не найдена</h2>
            <br/>
            <p>Перейдите домой</p>
            <Link to="/">Домой</Link>
        </div>
    );
};

export {NotFound};