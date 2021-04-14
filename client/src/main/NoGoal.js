import React from 'react'
import {Form, Button, Card, Container, ProgressBar} from 'react-bootstrap'
import {Link, Redirect, useHistory} from 'react-router-dom'

export default function nogoals() {


    return (
        <Container className = "d-flex align-items-center justify-content-center">

            <Card bg = 'secondary' text = 'light' style = {{maxWidth: "400px"}}>
                <Card.Body>
                    <Card.Title>
                        Set some goals!
                    </Card.Title>
                    <Card.Text>
                        Goals are a great way to start saving! Try setting some here!
                    </Card.Text>
                    <Link to = '/goals' style = {{textAlign: 'center'}}>
                        <Button>Goals</Button>
                    </Link>
                </Card.Body>
                   
            </Card>
        </Container>

    )
}
