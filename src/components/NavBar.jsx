import "./NavBar.css"
import {NavLink} from "react-router-dom"

const NavBar = () => {
    return (
      <nav>
        <ul className="navbar">
          <NavLink to="/" exact>
            <li>Home</li>
          </NavLink>
          <NavLink to="/about">
            <li>About</li>
          </NavLink>
          <NavLink to="/contact">
            <li>Contact</li>
          </NavLink>
        </ul>
      </nav>
    );
}

export default NavBar
