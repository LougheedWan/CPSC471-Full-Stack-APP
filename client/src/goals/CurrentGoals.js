import Axios from 'axios'
import React, {useState, useEffect} from 'react'
import {Form, Button, Card, Container, ProgressBar} from 'react-bootstrap'
import {Link, Redirect, useHistory} from 'react-router-dom'
import logchecker from '../history/logchecker'
import Logchecker from '../history/logchecker'

export default function Goalscard() {

    const [isLoading, setLoading] = useState(true);
    const [history, sethistory] = useState([]);
    const [today, settoday] = useState([]);
    const [usergoal, setusergoal] = useState([]);

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

    useEffect(()=>{
        var d = new Date();

        console.log(d.getMonth()+1);

        var month = ('0'+(d.getMonth()+1)).slice(-2);

        Axios.all([

            Axios.post('http://localhost:3001/api/gethistorymonth',{
                userid: localStorage.getItem('currentID'),
                monthno: month,

            }),

            Axios.post('http://localhost:3001/api/gethistory',{
                date: localStorage.getItem('todaydate'),
                userid: localStorage.getItem('currentID'),
            }),

            Axios.post('http://localhost:3001/api/getgoals',{
                id: localStorage.getItem('currentID'),
            })

        ]).then(Axios.spread((response1, response2, response3)=>{
            sethistory(response1.data);
            settoday(response2.data);
            setusergoal(response3.data);
            setLoading(false);
        }));

       
        

    }, []);

    console.log(today);

    //logic functions

    const getmonthspent = () =>{

        var percentage = (history[0][0]["SUM(DailySpend)"] / usergoal[0][0].month_spending)*100;

        //console.log(percentage);
        if(usergoal[0][0].month_spending == 0){
            return 100;
        }
        return percentage
    }

    const getmonthsaved = () =>{

        var percentage = (history[0][0]["SUM(DailySave)"] / usergoal[0][0].month_saving)*100;

        if (usergoal[0][0].month_saving == 0){
            return 100;
        }
        return percentage
    }

    const getdailyspent = () => {

        var percentage = (today[0][0].DailySpend/ usergoal[0][0].daily_spending)*100;

        if (usergoal[0][0].daily_spending == 0){
            return 100;
        }
        else{
            return percentage
        }

        
    }

    const getdailysave = () => {
        var percentage = (today[0][0].DailySave/ usergoal[0][0].daily_saving)*100;

        if (usergoal[0][0].daily_saving == 0){
            return 100;
        }
        return percentage
    }

    if(isLoading){
        return(
            <div>Loading</div>
        )
    }
    else if (today[0].length == 0){
        return(
            <Logchecker/>
        )
        
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
                            <Form.Label>For this Month, you spent: ${history[0][0]["SUM(DailySpend)"]} out of your goal of: ${usergoal[0][0].month_spending}</Form.Label>
                            <ProgressBar now = {getmonthspent()}></ProgressBar>
                        </Form.Group>
                        <Form.Group id="dailySpend">
                            <Form.Label>Today, You Spent: ${today[0][0].DailySpend} out of your goal of: ${usergoal[0][0].daily_spending}</Form.Label>
                            <ProgressBar now = {getdailyspent()}></ProgressBar>
                        </Form.Group>
                        <Form.Group id= "monthlySave">
                            <Form.Label>For this Month, you saved: ${history[0][0]["SUM(DailySave)"]} out of your goal of: ${usergoal[0][0].month_saving}</Form.Label>
                            <ProgressBar now = {getmonthsaved()}></ProgressBar>
                        </Form.Group>
                        <Form.Group id = "dailySave">
                            <Form.Label>Today, You Saved: ${today[0][0].DailySave} out of your goal of: ${usergoal[0][0].daily_saving}</Form.Label>
                            <ProgressBar now = {getdailysave()}></ProgressBar>
                        </Form.Group>

                    </Form>
                    <Button onClick={(e) => { if (window.confirm('Are you sure you would like to change your goals?')) editgoals() } }>Edit Goals</Button>
                </Card.Body>
                   
            </Card>
        </Container>
    )
}