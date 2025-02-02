import { createBrowserRouter, Navigate } from "react-router-dom";
import { Suspense, lazy } from "react";
import Layout from "../page/Layout/Layout";
import Loader from "../component/Loader";
const Movie = lazy(() => import("../page/Movie/Movie"));
const Home = lazy(() => import("../page/Home/Home"));

export const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <Suspense fallback={<Loader />}>
                <Layout />
            </Suspense>
        ),
        children: [
            {
                path: "/",
                element: <Navigate to="/movie" />,
            },
            {
                path: "/movie",
                element: (
                    <Suspense fallback={<Loader />}>
                        <Home />
                    </Suspense>
                ),
            }, {
                path: "/movie/:id",
                element: (
                    <Suspense fallback={<Loader />}>
                        <Movie />
                    </Suspense>
                ),
            }
        ],
    },
]);
