import React, {useState} from 'react';
import "./Recruiter.css"

function Recruiter() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    let handleUserNameChange = (event) => {
        setUsername(event.target.value);
    }

    let handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }

    let handleFormSubmit = (event) =>{
        if(username === "recruiter" && password==="12345") {
            window.location.replace("/create-job");
        } else {
            window.alert("Invalid username or password!");
        }
        return false;
    }

    return (
        <div className="form-container">
            <div className="form">
                <p>Recruiter Login</p>
                <form>
                    <input type="text" placeholder="username" value={username} onChange={handleUserNameChange}/>
                    <input type="password" placeholder="password" value={password} onChange={handlePasswordChange}/>
                    <input type="button" value="Login" onClick={handleFormSubmit} />
                </form>
            </div>
        </div>
    )
}

export default Recruiter;