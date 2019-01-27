import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import axios from 'axios';

class LoginComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };

        this.change = this.change.bind(this);
        this.submit = this.submit.bind(this);
    }

    change(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submit(e) {
        e.preventDefault();
   
    fetch('http://localhost:8080/api/auth/signin', {
        //  Describes what the request will be
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            username: this.state.username,
            password: this.state.password
          })
      })
      .then(response => {
          console.log(response);
      }).catch(err => console.log(err));
    }

    


    render() {
        return (
            <div>
                <form onSubmit={e => this.submit(e)}>
                    <label>username</label>
                    <input type="text" name="username" onChange={e => this.change(e)} value={this.state.username} />

                    <label>password</label>
                    <input type="text" name="password" onChange={e => this.change(e)} value={this.state.password} />
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }

}

export default LoginComponent;
