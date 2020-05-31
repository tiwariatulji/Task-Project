import React from 'react';

const Header = () => {
  const userName = localStorage.getItem('email');
  function logout() {
    localStorage.removeItem('email');
    window.location.href = '/';
  }
  return (
    <header>
      { userName ? userName : 'Login' } &nbsp;&nbsp;
      { userName && <button onClick={logout}>Logout</button>}
    </header>
  );
}
 
export default Header;