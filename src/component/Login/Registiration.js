import React, { Component} from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import LoginForm from "./LoginForm";



class RegistrationForm extends Component{
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            confirmPassword: '',
            isSubmitted: false,
            users: [],
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

        navigateToLogin = () => {
            this.props.history.push('/post');
        }

        onSubmit(e){
            e.preventDefault();
            let newArr = this.state.users;
            if (localStorage.getItem('users')) {
                newArr = JSON.parse(localStorage.getItem('users'));
            }
            let isExist = false;
            for (let i = 0; i < newArr.length; i++) {
                if (newArr[i].username.toLowerCase() === this.state.username.toLowerCase()) {
                    isExist = true;
                }
            }
            if (!isExist) {
               this.setState({
                    isSubmitted: true,

                })
                newArr.push({username: this.state.username, password: this.state.password,status:'loggedIn'});
                localStorage.setItem('users', JSON.stringify(newArr));
                 this.navigateToLogin();
            } else {


                alert("User already exist");

            }

        }

        onChange(e){
        const {name, value} = e.target;
        this.setState({[name]: value});
        }

    render(){
        return(
          <Form onSubmit={this.onSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Username</Form.Label>
                  <Form.Control type="text" name="username" placeholder="Enter username" onChange={this.onChange} required/>
                  {this.state.username.length<5&&<Form.Text className="text-muted">
                      The username must be 5 characters at least
                  </Form.Text>}
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" name="password" placeholder="Password" onChange={this.onChange} required />
                  {this.state.password.length<5&&<Form.Text className="text-muted">
                      The password must be 5 characters at least
                  </Form.Text>}
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control type="password" name="confirmPassword" placeholder="Confirm Password" onChange={this.onChange} required />
                  {this.state.password!==this.state.confirmPassword&&<Form.Text className="text-muted">
                      The password and confirm password must be the same
                  </Form.Text>}
              </Form.Group>
              {
                  this.state.password===this.state.confirmPassword&&<input  variant="primary" type="submit" value="Submit"/>
              }
              <p>already have an account? </p>
              <Link to="/login">Login</Link>
          </Form>
        )
    }
}

export default RegistrationForm;