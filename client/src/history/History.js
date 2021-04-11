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
    const [avgmonth, setavgmonth] = useState([]);
    useEffect(()=>{

        var d = new Date();

        var month = ('0'+(d.getMonth()+1)).slice(-2);

        Axios.all([

            Axios.post('http://localhost:3001/api/gethistory',{
            date: localStorage.getItem('todaydate'),
            userid: localStorage.getItem('currentID'),

            }),
            Axios.post('http://localhost:3001/api/gethistorymonth', {
                userid: localStorage.getItem('currentID'),
                monthno: month,
            }),

        ]).then(Axios.spread((response1, response2)=>{
            sethistory(response1.data);
            setavgmonth(response2.data);
            
            setLoading(false);
        
        }));

       
        

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
            <h1 class="display-1" style={{paddingLeft: '35px', paddingBottom:'30px'}}>History</h1>
            {renderalert()}
            <h3 style={{paddingLeft:"25px"}}>Total Current Monthly Amount Spent: {avgmonth[0][0]["SUM(DailySpend)"]} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Total Current Monthly Amount Saved: {avgmonth[0][0]["SUM(DailySave)"]}</h3>
            <List/>
        </div>
        
        
    )
}
