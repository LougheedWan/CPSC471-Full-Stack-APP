import React from 'react'
import { Nav, Navbar, Form, Button, Container, Row, Col, Card} from 'react-bootstrap'
import {Link, Redirect, useHistory} from 'react-router-dom'
import CurrentUser from '../contexts/CurrentUser'
import MainNavBar from '../contexts/NavBar'
import AdminNavBar from '../contexts/NavBarAdmin'
import Goals from './Goalscard'
import NoGoals from './NoGoalsCard'
import Log from '../Log/LogMain'

export default function Main() {
   
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

    const getun = () => {
        const un = localStorage.getItem('currentusername');
        return un;
    }
    return (
            
        <div>
            {renderadmin()}
            <h1 style = {{textAlign: 'center', paddingTop: '15px', paddingBottom: '50px',fontWeight: 'bold'}} >Welcome Back {getun()}! </h1>
            
            <Container fluid >
                <Row >
                    <Col> 
                      <NoGoals/>
                    </Col>
                    <Col>
                        <Log/>
                    </Col>
                    <Col>
                        <Goals/>
                    </Col>
                </Row>
                <Row>
                    
                    
                </Row>

            </Container>
           
        </div>
        
        
    )
}
