import React from "react";
import { 
    createBrowserRouter, 
    Navigate, Route, 
    createRoutesFromElements,
    Outlet } from "react-router-dom";
import { Home, Login, Register, Feed, SavedJobs } from "../pages";
import { Layout } from "../partials";
import { useAppSelector } from "../redux";

const PrivateRoutes = () => {
    const jwt = useAppSelector(state=>state.user.token)
    return (jwt? <Outlet/> : <Navigate to="/login"/>)
}

// Private routes need to be implemented later
export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route element={<Layout/>}>
            <Route element={<PrivateRoutes/>}>
                <Route path="/feed" element={<Feed/>}/>
                <Route path="/saved" element={<SavedJobs/>}/>
            </Route>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
        </Route>
    )
)


