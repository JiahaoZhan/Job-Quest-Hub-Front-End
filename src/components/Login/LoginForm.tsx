import React from "react";
import { AuthForm } from "../Form";
import { useAppDispatch } from "../../redux";
import { useNavigate } from "react-router";
import { login } from "../../redux";

export const LoginForm: React.FC = () => {

    const formProps = {
        title: "Make the most of your professional life",
        textBtn: "Login",
        type: "login"
    }

    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const onSubmit = async (values: any) => {
        dispatch(login({
            userId: values.userId,
            password: values.password,
        }))
        .then((res)=> {
            navigate("/feed");
        })
    }

    return <AuthForm onSubmit={onSubmit} {...formProps}/> 
}