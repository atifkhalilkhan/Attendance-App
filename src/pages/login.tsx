import { BAButton } from "basuite";
import supabase from "../config/dbconfig";
import { message } from "antd";
import { useNavigate } from "react-router";

export default function Login() {
    const navigate = useNavigate()
    const loginUser = async () => {
        const { error, data } = await supabase.auth.signUp({
            email: "admin@gmail.com",
            password: "123987"
        })
        if (error) {
            message.error(error.message)
        } else {
            navigate("/")
        }
        await supabase.auth.signInWithPassword({
            email: "admin@gmail.com",
            password: "123987"
        })
    }
    return <>
        <h1>Login</h1>
        <BAButton onClick={loginUser} label="Login" />
    </>
}