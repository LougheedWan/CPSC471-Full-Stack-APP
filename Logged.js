import React from 'react'
import {Form, Button, Card, Container, ProgressBar} from 'react-bootstrap'
import {Link, Redirect, useHistory} from 'react-router-dom'

export default function logged() {
    return (
        <Container className = "d-flex align-items-center justify-content-center">

            <Card bg = 'secondary' text = 'light' style = {{maxWidth: "400px"}}>
                <Card.Body>
                    <Card.Title>
                        Great on logging your spending job today!
                    </Card.Title>
                    <Card.Text>
                        Take a look at your history for more information!
                    </Card.Text>
                    <Link to = '/history' style = {{textAlign: 'center'}}>
                        <Button>History</Button>
                    </Link>
                    <Card.Text>
                        Or update your savings and spending!
                    </Card.Text>
                    <Link to = '/Log' style = {{textAlign: 'center'}}>
                        <Button>Log</Button>
                    </Link>
                </Card.Body>
                   
            </Card>
        </Container>
    )
}
