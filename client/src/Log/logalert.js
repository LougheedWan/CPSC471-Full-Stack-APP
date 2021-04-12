import React from 'react'
import { Alert, Button } from 'react-bootstrap'
import {Link, Redirect, useHistory} from 'react-router-dom'

export default function logchecker() {


    return (
        <div style = {{paddingTop: "10px", paddingLeft: "20px", paddingRight: "20px"}}>
            <Alert class = " alert alert-secondary" role ="alert" style ={{padding: "10px"}}>
                <h4 class="alert-heading">Woops!</h4>
                <p> Looks like you already logged for the day!</p>
                <hr></hr>
                <Link to = '/history' style = {{textAlign: 'center'}}>
                        <Button>Click here to see what you logged.</Button>
                    </Link>
            </Alert>
        </div>
    )
}
