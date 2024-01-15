import{ Navigate, Outlet } from "react-router-dom";
import {useSelector} from "react-redux";
// la private route nous permet de sécuriser l'acces au profil. Si il n'y a pas de jeton, je ne peux pas y accéder en copiant le lien du profile.
const PrivateRoute = () => {
    const { userInfo } = useSelector((state) => state.auth);
    return userInfo ? <Outlet /> : <Navigate to='/login' replace />;
  };
  export default PrivateRoute;