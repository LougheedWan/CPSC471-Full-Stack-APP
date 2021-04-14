import React, {useState, useEffect} from 'react'
import { Nav, Navbar, Form, Button, Container, Row, Col, Card} from 'react-bootstrap'
import {Link, Redirect, useHistory} from 'react-router-dom'
import CurrentUser from '../contexts/CurrentUser'
import MainNavBar from '../contexts/NavBar'
import AdminNavBar from '../contexts/NavBarAdmin'
import Axios from 'axios';
import AchievementsCard from './AchievementCard';


export default function Achievements() {
   
    var switcher = false;

    const [isLoading, setLoading] = useState(true);
    const [uid, setUid] = useState([]);

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
    };

    useEffect(()=>{
        Axios.post('http://localhost:3001/api/gethistorymain',{
            id: localStorage.getItem('currentID'),
        }).then((response)=>{
            setUid(response.data);
            console.log(uid);
            setLoading(false);
        });

    }, []);

       
    if(isLoading){
        return <div>Loading</div>;
    } 

    return (
            
        <div>
            {renderadmin()}

            <h1 class = 'display-1'style={{paddingLeft: "10px", paddingTop: "10px",}}>Acievements</h1>
            <h1 class="text-l font-bold pb-6">  Wow! Great work on your Achievements so far! Here they are:</h1>
            <Container fluid>
            <Col>
                <AchievementsCard/>
            </Col>


            </Container>

        </div>
           

        
        
    )
}
