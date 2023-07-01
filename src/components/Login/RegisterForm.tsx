import React from "react";
import { AuthForm } from "../Form";
import { useAppDispatch } from "../../redux";
import { useNavigate } from "react-router";
import { register } from "../../redux";

export const RegisterForm = () => {
    
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const onSubmit = async (values: any) => {
        dispatch(register({
            userId: values.userId,
            password: values.password,
            firstName: values.firstName,
            lastName: values.lastName
        }))
        .then((res)=> {
            console.log("dispatched")
            // navigate('/login');
        })
    }

    const formProps = {
        title: "Join now",
        textBtn: "Agree & Join",
        type: "register",
    }
    
    return <AuthForm onSubmit={onSubmit} {...formProps}/>
}