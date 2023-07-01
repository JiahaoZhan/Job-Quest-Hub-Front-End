import React from "react";
import { Outlet } from "react-router-dom"
import { Header, Footer } from "./";


export const Layout = () => (
    <div className="overflow-x-hidden">
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
)
