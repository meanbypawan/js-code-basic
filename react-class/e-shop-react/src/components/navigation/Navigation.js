import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "../../redux-config/UserSlice";

function Navigation() {
    const {categoryList, isLoading, error} = useSelector((state)=>state.category)
    const {currentUser} = useSelector(state=>state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userSignOut = ()=>{
        dispatch(signOut()); 
    }
    
    return <>
        <div className="container-fluid bg-dark mb-30">
            <div className="row px-xl-5">
                <div className="col-lg-3 d-none d-lg-block">
                    <a
                        className="btn d-flex align-items-center justify-content-between bg-primary w-100"
                        data-toggle="collapse"
                        href="#navbar-vertical"
                        style={{ height: 65, padding: "0 30px" }}
                    >
                        <h6 className="text-dark m-0">
                            <i className="fa fa-bars mr-2" />
                            Categories
                        </h6>
                        <i className="fa fa-angle-down text-dark" />
                    </a>
                    <nav
                        className="collapse position-absolute navbar navbar-vertical navbar-light align-items-start p-0 bg-light"
                        id="navbar-vertical"
                        style={{ width: "calc(100% - 30px)", zIndex: 999 }}
                    >
                        <div className="navbar-nav w-100">
                            {!error && categoryList.map((category,index)=><a key={index} href="" className="nav-item nav-link">
                               {category.categoryName.toUpperCase()}
                            </a>)}
                        </div>

                    </nav>
                </div>
                <div className="col-lg-9">
                    <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-3 py-lg-0 px-0">
                        <a href="" className="text-decoration-none d-block d-lg-none">
                            <span className="h1 text-uppercase text-dark bg-light px-2">
                                Multi
                            </span>
                            <span className="h1 text-uppercase text-light bg-primary px-2 ml-n1">
                                Shop
                            </span>
                        </a>
                        <button
                            type="button"
                            className="navbar-toggler"
                            data-toggle="collapse"
                            data-target="#navbarCollapse"
                        >
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div
                            className="collapse navbar-collapse justify-content-between"
                            id="navbarCollapse"
                        >
                            <div className="navbar-nav mr-auto py-0">
                                <a href="index.html" className="nav-item nav-link active">
                                    Home
                                </a>
                                <Link to="/shop" className="nav-item nav-link">
                                    Shop
                                </Link>
                                <div className="nav-item dropdown">
                                    <a href="#"
                                        className="nav-link dropdown-toggle"
                                        data-toggle="dropdown">
                                        Pages <i className="fa fa-angle-down mt-1" />
                                    </a>
                                    <div className="dropdown-menu bg-primary rounded-0 border-0 m-0">
                                        <a href="cart.html" className="dropdown-item">
                                            Shopping Cart
                                        </a>
                                        <a href="checkout.html" className="dropdown-item">
                                            Checkout
                                        </a>
                                    </div>
                                </div>
                                <a href="contact.html" className="nav-item nav-link">
                                    Contact
                                </a>
                                {currentUser&&<Link onClick={userSignOut} className="nav-item nav-link">
                                    Sign out
                                </Link>}
                                {!currentUser&&<Link to="/signin" className="nav-item nav-link">
                                    Sign in
                                </Link>}
                            </div>
                            <div className="navbar-nav ml-auto py-0 d-none d-lg-block">
                                <a href="" className="btn px-0">
                                    <i className="fas fa-heart text-primary" />
                                    <span
                                        className="badge text-secondary border border-secondary rounded-circle"
                                        style={{ paddingBottom: 2 }}
                                    >0</span>
                                </a>
                                <Link to="/cart" className="btn px-0 ml-3">
                                    <i className="fas fa-shopping-cart text-primary" />
                                    <span
                                        className="badge text-secondary border border-secondary rounded-circle"
                                        style={{ paddingBottom: 2 }}
                                    >0</span>
                                </Link>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    </>
}
export default Navigation;