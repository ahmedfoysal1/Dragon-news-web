import { createBrowserRouter } from "react-router-dom";
import Homelayouts from "../layouts/Homelayouts";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Homelayouts></Homelayouts>
    },
    {
        path: 'news',
        element: <h2>news</h2>
    },
    {
        path: 'login',
        element: <h4>Login</h4>
    },
    {
        path: '*',
        element: <h1>404 Not Found</h1>
    }
])

export default router;