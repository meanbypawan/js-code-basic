import { Link } from "react-router-dom";

function Navigation(){
    return  <ul className="nav bg-dark">
    <li className="nav-item">
      <Link className="nav-link text-white"  to="/">Home</Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link text-white" to="/about">About us</Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link text-white" to="/contact">Contact us</Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link text-white" to="/counter">Counter</Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link text-white" to="/eocounter">EOCounter</Link>
    </li>

    <li className="nav-item">
      <Link className="nav-link text-white" to="/signup">Signup</Link>
    </li>
  </ul>

}

export default Navigation;