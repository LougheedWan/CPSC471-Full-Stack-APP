import React, {useState, useEffect} from 'react'
import { Nav, Navbar, Form, Button, Container, Row, Col, Card} from 'react-bootstrap'
import {Link, Redirect, useHistory} from 'react-router-dom'
import CurrentUser from '../contexts/CurrentUser'
import MainNavBar from '../contexts/NavBar'
import AdminNavBar from '../contexts/NavBarAdmin'
import Userlist from './UserList'

export default function Admin() {
   
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
    return (
            
        <div>
            {renderadmin()}

            <Container fluid >
                <Row >
                    <Col>
                        <Userlist/>
                    </Col>
                </Row>
            </Container>

        </div>
        
        
    )
}

