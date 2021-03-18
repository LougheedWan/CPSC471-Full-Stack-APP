import React from 'react'
import {Form, Button, Card, Container, ProgressBar} from 'react-bootstrap'
import {Link, Redirect, useHistory} from 'react-router-dom'

export default function Goalscard() {
    return (
        <Container className = "d-flex align-items-center justify-content-center">

            <Card bg = 'secondary'text = 'light' style = {{maxWidth: "400px"}}>
                <Card.Body>
                    <Card.Title>
                        Here are your current goals!
                    </Card.Title>
                    <Card.Text>
                        Let see how close you are to completing them!
                    </Card.Text>
                    <ProgressBar now = {60}></ProgressBar>
                </Card.Body>
                   
            </Card>
        </Container>
    )
}
