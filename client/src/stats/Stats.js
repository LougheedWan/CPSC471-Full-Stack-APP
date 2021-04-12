import React, {useState, useEffect} from 'react'
import { Nav, Navbar, Form, Button, Container, Row, Col, Card} from 'react-bootstrap'
import {Link, Redirect, useHistory} from 'react-router-dom'
import CurrentUser from '../contexts/CurrentUser'
import MainNavBar from '../contexts/NavBar'
import AdminNavBar from '../contexts/NavBarAdmin'
import Axios from 'axios'
export default function Achievements() {

    const [isLoading, setLoading] = useState(true);
    const [monthstats, setmonthstats] = useState([]);
    const [totalstats, settotalstats] = useState([]);
    const[monthcounter, setmonthcounter] = useState([]);
    const[totalcounter, settotalcounter] = useState([]);

    useEffect(()=>{
        var d = new Date();

        console.log(d.getMonth()+1);

        var month = ('0'+(d.getMonth()+1)).slice(-2);

        Axios.all([

            Axios.post('http://localhost:3001/api/gethistorymonth',{
                userid: localStorage.getItem('currentID'),
                monthno: month,

            }),

            Axios.post('http://localhost:3001/api/gettotal',{
                userid: localStorage.getItem('currentID'),
            }),

            Axios.post('http://localhost:3001/api/countmonth',{
                userid: localStorage.getItem('currentID'),
                monthno: month,
            }),

            Axios.post('http://localhost:3001/api/counttotal',{
                userid: localStorage.getItem('currentID'),
            }),

        ]).then(Axios.spread((response1, response2, response3, response4)=>{
            setmonthstats(response1.data);
            settotalstats(response2.data);
            setmonthcounter(response3.data);
            settotalcounter(response4.data);
            setLoading(false);
        }));

       
        

    }, []);
   
    console.log(monthcounter);
    const getAdmin = () => {
        const id = localStorage.getItem('adminstate');
        console.log(id); 
        return id;
    }

    const renderadmin = () => {
        if (getAdmin() == 0){
            return <MainNavBar/>
        }
        else{
            return <AdminNavBar/>
        }
    }

    if(isLoading){
        return(
            <div>Loading</div>
        )
    }
    return (
            
        <div>
            {renderadmin()}
            <h1 class = 'display-1'style={{paddingLeft: "30px", paddingTop: "20px",}}>Statistics</h1>
            <h3 style={{paddingLeft: "30px", paddingTop: "20px", paddingBottom: "40px"}}>From everything that you told us, here is what we got:</h3>
            
            <Container fluid>
                <Row style={{paddingLeft: "20px", paddingBottom: "30px", background: "white"}}>
                    <Col> 
                     <h2 >In Total, You have Saved: ${totalstats[0][0]["SUM(DailySave)"]}</h2>
                    </Col>
                    <Col>
                        <h2>In Total, You have Spent: ${totalstats[0][0]["SUM(DailySpend)"]}</h2>
                    </Col>
                </Row>
                <Row style={{paddingLeft: "20px", paddingBottom: "30px", background: "white"}}>
                    <Col> 
                        <h2 >This Month, You have Saved: ${monthstats[0][0]["SUM(DailySave)"]}</h2>
                    </Col>
                    <Col>
                        <h2>This Month, You have Spent: ${monthstats[0][0]["SUM(DailySpend)"]}</h2>
                    </Col>
                
                </Row>
                <Row style={{paddingLeft: "20px", paddingBottom: "30px", background: "white"}}>
                    <Col> 
                        <h2 >This Month you have logged a total of: {monthcounter[0][0]["COUNT(*)"]} time(s)</h2>
                    </Col>

                </Row>
                <Row style={{paddingLeft: "20px", paddingBottom: "30px", background: "white"}}>
                    <Col> 
                        <h2 >In Total, you have logged: {totalcounter[0][0]["COUNT(*)"]} time(s)</h2>
                    </Col>

                </Row>

            </Container>

            <h3 style={{paddingLeft: "30px", paddingTop: "20px", paddingBottom: "40px"}}>Remember! Logging consistantly will allow your statistics to be as accurate as possible.</h3>

           
        </div>
        
        
    )
}
