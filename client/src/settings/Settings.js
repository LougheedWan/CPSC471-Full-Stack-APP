import React, {useEffect, useState} from 'react'
import { Nav, Navbar, Form, Button, Container, Row, Col, Card} from 'react-bootstrap'
import {Link, Redirect, useHistory} from 'react-router-dom'
import CurrentUser from '../contexts/CurrentUser'
import MainNavBar from '../contexts/NavBar'
import AdminNavBar from '../contexts/NavBarAdmin'
import Axios from 'axios'

export default function Settings() {

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
            <h1 class="display-1" style={{paddingLeft: '35px', paddingBottom:'30px'}}>Settings</h1>

            <Container fluid >
                <Col>
                </Col>
            </Container>

        </div>
        
        
    )
}
