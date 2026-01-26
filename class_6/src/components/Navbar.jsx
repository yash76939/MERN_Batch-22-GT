import { NavLink } from "react-router-dom"
import "./Navbar.css"

function Navbar() {
    return (
        <div>
            <ul>
               <NavLink to="/"> <li>Home</li></NavLink>
                 <NavLink to="/about"> <li>About</li></NavLink>
               <NavLink to="/all-card"> <li>All Cards</li></NavLink>
            </ul>
        </div>
    )
}

export default Navbar