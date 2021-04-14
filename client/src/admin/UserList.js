import React, {useEffect, useState} from 'react'
import { ListGroup, ListGroupItem, Button } from 'react-bootstrap'
import Axios from 'axios'

export default function MainList() {

    const [userhistory, setuserhistory] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [user, setuser] = useState([]);
    
    const deleteuser = (u) => {
        console.log(u);
        Axios.post('http://localhost:3001/api/deleteuser', {
            userid: u,
        }).then((response)=>{
            console.log(response);
            alert("user deleted");
            window.location.reload();
        });
    }


    useEffect(()=>{
        Axios.get('http://localhost:3001/api/getallusers').then((response)=>{
            setuser(response.data);
            console.log(user);
            setLoading(false);
        });
    }, []);

    console.log(user);

    if(isLoading){
        return <div>Loading</div>;
    } 
    return (
        <div>
           <ListGroup style={{padding:"20px"}}>
               {user[0].map((val)=>{
                   var userID = val.ID;
                return (
                    <li class= ' list-group-item  d-flex justify-content-between'>
                        <h5 style={{display: 'inline', paddingRight: '20px'}}>User ID: {val.ID}</h5>
                        <h5 style={{display: 'inline', paddingRight: '20px'}}>Username: {val.username}</h5>
                        <h5 style={{display: 'inline', paddingRight: '20px'}}>Password: {val.password}</h5>
                        
                        <button key= {userID} type = "submit" class= "btn btn-danger" onClick={(e) => { if (window.confirm('Are you sure you would like to delete this user?')) deleteuser(userID)} }>delete</button>
                    </li>  
                );
                })}
                 
            </ListGroup> 
        </div>
    )
}
