import React from 'react'
import {Form, Button, Card, Container, ProgressBar} from 'react-bootstrap'
import {Link, Redirect, useHistory} from 'react-router-dom'

export default function Goalscard() {
    return (
        <Container className = "d-flex align-items-center justify-content-center">

            <Card bg = 'secondary' text = 'light' style = {{maxWidth: "400px"}}>
                <Card.Body>
                    <Card.Title>
                        You have anything to tell me?
                    </Card.Title>
                    <Card.Text>
                        tell me how much you spent today and I'll see if you went over your limit!
                    </Card.Text>
                    <Form>
                        <Form.Group>
                            <Form.Control type ="number" id ="amount spent" min ='0' step=".01"></Form.Control>
                        </Form.Group>
                    </Form>
                    <Button>Submit</Button>
                </Card.Body>
                   
            </Card>
        </Container>
    )
}
