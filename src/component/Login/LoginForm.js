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
        this.setState({
            isSubmitted: true
        })
        const {username, password} = this.state;
        let userArr = JSON.parse(localStorage.getItem('users'));

        let user = userArr.find(user => user.username === username && user.password === password);
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
            <div className="container">
                <Form onSubmit={this.handleSubmit.bind(this)}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" placeholder="Enter username" name="username" onChange={this.handleChange}/>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" name="password" onChange={this.handleChange}/>
                    </Form.Group>
                    <Button variant="primary" type="submit" className="w-25 mt-2">
                        Login
                    </Button>
                    <p className="mt-3"> Don't have an account?
                    <Link to="/register" className="text-decoration-none"> Sign up</Link>
                    </p>
                </Form>
            </div>
        )
    }
}
export default LoginForm