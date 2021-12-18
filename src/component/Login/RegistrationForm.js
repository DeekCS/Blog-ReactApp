import React, { useState} from 'react';
import Form from "react-bootstrap/Form";
import { Link ,useHistory } from "react-router-dom";


const RegistrationForm = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [users] = useState([]);

    const history = useHistory();

    const onSubmit =(e) => {
        e.preventDefault();
        let newArray = [...users];
        if(localStorage.getItem("users")){
            newArray = JSON.parse(localStorage.getItem("users"));
        }
        let isExist = false;
        newArray.forEach(user => {
            if(user.username.toLowerCase() === username.toLowerCase()){
                isExist = true;
            }
        });
        if(isExist){
            alert("Username already exist");
        }else{
            if(password === confirmPassword){
                newArray.push({username, password});
                localStorage.setItem("users", JSON.stringify(newArray));
                history.push("/login");
            }else{
                alert("Password not match");
            }
        }
    }

    const onChange = (e)  => {
        if(e.target.name === "username"){
            setUsername(e.target.value);
        }else if(e.target.name === "password"){
            setPassword(e.target.value);
        }else if(e.target.name === "confirmPassword"){
            setConfirmPassword(e.target.value);
        }
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 mx-auto">
                    <div className="card">
                        <div className="card-body">
                            <h1 className="text-center pb-4 pt-3">
                                <span className="text-primary">
                                    <i className="fas fa-user-plus"/>
                                </span>
                                Register
                            </h1>
                            <Form onSubmit={onSubmit}>
                                <Form.Group controlId="formBasicUsername">
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control type="text" name="username" placeholder="Enter username" onChange={onChange}/>
                                </Form.Group>
                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" name="password" placeholder="Enter password" onChange={onChange}/>
                                </Form.Group>
                                <Form.Group controlId="formBasicConfirmPassword">
                                    <Form.Label>Confirm Password</Form.Label>
                                    <Form.Control type="password" name="confirmPassword" placeholder="Confirm password" onChange={onChange}/>
                                </Form.Group>
                                <button className="btn btn-primary btn-block">Register</button>
                            </Form>
                            <hr/>
                            <Link to="/login">Already have an account?</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}



export default RegistrationForm;