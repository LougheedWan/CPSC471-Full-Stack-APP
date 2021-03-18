import React, {useState, useEffect} from 'react'
import {Form, Button, Card} from 'react-bootstrap'
import {Link, Redirect, useHistory} from 'react-router-dom'
import { Container } from 'react-bootstrap';
import Welcome from './Welcometext'
import Axios from 'axios';
import CurrentUser from '../contexts/CurrentUser';


export default function Login() {

    //user inputs
    const [UserName, setUserName] = useState('')
    const [Password, setPassword] = useState('')

    //database inputs
    var DatabasePassword;
    var authsuc = false;

    const history = useHistory();

    const routechangetomain = () => {
        let path = '/Main'
        history.push(path);
    }
    const authenticateuser = ()=> {
        Axios.post('http://localhost:3001/api/sendForUser',{
            userName: UserName,
        }).then((response) => {
            DatabasePassword = response.data;
            console.log(DatabasePassword[0][0].password);
            console.log(Password);
            if (DatabasePassword.length == 0){
                alert("NO USER");
            }
            else if (DatabasePassword[0][0].password === Password){
                CurrentUser.currentuser = DatabasePassword[0];
                //set localstorage data
                localStorage.setItem('currentusername', DatabasePassword[0][0].username);
                localStorage.setItem('currentpassword', DatabasePassword[0][0].password);
                localStorage.setItem('adminstate', DatabasePassword[0][0].Admin);
                console.log(CurrentUser.currentuser);
                authsuc = true;
                routechangetomain();
            
            }
            else {
                alert("wrong password");
            }
        }).catch(e => {
            alert("NO USER");
        })
    }
    return (
        <Container className = "d-flex align-items-center justify-content-center"
                style = {{minHeight: "100vh"}}>

            <Welcome/>
            <div className = "w-100" style = {{maxWidth: "400px"}}>
                <Card>
                    <Card.Body>
                        <h2 className = "text-center mb-4">Login</h2>
                        <Form>
                            <Form.Group id = "username">
                                <Form.Label>Username</Form.Label>
                                <Form.Control type = "text" required onChange={(e)=>{
                                    setUserName(e.target.value)}}></Form.Control>
                            </Form.Group>
                            
                            <Form.Group id = "password">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type = "password" required onChange={(e)=>{
                                    setPassword(e.target.value)}}></Form.Control>
                            </Form.Group>
                            
                            <Button className = "w-100" onClick = {() => {
                                authenticateuser();
                                
                            }}>Login </Button>
                        </Form>
                    </Card.Body>
                </Card>
                <div className = "w-100 text-center mt-2">
                    New Around Here?
                    <Link to= "/signup"> Sign up</Link>
                </div>

            </div>
         </Container>   
               
    )
}
