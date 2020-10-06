import React, {useState} from 'react';
import "./Recruiter.css";

function User() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    let handleUserNameChange = (event) => {
        setUsername(event.target.value);
    }

    let handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }

    let handleFormSubmit = (event) =>{
        if(username === "aspirant" && password==="12345") {
            window.location.replace("/search-jobs");
        } else {
            window.alert("Invalid username or password!");
        }
        return false;
    }

    return (
        <div className="form-container">
            <div className="form">
                <p>Aspirant Login</p>
                <form>
                    <input type="text" placeholder="username" value={username} onChange={handleUserNameChange}/>
                    <input type="password" placeholder="password" value={password} onChange={handlePasswordChange}/>
                    <input type="button" value="Login" onClick={handleFormSubmit}/>
                </form>
            </div>
        </div>
    )
}

export default User;