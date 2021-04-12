import Axios from 'axios'
import React, {useState, useEffect} from 'react'
import {Form, Button, Card, Container, ProgressBar} from 'react-bootstrap'
import {Link, Redirect, useHistory} from 'react-router-dom'
import Logchecker from '../history/logchecker'

export default function Goalscard() {

    const [isLoading, setLoading] = useState(true);
    const [history, sethistory] = useState([]);
    const [today, settoday] = useState([]);
    const [usergoal, setusergoal] = useState([]);


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
        <Container className = "d-flex align-items-center justify-content-center">

            <Card bg = 'secondary'text = 'light' style = {{maxWidth: "400px"}}>
                <Card.Body>
                    <Card.Title>
                        Here's your monthly progress!
                    </Card.Title>
                    <Card.Text>
                        Let see how close you are to completing them!
                    </Card.Text>
                    <Form>
                        <Form.Group id= "monthSpend">
                            <Form.Label>Monthly Spending</Form.Label>
                            <ProgressBar now = {getmonthspent()}></ProgressBar>
                        </Form.Group>
                        <Form.Group id= "monthlySave">
                            <Form.Label>Monthly Savings</Form.Label>
                            <ProgressBar now = {getmonthsaved()}></ProgressBar>
                        </Form.Group>
                    </Form>
                    <Link to = '/goals' style = {{textAlign: 'center'}}>
                        <Button>See details!</Button>
                    </Link>
                </Card.Body>
                   
            </Card>
        </Container>
    )
}
