import React, { Component } from 'react';

class Home extends Component {
  componentDidMount() {
    const isLoggedin = localStorage.getItem('email');
    if(!isLoggedin) window.location.href = '/';
  }
  render() {
    return (
      <div>
        <h1>Home Page</h1>
      </div>
    );
  }
}

export default Home;
