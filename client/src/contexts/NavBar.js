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
        CurrentUser.currentuser = null;
    }

    return (
        <Navbar bg = "dark" expand = 'lg' variant = "dark">
            <Navbar.Brand> Planner</Navbar.Brand>
            <Nav className = "mr-auto">
                <Nav.Link href = "main"> Home </Nav.Link>
                <Nav.Link>History</Nav.Link>
                <Nav.Link href= "goals">Goals</Nav.Link>
            </Nav>

            <Form inline>

                <Button variant = "outline-info" onClick = {() => {
                    logoutUser();
                }}>Logout</Button>
            </Form>
        </Navbar>
    )
}
