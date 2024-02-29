import {RouterProvider} from "react-router-dom";
import "./App.css"
import {AuthProvider} from "./hoc/AuthProvider"
import router from "./hoc/router"

export default function App() {
    return (
        <AuthProvider>
            <RouterProvider router={router}/>
        </AuthProvider>
    );
}