import React from 'react'
import {Form, Button, Card, Container, ProgressBar} from 'react-bootstrap'
import {Link, Redirect, useHistory} from 'react-router-dom'

export default function notlogged() {
    return (
        <Container className = "d-flex align-items-center justify-content-center">

            <Card bg = 'secondary' text = 'light' style = {{maxWidth: "400px"}}>
                <Card.Body>
                    <Card.Title>
                        Oops! Looks like you haven't logged today yet!
                    </Card.Title>
                    <Card.Text>
                        Lets go set them!
                    </Card.Text>
                    <Link to = '/Log' style = {{textAlign: 'center'}}>
                        <Button>Show me how!</Button>
                    </Link>
                </Card.Body>
                   
            </Card>
        </Container>
    )
}
