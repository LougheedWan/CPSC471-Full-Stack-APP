import React from 'react'
import {Form, Button, Card, Container, ProgressBar, Alert} from 'react-bootstrap'
import {Link, Redirect, useHistory} from 'react-router-dom'

export default function NoAchievement() {
    return (
        <Container className = "d-flex align-items-left justify-content-left">

            <Card bg = 'secondary' text = 'light' style = {{maxWidth: "400px"}}>
                <Card.Body>
                    <Card.Title>
                        Your achievements are empty!
                    </Card.Title>
                    <Card.Text>
                        Log your savings and spendings to get started!!                    </Card.Text>
                    <Link to = '/Log' style = {{textAlign: 'center'}}>
                        <Button>Show me how!</Button>
                    </Link>
                </Card.Body>
                   
            </Card>
        </Container>
    )
}
