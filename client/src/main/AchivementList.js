import React from 'react'
import {Form, Button, Card, Container, ProgressBar} from 'react-bootstrap'
import {Link, Redirect, useHistory} from 'react-router-dom'

export default function achivements() {


    return (
        <Container className = "d-flex align-items-center justify-content-center">

            <Card bg = 'secondary' text = 'light' style = {{maxWidth: "400px"}}>
                <Card.Body>
                    <Card.Title>
                        Achievements
                    </Card.Title>
                    <Card.Text>
                        Looks like you haven't reached an achivement yet! Check back later or see your progress below.
                    </Card.Text>
                    <Link to = '/achievements' style = {{textAlign: 'center'}}>
                        <Button>Achievements</Button>
                    </Link>
                </Card.Body>
                   
            </Card>
        </Container>

    )
}
