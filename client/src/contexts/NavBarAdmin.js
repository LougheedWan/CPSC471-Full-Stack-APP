import React from 'react'
import { Nav, Navbar, Form, Button} from 'react-bootstrap'
import {Link, Redirect, useHistory} from 'react-router-dom'
import CurrentUser from '../contexts/CurrentUser'

export default function NavBar() {

    const history = useHistory();

    const routechangetologin = () => {
        let path = '/Login'
        history.push(path);
    }
    const logoutUser = ()=>{
        routechangetologin();
        localStorage.clear();
    }

    return (
        <Navbar bg = "dark" expand = 'lg' variant = "dark">
            <Navbar.Brand> Planner</Navbar.Brand>
            <Nav className = "mr-auto">
                <Nav.Link href = "main"> Home </Nav.Link>
                <Nav.Link href= "history">History</Nav.Link>
                <Nav.Link href= "goals">Goals</Nav.Link>
                <Nav.Link href = "achievements">Achievements</Nav.Link>
                <Nav.Link href = "admin">Admin Tools</Nav.Link>
                <Nav.Link href = "log">Log Spending</Nav.Link>
            </Nav>

            <Form inline>
                <Nav.Link href = "settings" style = {{color:"white"}}>Settings</Nav.Link>

                <Button variant = "outline-info" onClick = {() => {
                    logoutUser();
                }}>Logout</Button> 
            </Form>
        </Navbar>
    )
}
