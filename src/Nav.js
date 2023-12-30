import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <ul>
      <li><Link to="/dogs/whiskey">Whiskey</Link></li>
      <li><Link to="/dogs/duke">Duke</Link></li>
      <li><Link to="/dogs/perry">Perry</Link></li>
      <li><Link to="/dogs/tubby">Tubby</Link></li>
      <li><Link to="/dogs">Home Page</Link></li>

    </ul>
  );
}
// end

export default Nav;