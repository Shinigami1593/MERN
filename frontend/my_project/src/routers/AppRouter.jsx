import React from 'react'
import Homepage from '../pages/Homepage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from '../pages/Login'
import Register from '../pages/Register'
import MainLayout from '../layouts/MainLayout'
import StateManage from '../pages/StateManage'

export default function AppRouter() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/state-test' element={<StateManage/>}></Route>
            <Route element={<MainLayout/>}>
                <Route path = '/' element = {<Homepage/>}></Route>
                <Route path = '/login' element = {<Login/>}></Route>
                <Route path = '/register' element = {<Register/>}></Route>
            </Route>
        </Routes>
    </BrowserRouter>
  )
}
