import React, {useState, useEffect}from 'react'
import { Nav, Navbar, Form, Button} from 'react-bootstrap'
import {Link, Redirect, useHistory} from 'react-router-dom'
import CurrentUser from '../contexts/CurrentUser'
import MainNavBar from '../contexts/NavBar'
import AdminNavBar from '../contexts/NavBarAdmin'
import Logchecker from './logchecker'
import List from './MainList'
import Axios from 'axios'

export default function History() {

    
    const [isLoading, setLoading] = useState(true);
    const [todayhistory, sethistory] = useState([]);
    useEffect(()=>{
        Axios.post('http://localhost:3001/api/gethistory',{
            date: localStorage.getItem('todaydate'),
            userid: localStorage.getItem('currentID'),
        }).then((response)=>{
            sethistory(response.data);
            console.log(todayhistory);
            setLoading(false);
        });

    }, []);
   
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

    const renderalert = () => {
        console.log(todayhistory);
        if (todayhistory[0].length !=0){
           //console.log("EVERYTHING WORKS");
        }
        else{
            return(
                <Logchecker/>
            ) 
        }

    }
    if(isLoading){
        return <div>Loading</div>;
    } 
    return (
            
        <div>
            {renderadmin()}
            <h1 class="display-1" style={{paddingLeft: '35px'}}>History</h1>
            {renderalert()}
            
            <List/>
        </div>
        
        
    )
}
