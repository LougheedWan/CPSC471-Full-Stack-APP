import React from 'react'
import { Nav, Navbar, Form, Button} from 'react-bootstrap'
import {Link, Redirect, useHistory} from 'react-router-dom'
import CurrentUser from '../contexts/CurrentUser'
import MainNavBar from '../contexts/NavBar'

export default function Main() {
    return (
        <MainNavBar/>
    )
}
