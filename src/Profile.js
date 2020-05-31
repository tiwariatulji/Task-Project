import React from "react";

const initialState = {
  email: "",
  emailError: "",
};

export default class Profile extends React.Component {
  state = initialState;

  componentDidMount() {
    const isLoggedin = localStorage.getItem('email');
    if(!isLoggedin) window.location.href = '/';
    else {
       this.setState({ email: isLoggedin});
    }
  }

  handleChange = event => {
    this.setState({[event.target.name]:event.target.value})
  };

  validate = () => {
    let emailError = "";
    if (!this.state.email.includes("@")) {
      emailError = "invalid email";
    }
    if (emailError) {
      this.setState({ emailError });
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
      alert("User name changed successfully!");
      window.location.reload();
    }
  };

  render() {
    const {email} = this.state
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <h1>Update email</h1>
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
        </div><br />
        <button type="submit">Update User</button>
      </form>
    );
  }
}