import React, {useEffect} from 'react';
import {useLocation, Navigate} from 'react-router-dom'
import {useAuth} from "../hook/UseAuth";

const RouterAuth = ({children}) => {
    const location = useLocation();
    const {user} = useAuth();

    if (!user) {
        return <Navigate to="/login" state={{from: location}}/>
    }

    return children;
};

export {RouterAuth};