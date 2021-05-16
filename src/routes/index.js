import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Login from '../pages/login/Login'
import Register from '../pages/register/Register'
import Timeline from '../pages/home/Home'
import Profile from '../pages/profile/Profile'

class index extends Component {
    render() {
        return (
            <BrowserRouter>
                <Route exact path="/" component={Login} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/timeline" component={Timeline} />
                <Route exact path="/profile" component={Profile} />
            </BrowserRouter>
        )
    }
}

export default index
