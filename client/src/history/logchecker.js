import React from 'react'
import { Alert, Button } from 'react-bootstrap'
import {Link, Redirect, useHistory} from 'react-router-dom'

export default function logchecker() {


    return (
        <div style = {{paddingTop: "10px", paddingLeft: "20px", paddingRight: "20px"}}>
            <Alert class = " alert alert-secondary" role ="alert" style ={{padding: "10px"}}>
                <h4 class="alert-heading">Woops!</h4>
                <p> Looks as though you did not log your spending for the day! Want to do that now?</p>
                <hr></hr>
                <Link to = '/log' style = {{textAlign: 'center'}}>
                        <Button>Log Spending</Button>
                    </Link>
            </Alert>
        </div>
    )
}
