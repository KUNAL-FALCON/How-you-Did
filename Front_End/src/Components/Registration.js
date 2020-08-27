import React , {Component} from 'react';
import axios from 'axios';

class Register extends Component {

    state = {
        username : '' ,
        email : '' , 
        password : '' 
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
        
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        axios.post('http://localhost:5000/insert' , this.state).then(response => {
            if(response.data !== 0) console.log('Failed');
            else console.log("Accepted");
        })
    }
    render() {
        return(
            <div className = "container">
                <h4 className = "heflow-text">Sign Up</h4>
                <form onSubmit = {this.handleSubmit}>
                    <label className = "center ">UserName : </label>
                    <input type = "text" name = "username" onChange = {this.handleChange} ></input>
                    <label className = "center">Email : </label>
                    <input type = "email"  name = "email" onChange = {this.handleChange} ></input>
                    <label className = "center">Password : </label>
                    <input type = "password" name = "password" onChange = {this.handleChange} ></input>
                    <br/>
                    <button className = "btn waves-effect waves-light" type = "submit"> Sign In </button>
                </form>
            </div>
        )
    }
}
export default Register;