import React from 'react'
import {Form, Button, Card, Container, ProgressBar} from 'react-bootstrap'
import {Link, Redirect, useHistory} from 'react-router-dom'

export default function Goalscard() {
    return (
        <Container className = "d-flex align-items-center justify-content-center">

            <Card bg = 'secondary' text = 'light' style = {{maxWidth: "400px"}}>
                <Card.Body>
                    <Card.Title>
                        Oops! Looks like you don't have goals set yet!
                    </Card.Title>
                    <Card.Text>
                        Lets go set them!
                    </Card.Text>
                    <Link to = '/goals' style = {{textAlign: 'center'}}>
                        <Button>Show me how!</Button>
                    </Link>
                </Card.Body>
                   
            </Card>
        </Container>
    )
}
