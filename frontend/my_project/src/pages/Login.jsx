import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'


export default function Login() {
    let navigate = useNavigate()

    const returnToHome = (event) => {
        event.preventDefault()
        navigate("/")
    }
  return (
    <div>
        <div>Login</div>
        <nav className='space-x-4'>
            <NavLink to='/'>go back</NavLink>
            <NavLink to='/register'>register</NavLink>
            <button onClick={returnToHome}> Button Click</button>
            <button onClick={
                (event)=>{
                    returnToHome(event)
                }
            }> Button Click Callback</button>
        </nav>
    </div>
  )
}
