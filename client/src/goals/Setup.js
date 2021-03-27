import Axios from 'axios';
import React, {useState, useEffect} from 'react'
import {Form, Button, Card, Container, ProgressBar} from 'react-bootstrap'
import {Link, Redirect, useHistory} from 'react-router-dom'

export default function Goalscard() {

    //set up states
    const[monthSpend, setMonthSpend] = useState(0);
    const[daySpend, setDaySpend] = useState(0);
    const[monthSave, setMonthSave] = useState(0);
    const[daySave, setDaySave] = useState(0);



    const createGoals = () => {
        Axios.post("http://localhost:3001/api/createGoals", {
            mspend: monthSpend,
            dspend: daySpend,
            msave: monthSave,
            dsave: daySave,
            userID: localStorage.getItem("currentID"),
        }).then(()=>{
            alert("created goals");
            window.location.reload();
        }).catch(e => {
            console.log(e);
        });

    };

    return (
        <Container className = "d-flex align-items-center justify-content-center mx-auto" style={{paddingTop: "60px"}}>

            <Card bg = 'secondary' text = 'light' style = {{maxWidth: "600px", minWidth: "600px"}}>
                <Card.Body>
                    <Card.Title>
                        Lets Setup Your Goals!
                    </Card.Title>
                    <Card.Text>
                        Fill out the form below..
                    </Card.Text>
                    <Form>
                        <Form.Group id= "monthSpend">
                            <Form.Label>How much (on average) would you like to spend in a month?</Form.Label>
                            <Form.Control type ="number" id ="amount spent" min ='0' step=".01" required onChange={(e)=>{
                                    setMonthSpend(e.target.value)
                                }}></Form.Control>
                        </Form.Group>
                        <Form.Group id="dailySpend">
                            <Form.Label>How much (on average) would you like to spend daily?</Form.Label>
                            <Form.Control type ="number" id ="amount spent" min ='0' step=".01" required onChange={(e)=>{
                                    setDaySpend(e.target.value)
                                }}></Form.Control>
                        </Form.Group>
                        <Form.Group id= "monthlySave">
                            <Form.Label>How much (on average) would you like to save in a month?</Form.Label>
                            <Form.Control type ="number" id ="amount spent" min ='0' step=".01" required onChange={(e)=>{
                                    setMonthSave(e.target.value)
                                }}></Form.Control>
                        </Form.Group>
                        <Form.Group id = "dailySave">
                            <Form.Label>How much (on average) would you like to save daily?</Form.Label>
                            <Form.Control type ="number" id ="amount spent" min ='0' step=".01" required onChange={(e)=>{
                                    setDaySave(e.target.value)
                                }}></Form.Control>
                        </Form.Group>

                    </Form>
                    <Button onClick =  {() => {
                                createGoals();
                                
                            }}>Submit</Button>
                </Card.Body>
                   
            </Card>
        </Container>
    )
}