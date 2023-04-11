import { Component } from "react";
import { Link } from "react-router-dom";

class SideBar extends Component{
    render(){
        return <header class="tm-header" id="tm-header">
          <div class="tm-header-wrapper">
            <button class="navbar-toggler" type="button" aria-label="Toggle navigation">
              <i class="fas fa-bars"></i>
            </button>
            <div class="tm-site-header">
              <div class="mb-3 mx-auto tm-site-logo"><i class="fas fa-times fa-2x"></i></div>
              <h1 class="text-center">Xtra Blog</h1>
            </div>
            <nav class="tm-nav" id="tm-nav">
              <ul>
                <li class="tm-nav-item active">
                 <Link to="/" class="tm-nav-link">
                  <i class="fas fa-home"></i>
                  Home
                </Link></li>
                <li class="tm-nav-item">
                   <Link to="/about" class="tm-nav-link">
                     <i class="fas fa-pen"></i>
                     About us
                   </Link>
                </li>
                <li class="tm-nav-item">
                  <Link to="/contact" class="tm-nav-link">
                    <i class="fas fa-users"></i>
                    Contact us
                  </Link>
                </li>
                <li class="tm-nav-item">
                   <Link to="/counter" class="tm-nav-link">
                     <i class="fas fa-pen"></i>
                     Counter Demo
                   </Link>
                </li>

                <li class="tm-nav-item">
                   <Link to="/evenodd" class="tm-nav-link">
                     <i class="fas fa-pen"></i>
                     Even Odd Counter
                   </Link>
                </li>
                <li class="tm-nav-item">
                   <Link to="/student-list" class="tm-nav-link">
                     <i class="fas fa-pen"></i>
                     Student List
                   </Link>
                </li>
                <li class="tm-nav-item">
                   <Link to="/registration" class="tm-nav-link">
                     <i class="fas fa-pen"></i>
                     Registration 
                   </Link>
                </li>
              </ul>
            </nav>
            <div class="tm-mb-65">
              <a rel="nofollow" href="https://fb.com/templatemo" class="tm-social-link">
                <i class="fab fa-facebook tm-social-icon"></i>
              </a>
              <a href="https://twitter.com" class="tm-social-link">
                <i class="fab fa-twitter tm-social-icon"></i>
              </a>
              <a href="https://instagram.com" class="tm-social-link">
                <i class="fab fa-instagram tm-social-icon"></i>
              </a>
              <a href="https://linkedin.com" class="tm-social-link">
                <i class="fab fa-linkedin tm-social-icon"></i>
              </a>
            </div>
            <p class="tm-mb-80 pr-5 text-white">
              Xtra Blog is a multi-purpose HTML template from TemplateMo website. Left side is a sticky menu bar. Right side content will scroll up and down.
            </p>
          </div>
        </header>
    }
}
export default SideBar;
