import Axios from 'axios'
import React, {useState, useEffect} from 'react'
import {Form, Button, Card, Container, ProgressBar} from 'react-bootstrap'
import {Link, Redirect, useHistory} from 'react-router-dom'

export default function achivements() {


    return (
        <Container className = "d-flex align-items-center justify-content-center">

            <Card bg = 'secondary' text = 'light' style = {{maxWidth: "300px"}}>
                <Card.Body>
                    <Card.Title>
                        Achievements
                    </Card.Title>
                    <img src="spent.jpg" alt="" width="250" height="250"/>

                    <img src="save.png" alt="" width="250" height="250"/>

                    <Link to = '/achievements' style = {{textAlign: 'center'}}>
                        <Button>Achievements</Button>
                    </Link>
                </Card.Body>
                   
            </Card>
        </Container>

    )
}
