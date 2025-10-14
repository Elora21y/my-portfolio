import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";
import Home from "../page/Home";
import Loading from "../components/Loading";

export const router = createBrowserRouter([
    {
        path : '/',
        Component : RootLayout,
        // HydrateFallback : Loading,
        // hydrateFallbackElement : <Loading/>,
        children : [
            {
                index : true,
                Component : Home
            }
        ]
    }
])