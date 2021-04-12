import React, {useEffect, useState} from 'react'
import { ListGroup, ListGroupItem, Button } from 'react-bootstrap'
import Axios from 'axios'

export default function MainList() {

    const [userhistory, setuserhistory] = useState([]);
    const [isLoading, setLoading] = useState(true);

    const deletelog = (d) => {
        console.log(d);
        Axios.post('http://localhost:3001/api/deletelog', {
            userid: localStorage.getItem('currentID'),
            date: d,
        }).then((response)=>{
            console.log(response);
            alert("log deleted");
            window.location.reload();
        });
    }
    useEffect(()=>{
        Axios.post('http://localhost:3001/api/gethistorymain',{
            userid: localStorage.getItem('currentID'),
        }).then((response)=>{
            setuserhistory(response.data);
            setLoading(false);
           
        });

    }, []);

    console.log(userhistory);
    if(isLoading){
        return <div>Loading</div>;
    } 
    return (
        <div>
           <ListGroup style={{padding:"20px"}}>
               {userhistory[0].map((val)=>{
                 var d = new Date(val.Date);
                 var rd = d.getFullYear() + '-' +  (d.getMonth()+1) + "-" + d.getDate() 
                return (
                    <li class= ' list-group-item  d-flex justify-content-between'>
                        <h5 style={{display: 'inline', paddingRight: '20px'}}>Date: {d.getMonth()+1}-{d.getDate()}-{d.getFullYear()}</h5>
                        <h5 style={{display: 'inline', paddingRight: '20px'}}>Daily Amount Spent: {val.DailySpend}</h5>
                        <h5 style={{display: 'inline', paddingRight: '20px'}}>Daily Amount Saved: {val.DailySave}</h5>
                        
                        <button key= {rd} type = "submit" class= "btn btn-danger" onClick={(e) => { if (window.confirm('Are you sure you would like to delete this log?')) deletelog(rd)} }>delete</button>
                    </li>  
                );
                })}
                 
            </ListGroup> 
        </div>
    )
}
