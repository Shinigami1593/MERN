import React from "react";
import { useRegisterUSer } from "../../hooks/useRegisterUser";
export default function RegisterForm(){
    const { register,isLoading,data,error } = useRegisterUSer()
    const handleSubmit = async(e) => {
        //static data
        const formData = {
            email: "test@gmail.com",
            username: "test11223344",
            firstNmae: "John",
            lastName: "Doe",
            password: "password"
        }
        //use the hook function
        let response = await register(formData)
        if(response)[
            //extra logic eg Navigation
        ]
    }
    return(
        <div>RegisterForm</div>
    )
}