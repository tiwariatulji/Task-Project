import React from "react";

const initialState = {
  email: "",
  password: "",
  emailError: "",
  passwordError: ""
};

export default class Login extends React.Component {
  state = initialState;

  componentDidMount() {
    const isLoggedin = localStorage.getItem('email');
    if(isLoggedin) window.location.href = '/home';
  }

  handleChange = event => {
  this.setState({[event.target.name]:event.target.value})
  };

  validate = () => {
    let emailError = "";
    let passwordError = "";
    if (!this.state.email.includes("@")) {
      emailError = "invalid email";
    }
   if (!this.state.password>5){
       passwordError= "password Should must grater than 5"
   }
    if (emailError || passwordError) {
      this.setState({ emailError, passwordError });
      return false;
    }

    return true;
  };

  handleSubmit = event => {
    event.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      const { email,} = this.state;
     localStorage.setItem("email", email);
      console.log(this.state);
      // clear form
      this.setState(initialState);
      alert("Login Suscessfully");
      window.location.href = '/home';
    }
  };

  render() {
    const {email,password} = this.state
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <h1>User Login Form</h1>
        </div>
        <div>
        Email:  <input
            name="email"
            placeholder="email"
            value={email}
            onChange={this.handleChange}
          />
          <div style={{ fontSize: 12, color: "red" }}>
            {this.state.emailError}
          </div>
        </div><br/>

        <div>
      Password:    <input
            type="password"
            name="password"
            placeholder="password"
            value={password}
            onChange={this.handleChange}
          />
          <div style={{ fontSize: 12, color: "red" }}>
            {this.state.passwordError}
          </div>
        </div><br/>

        <button type="submit">Login</button>
      </form>
    );
  }
}