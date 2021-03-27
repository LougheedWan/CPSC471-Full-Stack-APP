import React, {useState, useEffect} from 'react'
import { Nav, Navbar, Form, Button, Container, Row, Col, Card} from 'react-bootstrap'
import {Link, Redirect, useHistory} from 'react-router-dom'
import CurrentUser from '../contexts/CurrentUser'
import MainNavBar from '../contexts/NavBar'
import AdminNavBar from '../contexts/NavBarAdmin'
import Axios from 'axios';
import Setup from './Setup';
import Cgoals from './CurrentGoals';

export default function Goals() {

    
    var switcher = false;

    const [isLoading, setLoading] = useState(true);
    const [uid, setUid] = useState([]);

    const getAdmin = () => {
        const id = localStorage.getItem('adminstate');
        console.log(id); 
        return id;
    };

    const renderadmin = () => {
        if (getAdmin() == 0){
            return <MainNavBar/>
        }
        else{
            return <AdminNavBar/>
        }
    };

    useEffect(()=>{
        Axios.post('http://localhost:3001/api/getgoals',{
            id: localStorage.getItem('currentID'),
        }).then((response)=>{
            setUid(response.data);
            console.log(uid);
            setLoading(false);
        });

    }, []);
        
    const rendergoals = () => {
        console.log(uid);
        if (uid[0].length !=0){
            return(
                <Cgoals/>
            ) 
        }
        else{
            return(
                <Setup/>
            ) 
        }

    }
    if(isLoading){
        return <div>Loading</div>;
    } 
    return (
         
        <div>
             
             {renderadmin()}

             <h1 style={{paddingLeft: "15px", paddingTop: "20px", fontSize: 75}}>Goals</h1>
             
            <Container fluid>
                <Col>
                    {rendergoals()}
                </Col>


            </Container>
            
        </div>
        
        
    )
}
