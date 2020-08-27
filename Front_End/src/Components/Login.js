import React , {Component} from 'react';
import axios from 'axios';

class Login extends Component {
    state = {
        username : '' ,
        email : '',
        password : ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/login' , this.state)
        .then(response => {
            console.log(response);
            if(response.data !== 1) console.log('Failed');
            else console.log("Accepted");
        })
    }
    render() {
        return(
            <div className = "container">
                <form onSubmit = {this.handleSubmit}>
                    <h4>Log In</h4>
                    <label className = "center ">UserName : </label>
                    <input type = "text" name = "username" onChange = {this.handleChange} ></input>
                    <label className = "center">Password : </label>
                    <input type = "password" name = "password" onChange = {this.handleChange} ></input>
                     <br/>
                    <button className = "btn waves-effect waves-light" type = "submit"> Logn In </button>
                </form>
            </div>
        )
    }
}
export default Login;