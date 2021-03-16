import React from 'react'
import {Form, Button, Card} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import { Container } from 'react-bootstrap';
import Welcome from './Welcometext'

export default function Login() {
    return (
        <Container className = "d-flex align-items-center justify-content-center"
                style = {{minHeight: "100vh"}}>

            <Welcome/>
            <div className = "w-100" style = {{maxWidth: "400px"}}>
                <Card>
                    <Card.Body>
                        <h2 className = "text-center mb-4">Login</h2>
                        <Form>
                            <Form.Group id = "username">
                                <Form.Label>Create Username</Form.Label>
                                <Form.Control type = "text" required></Form.Control>
                            </Form.Group>
                            
                            <Form.Group id = "password">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type = "password" required></Form.Control>
                            </Form.Group>
                            
                            <Button className = "w-100">Login </Button>
                        </Form>
                    </Card.Body>
                </Card>
                <div className = "w-100 text-center mt-2">
                    New Around Here?
                    <Link to= "/signup"> Sign up</Link>
                </div>

            </div>
         </Container>   
               
    )
}
