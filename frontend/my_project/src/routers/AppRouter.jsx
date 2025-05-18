import React from 'react'
import Homepage from '../pages/Homepage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from '../pages/Login'
import Register from '../pages/Register'
import MainLayout from '../layouts/MainLayout'

export default function AppRouter() {
  return (
    <BrowserRouter>
        <Routes>
            <Route element={<MainLayout/>}>
                <Route path = '/' element = {<Homepage/>}></Route>
                <Route path = '/login' element = {<Login/>}></Route>
                <Route path = '/register' element = {<Register/>}></Route>
            </Route>
        </Routes>
    </BrowserRouter>
  )
}
