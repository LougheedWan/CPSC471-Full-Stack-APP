import React, {useState, useEffect} from 'react'
import { Nav, Navbar, Form, Button, Container, Row, Col, Card} from 'react-bootstrap'
import {Link, Redirect, useHistory} from 'react-router-dom'
import CurrentUser from '../contexts/CurrentUser'
import MainNavBar from '../contexts/NavBar'
import AdminNavBar from '../contexts/NavBarAdmin'
import Goals from './Goalscard'
import NoGoals from './NoGoal'
import NoLog from './NoLog'
import Logged from './Logged'
import Log from '../Log/LogMain'
import AchivementList from './AchivementList'
import Axios from 'axios'

export default function Main() {

    const [isLoading, setLoading] = useState(true);
    const [todayhistory, sethistory] = useState([]);
    const [uid, setUid] = useState([]);


    useEffect(()=>{

        Axios.all([
            Axios.post('http://localhost:3001/api/gethistory',{
                date: localStorage.getItem('todaydate'),
                userid: localStorage.getItem('currentID'),
            }),
            Axios.post('http://localhost:3001/api/getgoals',{
                id: localStorage.getItem('currentID'),
            }),
        ]).then(Axios.spread((response1, response2)=>{
            sethistory(response1.data);
            setUid(response2.data);
            setLoading(false);

        }));
    }, []);

    const getAdmin = () => {
        const id = localStorage.getItem('adminstate');
        console.log("adminID" + id); 
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

    const renderalert = () => {
        console.log(todayhistory);
        if (todayhistory[0].length != 0){
            return (
                <Logged/>
            )
           
        }
        else{
            console.log("this should run");
            return (
                <NoLog/>
            )
            
        }
    }

    const rendergoals = () => {
        console.log(uid);
        if (uid[0].length !=0){
            return(
                <Goals/>
            ) 
        }
        else{
            return(
                <NoGoals/>
            ) 
        }

    }

    const getun = () => {
        const un = localStorage.getItem('currentusername');
        return un;
    }
    
    if(isLoading){
        return <div>Loading</div>;
    }

    return (
            
        <div>
            {renderadmin()}
            
            <h1 style = {{textAlign: 'center', paddingTop: '15px', paddingBottom: '50px',fontWeight: 'bold'}} >Welcome Back {getun()}! </h1>
            
            <Container fluid >
                <Row >
                    <Col> 
                        {rendergoals()}
                    </Col>
                    <Col>
                        {renderalert()}
                    </Col>
                    <Col>
                        <AchivementList/>
                    </Col>
                </Row>


            </Container>
           
        </div>
        
        
    )
}
