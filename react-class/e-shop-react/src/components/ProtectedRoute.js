import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function ProtectedRoute({children}){
    const {currentUser} = useSelector(state=>state.user);
    if(!currentUser)
      return <Navigate to="/signin"/>
    return children;
}

export default ProtectedRoute;