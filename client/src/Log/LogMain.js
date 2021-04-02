import React, {useState, useEffect} from 'react'
import {Form, Button, Card, Container, ProgressBar} from 'react-bootstrap'
import {Link, Redirect, useHistory} from 'react-router-dom'
import Axios from 'axios'

export default function Goalscard() {
    const [amountspent, setamountspent] = useState();
    const [amountsaved, setamountsaved] = useState();

    const history = useHistory();

    const routechangetohistory = () => {
        let path = '/history'
        history.push(path);
    }

    const addtohistory = () => {
        console.log(amountsaved);
        Axios.post('http://localhost:3001/api/addtohistory', {
            userid: localStorage.getItem('currentID'),
            date: localStorage.getItem('todaydate'),
            aspent: amountspent,
            asaved: amountsaved,
        }).then(()=>{
            alert("Daily Log Stored! Thank You.");
            routechangetohistory();
        })
    }

    
    return (
        <Container className = "d-flex align-items-center justify-content-center" style={{paddingTop:"35px"}}>

            <Card bg = 'secondary' text = 'light' style = {{maxWidth: "400px"}}>
                <Card.Body>
                    <Card.Title>
                        You have anything to tell me?
                    </Card.Title>
                    <Card.Text>
                        tell me how much you spent today
                    </Card.Text>
                    <Form>
                        <Form.Group>
                            <Form.Control type ="number" id ="amount spent" min ='0' step=".01" onChange={(e)=> {
                                    setamountspent(e.target.value)
                                }}></Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>As well, tell me how much you saved!</Form.Label>
                            <Form.Control type ="number" id ="amount spent" min ='0' step=".01" onChange={(e)=> {
                                    setamountsaved(e.target.value)
                                }}></Form.Control>
                        </Form.Group>
                    </Form>
                    <Button onClick = {() =>{
                                addtohistory();
                            }}>Submit</Button>
                </Card.Body>
                   
            </Card>
        </Container>
    )
}