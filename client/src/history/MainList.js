import React, {useEffect, useState} from 'react'
import { ListGroup, ListGroupItem } from 'react-bootstrap'
import Axios from 'axios'

export default function MainList() {

    const [userhistory, setuserhistory] = useState([]);
    const [isLoading, setLoading] = useState(true);
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
                return (
                    <ListGroupItem class= 'list-group-item-dark'>
                        <h5 style={{display: 'inline', paddingRight: '20px'}}>Date: <h6 style={{display:'inline'}}>{d.getMonth()+1}-{d.getDate()}-{d.getFullYear()} </h6></h5>
                        <h5 style={{display: 'inline', paddingRight: '20px'}}>Daily Amount Spent: <h6 style={{display:'inline'}}>{val.DailySpend}</h6></h5>
                        <h5 style={{display: 'inline', paddingRight: '20px'}}>Daily Amount Saved: <h6 style={{display:'inline'}}>{val.DailySave}</h6></h5>

                    </ListGroupItem>  
                );
                })}
                 
            </ListGroup> 
        </div>
    )
}
