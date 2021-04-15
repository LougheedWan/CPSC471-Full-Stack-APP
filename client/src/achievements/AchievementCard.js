import Axios from 'axios'
import React, {useState, useEffect} from 'react'
import {Form, Button, Card, Container, ProgressBar} from 'react-bootstrap'
import {Link, Redirect, useHistory} from 'react-router-dom'
import Logchecker from '../history/logchecker'
import NoAchievement from './NoAchievement'

export default function AchievementCard() {

    const [isLoading, setLoading] = useState(true);
    const [total, settotall] = useState([]);
    const [today, settoday] = useState([]);
    const [usergoal, setusergoal] = useState([]);
    const [userhistory, getuserhistory] = useState([]);

    useEffect(()=>{
        var d = new Date();

        Axios.all([

            Axios.post('http://localhost:3001/api/gettotal',{
                userid: localStorage.getItem('currentID'),

            }),

            Axios.post('http://localhost:3001/api/gethistory',{
                date: localStorage.getItem('todaydate'),
                userid: localStorage.getItem('currentID'),
            }),

            Axios.post('http://localhost:3001/api/getgoals',{
                id: localStorage.getItem('currentID'),
            }),

            Axios.post('http://localhost:3001/api/gethistorymain',{
                userid: localStorage.getItem('currentID'),
            })

        ]).then(Axios.spread((response1, response2, response3, response4)=>{
            settotall(response1.data);
            settoday(response2.data);
            setusergoal(response3.data);
            getuserhistory(response4.data);
            setLoading(false);
        }));
        
        
        
    }, []);

    console.log(userhistory);

    const getmonthspent = () =>{

        var percentage = (total[0][0]["SUM(DailySpend)"] / 10)*100;

        
        return percentage
    }

    const getmonthsaved = () =>{

        var percentage = (total[0][0]["SUM(DailySpend)"] / 1000)*100;

        return percentage
    }

    const getdailyspent = () => {

        var percentage = (total[0][0]["SUM(DailySpend)"]/ 5000)*100;

            return percentage
        }


    const getdailysave = () => {

        var percentage = (total[0][0]["SUM(DailySave)"]/ 10)*100;

            return percentage
        }

    const getdailysavetwenty = () => {

        var percentage = (total[0][0]["SUM(DailySave)"]/ 1000)*100;
    
            return percentage
        }
    
    const getdailysavethirty = () => {

        var percentage = (total[0][0]["SUM(DailySave)"]/ 5000)*100;
        
            return percentage
        }
            
        
        
        if(isLoading){
            return(
                <div>Loading</div>
            )
        }
        else if (userhistory[0].length == 0){
            return(
                <NoAchievement/>
            )
            
        }

    return (
        
    <Container className = "d-flex align-items-center justify-content-center mx-auto" style={{paddingTop: "60px"}}>
        
        <div class="row" style={{paddingBottom:"12px"}}>
        <div class="col-6 col-sm-4"></div>
        <div class="col-6 col-sm-4"></div>
        <div class="col-6 col-sm-4"></div>

            <Card bg = 'secondary' text = 'light' style = {{maxWidth: "250px", minWidth: "250px"}}>
            <img src="spent.jpg" class="card-img-top" alt=""/>
                <Card.Body>
                    <Card.Title>
                    Spend $10
                    </Card.Title>

                    <Form>
                        <Form.Group id= "monthSpend">
                            <ProgressBar now = {getmonthspent()}></ProgressBar>
                        </Form.Group>
                        
                        

                    </Form>
                
                </Card.Body>
                
            </Card>
            
            
            <Card bg = 'secondary' text = 'light' style = {{maxWidth: "250px", minWidth: "250px"}}>
            <img src="spent.jpg" class="card-img-top" alt=""/>
                <Card.Body>
                    <Card.Title>
                    Spend $1000
                    </Card.Title>

                <Form>
                    <Form.Group id="dailySpend">
                        <ProgressBar now = {getmonthsaved()}></ProgressBar>
                    </Form.Group>
                </Form>
            </Card.Body>
            </Card>
           
            
            <Card bg = 'secondary' text = 'light' style = {{maxWidth: "250px", minWidth: "250px"}}>
            <img src="spent.jpg" class="card-img-top" alt=""/>
                <Card.Body>
                    <Card.Title>
                    Spend $5000
                    </Card.Title>

                <Form>
                <Form.Group id= "monthlySave">
                    <ProgressBar now = {getdailyspent()}></ProgressBar>
                </Form.Group>
                </Form>
            </Card.Body>
            </Card>
            
        <div class="w-100" style={{padding:"6px"}}></div>

        <div class="col-6 col-sm-4"></div>
        <div class="col-6 col-sm-4"></div>
        <div class="col-6 col-sm-4"></div>
            <Card bg = 'secondary' text = 'light' style = {{maxWidth: "250px", minWidth: "250px"}}>
            <img src="save.png" class="card-img-top" alt=""/>
                <Card.Body>
                    <Card.Title>
                    Save $10
                    </Card.Title>

                    <Form>
                        <Form.Group id= "monthSpend">
                            <ProgressBar now = {getdailysave()}></ProgressBar>
                        </Form.Group>
                        
                        

                    </Form>
                
                </Card.Body>
                
            </Card>
       
            
            <Card bg = 'secondary' text = 'light' style = {{maxWidth: "250px", minWidth: "250px"}}>
            <img src="save.png" class="card-img-top" alt=""/>
                <Card.Body>
                    <Card.Title>
                    Save $1000
                    </Card.Title>

                    <Form>
                        <Form.Group id= "monthSpend">
                            <ProgressBar now = {getdailysavetwenty()}></ProgressBar>
                        </Form.Group>
                        
                        

                    </Form>
                
                </Card.Body>
                
            </Card>
            
           
            <Card bg = 'secondary' text = 'light' style = {{maxWidth: "250px", minWidth: "250px"}}>
            <img src="save.png" class="card-img-top" alt=""/>
                <Card.Body>
                    <Card.Title>
                    Save $5000
                    </Card.Title>

                    <Form>
                        <Form.Group id= "monthSpend">
                            <ProgressBar now = {getdailysavethirty()}></ProgressBar>
                        </Form.Group>
                        
                        

                    </Form>
                
                </Card.Body>
                
            </Card>
        
        </div>
        
    </Container>
    )
}
    