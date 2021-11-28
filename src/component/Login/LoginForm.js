import React from 'react'
// import './home.css'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";


class LoginForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: "" ,
            LoggedInID: false,
            isSubmitted:false
        }
    }

    handleChange = (e) => {
        const {name, value} = e.target;
        this.setState({[name]: value});
    }

    // to make sure the user is logged in
    componentDidMount() {
        if (localStorage.getItem("user")) {
            this.setState({
                LoggedInID: true
            })
        }
    }


    handleSubmit(e) {
        e.preventDefault();
        let userArr = JSON.parse(localStorage.getItem('users'));

        let user = userArr.find(user => user.username === this.state.username && user.password === this.state.password);
        if (user) {
            this.setState({LoggedInID: user.id, isSubmitted:true})
            console.log("Successfully")
            this.props.history.push('/post');
        }
        // if there no user in the local storage
        else {
            alert("Invalid username or password");
        }

    }

    render() {
        return (
                <Form onSubmit={this.handleSubmit.bind(this)}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" placeholder="Enter username" name="username" onChange={this.handleChange}/>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" name="password" onChange={this.handleChange}/>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Login
                    </Button>
                    <p> Don't have an account? </p>
                    <Link to="/register">Sign up</Link>
                </Form>
        )
    }
}
export default LoginForm