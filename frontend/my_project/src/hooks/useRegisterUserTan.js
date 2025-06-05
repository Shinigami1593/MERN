import { useMutation } from "@tanstack/react-query";
//useMutation is used for POST/PUT/PATCH/DELETE request state
import { registerUserService } from "../services/authService";

export const userRegister = () => {
    return useMutation(
        {
            mutationFn: registerUserService //what function to run
        }
    )
}
//mutationFn: (formData) => registerUserService(formData)
