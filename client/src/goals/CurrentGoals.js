import Axios from 'axios'
import React from 'react'
import {Form, Button, Card, Container, ProgressBar} from 'react-bootstrap'
import {Link, Redirect, useHistory} from 'react-router-dom'

export default function Goalscard() {

    const editgoals = () => {
        console.log("EDIT EIDT IEDT")
        //create query to delete current goals, then re render the page
        Axios.post("http://localhost:3001/api/delGoals",{
            userid: localStorage.getItem('currentID'),
        }).then((response)=>{
            alert("Goal Progress Erased.");
            window.location.reload();
        })

    }

    return (
        <Container className = "d-flex align-items-center justify-content-center mx-auto" style={{paddingTop: "60px"}}>

            <Card bg = 'secondary' text = 'light' style = {{maxWidth: "600px", minWidth: "600px"}}>
                <Card.Body>
                    <Card.Title>
                        Wow! Great work on your goals so far!
                    </Card.Title>
                    <Card.Text>
                        Heres your progress:
                    </Card.Text>
                    <Form>
                        <Form.Group id= "monthSpend">
                            <Form.Label>For this Month, you spent:</Form.Label>
                            <ProgressBar now = {60}></ProgressBar>
                        </Form.Group>
                        <Form.Group id="dailySpend">
                            <Form.Label>Today, You Spent:</Form.Label>
                            <ProgressBar now = {60}></ProgressBar>
                        </Form.Group>
                        <Form.Group id= "monthlySave">
                            <Form.Label>For this Month, you saved:</Form.Label>
                            <ProgressBar now = {60}></ProgressBar>
                        </Form.Group>
                        <Form.Group id = "dailySave">
                            <Form.Label>Today, You Saved:</Form.Label>
                            <ProgressBar now = {60}></ProgressBar>
                        </Form.Group>

                    </Form>
                    <Button onClick={(e) => { if (window.confirm('Are you sure you want to overwrite your progress?')) editgoals() } }>Edit Goals</Button>
                </Card.Body>
                   
            </Card>
        </Container>
    )
}