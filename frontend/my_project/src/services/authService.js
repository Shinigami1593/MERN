import { registerApi } from "../api/authApi";

export const registerUserService = async(formData) => {
    try{
        const response = await registerUserService(formData)
        return response.data
    }catch(err){
        throw err.response?.data || { message: "Registration failed" }
    }
}