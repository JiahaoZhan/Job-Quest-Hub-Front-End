import React, { useState } from "react";

interface IProps {
    title: string,
    textBtn: string,
    type: string,
    onSubmit: (event: any) => void
}


export const AuthForm: React.FC<IProps> = (
    {title, textBtn, type, onSubmit}) => {

    const [userId, setUserId] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");


    const formHandler = (e) => {
        e.preventDefault();
        onSubmit({userId, password, firstName, lastName});
    }

    return ( 
    <form className="w-full mx-auto text-center max-w-sm bg-white shadow-md rounded-xl px-8 pt-6 pb-8 mb-4" onSubmit={formHandler}>
            <h1 className="mb-4 font-serif text-xl">
            {title}
            </h1>
            {/* email */}
            <input
                className="block mb-4 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="username"
                placeholder="Username"
                onChange={(e) => {
                    setUserId(e.target.value);
                }}>
            </input>

            {/*password*/}
            <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline block mb-4"
                type="password"
                name="password"
                placeholder="Password (8+ characters)"
                onChange={(e) => {
                    setPassword(e.target.value);
                }}>
            </input>

            {type == "register" && <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline block mb-4"
                type="text"
                name="firstName"
                placeholder="First name"
                onChange={(e) => {
                    setFirstName(e.target.value);
                }}>
            </input>}

            {type == "register" && <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline block mb-4"
                type="text"
                name="lastName"
                placeholder="Last name"
                onChange={(e) => {
                    setLastName(e.target.value);
                }}>
            </input>}

            <button className="p-2 text-sm font-semibold text-white bg-softBlue rounded shadow-md border-2 border-softBlue md:text-base hover:bg-white hover:text-softBlue" type="submit">
               {textBtn}
            </button>
    </form>
   
    )
}
