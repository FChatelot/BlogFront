import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { ReactComponent as TwitchLogo} from "../assets/logos/twitch-logo.svg";
import { ReactComponent as LinkedinLogo} from "../assets/logos/linkedin-logo.svg";
import { ReactComponent as GitHubLogo} from "../assets/logos/github-logo.svg";
import { NavLink, Link,useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { useLogoutMutation } from "../slices/userApiSlice";
import { logout } from '../slices/authSlice';


export default function Navbar() {
        
  const { userInfo } = useSelector((state) => state.auth); //gere notre navigation si on est connecté ou non.

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [logoutApiCall] = useLogoutMutation();//appel de la fonction de déconnection/ supression du cookie.

  const logoutHandler = async () => {//fonction pour déconnecter notre utilisateur en supprimant le cookie de connection.
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate("/login");//quand on se log out on est redirigé sur la page login.
    } catch (err) {
      console.error(err);
    }
  };
    return(
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-3 text-uppercase " >
            <div className="container-fluid">
                    <NavLink className="navbar-brand" to ="/">
                        <div className="display-6 px-5 text-toUpperCase">M.E.R.N blog</div>
                    </NavLink>
                <button 
                className="navbar-toggler collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarCollapse"
                aria-controls="navbarCollapse"
                aria-expanded="false"
                aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className='collapse navbar-collapse' id="navbarCollapse">
                    <br/>
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item ">
                            <NavLink className="nav-link" to ="/blog">
                                Blog
                            </NavLink>
                        </li>
                        {userInfo ? (
                        <>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/profile">
                                Profil
                            </NavLink>
                        </li>
                        <li onClick={logoutHandler} className="nav-item pe-5">
                            <NavLink className="nav-link" to="/login">
                                Se deconnecter
                            </NavLink>
                        </li>
                        </>
                         ) : (
                        <>
                            < li className="nav-item ">
                                <NavLink className="nav-link" to="/register">
                                    S'inscrire
                                </NavLink>
                            </li>
                                < li  className="nav-item pe-5">
                                <NavLink className="nav-link" to="/login">
                                    Se connecter
                                </NavLink>
                            </li>
                        </>
                         )}
                        <br/>
                        <li className="nav-item d-flex">
                        <Link className="icon-link icon-link-hover p-1" to="https://www.twitch.tv/captainzeinn">
                            <TwitchLogo/>
                        </Link>  

                        <Link className="icon-link icon-link-hover p-1" to="https://www.linkedin.com/in/florian-chatelot-a11475194/">
                            <LinkedinLogo/>
                        </Link>  


                        <Link className="icon-link icon-link-hover p-1" to="https://github.com/FChatelot">
                            <GitHubLogo/>
                        </Link>  
                    </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
    );
    
};