import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Login from './pages/Login/index'
import Home from './pages/Home/index'
import NewPost from './pages/NewPost/index'


export default function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Login}/>
            <Route path="/home" component={Home}/>
            <Route path="/newpost" component={NewPost}/>
        </BrowserRouter>
    )
}