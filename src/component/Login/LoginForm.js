import React,{useState,useEffect} from 'react'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {Link,useHistory} from "react-router-dom";

const LoginForm = (e) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [LoggedInID, setLoggedInID] = useState(0);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (event) => {
        const {name, value} = event.target;
        if (name === 'username') {
            setUsername(value);
        } else if (name === 'password') {
            setPassword(value);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitted(true);
        let userArray = JSON.parse(localStorage.getItem('users'));
        let user = userArray.find(user => user.username === username && user.password === password);
        if(user){
            setLoggedInID(user.id);
            localStorage.setItem('loggedInID',1);
            history.push("/post");
        }
        else {
            alert("Invalid username or password");
        }

    }

    const history = useHistory();

    useEffect(() => {
        if(localStorage.getItem('loggedInID')){
            history.push("/post");
        }
    },[history]);

    return (
        <div className="login-form">
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="Enter username" name="username" value={username} onChange={handleChange}/>
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" name="password" value={password} onChange={handleChange}/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                <Link to="/register">
                    <Button variant="primary" type="button">
                        Register
                    </Button>
                </Link>
            </Form>
        </div>
    )
}
export default LoginForm