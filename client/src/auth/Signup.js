import React, {useState, useEffect} from 'react';
import {Form, Button, Card, Alert} from 'react-bootstrap'
import {Link, useHistory} from 'react-router-dom'
import Welcome from './Welcometext'
import Axios from 'axios'
import { Container } from 'react-bootstrap';

function Signup() {

    const [UserName, setUserName] = useState('')
    const [Password, setPassword] = useState('')
    const [ConfPassword, setConfPassword] = useState('')
    const [Email, setEmail] = useState('')

    const history = useHistory();

    const routechangetologin = () => {
        let path = '/login'
        history.push(path);
    }

    const createUser = () => {
        Axios.post("http://localhost:3001/api/createuser",{
             userName: UserName,
             password: Password,
             email: Email,
        }).then(()=>{
            alert('created user');
            routechangetologin()
        }).catch(e => {
            console.log(e);
        });
    };
    
    return (

        
        <Container className = "d-flex align-items-center justify-content-center"
                style = {{minHeight: "100vh"}}>

            <Welcome/>
            <div className = "w-100" style = {{maxWidth: "400px"}}>

                
                <Card>
                    <Card.Body>
                        <h2 className = "text-center mb-4">Sign up</h2>
                        <Form>
                            <Form.Group id = "username">
                                <Form.Label>Create Username</Form.Label>
                                <Form.Control type = "text" required onChange={(e)=>{
                                    setUserName(e.target.value)
                                }}></Form.Control>
                            </Form.Group>
                            <Form.Group id = "email">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type = "email" required onChange={(e)=> {
                                    setEmail(e.target.value)
                                }}></Form.Control>
                            </Form.Group>
                            <Form.Group id = "password">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type = "password" required onChange={(e)=> {
                                    setPassword(e.target.value)
                                }}></Form.Control>
                            </Form.Group>
                            <Form.Group id = "passwordconf">
                                <Form.Label>Confirm Password</Form.Label>
                                <Form.Control type = "password" required onChange={(e)=> {
                                    setConfPassword(e.target.value)}}></Form.Control>
                            </Form.Group>
                            <Button className = "w-100" onClick = {() =>{
                                if (Password === ConfPassword){
                                    createUser()

                                }
                                else{
                                    alert("Passwords Do not Match");
                                }
                                
                            }}>Sign up </Button>
                        </Form>
                    </Card.Body>
                </Card>
                <div className = "w-100 text-center mt-2">
                    Already have an Account? 
                    <Link to= "/login"> Login</Link>
                </div>
            </div>
            

        </Container>
        
         
    )
}

export default Signup
