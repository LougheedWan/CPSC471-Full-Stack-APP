import React from 'react'

function login() {
    return (
        <form>
            <div className = "form-inner">
                <h2 style = {{color: "white"}}> Login</h2>

                <div className = "form-group">
                    <label htmlFor="username">username: </label>
                    <input type="text" name= "username" id="username"/>
                </div>

                <div className = "form-group">
                    <label htmlFor="password">password: </label>
                    <input type="password" name= "password" id="password"/>
                </div>

                <input type = "submit" value = "submit"/>
            </div>
        </form>
    )
}

export default login
