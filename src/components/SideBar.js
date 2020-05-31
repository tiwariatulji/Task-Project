import React from 'react';
import { Link } from "react-router-dom";

const Siderbar = () => {
  return (
    <aside>
      <Link to='/home'>Home</Link><br />
      <Link to='/profile'>Profile</Link>
    </aside>
  );
}
 
export default Siderbar;