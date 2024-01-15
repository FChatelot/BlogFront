import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import{ useDispatch, useSelector }from "react-redux";
import { useRegisterMutation } from "../../slices/userApiSlice";
import { setCredentials } from "../../slices/authSlice";
import {toast} from "react-toastify";
import Loader from "../loader";

export default function Register (){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
  
    const dispatch = useDispatch();
    const navigate = useNavigate();
  
    const [register, { isLoading }] = useRegisterMutation();
  
    const { userInfo } = useSelector((state) => state.auth);
  
    useEffect(() => {
      if (userInfo) {
        navigate("/");
      }
    }, [navigate, userInfo]);
  
    const submitHandler = async (e) => {
      e.preventDefault();
  
      if (password !== confirmPassword) {// notre confirmation d'un mot de passe identique.
        toast.error("Erreur: Merci d'inscrire un mot de passe identique.");
      } else {
        try {
          const res = await register({ name, email, password }).unwrap();
          dispatch(setCredentials({ ...res }));
          navigate("/");
        } catch (err) {
          toast.error(err?.data?.message || err.error);
        }
      }
    };
    return (
        <>
        <div className="container-fluid p-5">
            <div className="card p-4 bg-dark text-white " >
                <h3>S'inscrire</h3>
                <form onSubmit={submitHandler}>
                <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Pseudo:</label>
                        <input type="text" 
                        className="form-control" 
                        placeholder="Pseudo"
                        value={name} 
                        onChange={(e)=> setName(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email:</label>
                        <input type="email" 
                        className="form-control" 
                        placeholder="email"
                        value={email} 
                        aria-describedby="emailHelp" 
                        onChange={(e)=> setEmail(e.target.value)}/>
                        <div id="emailHelp" className="form-text text-white">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Mot de Passe:</label>
                        <input 
                        type="password" 
                        className="form-control" 
                        placeholder="Mot de passe"
                        value={password} 
                        onChange={(e)=> setPassword(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Confirmer mot de passe:</label>
                        <input 
                        type="password" 
                        className="form-control"
                        placeholder="Confirmer Mot de passe" 
                        value={confirmPassword} 
                        onChange={(e)=> setConfirmPassword(e.target.value)}/>
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" className="btn btn-primary">S'inscrire</button>
                </form>
                {isLoading && <Loader />}
                    <div className="p-5 d-flex justify-content-center">
                        Déja inscrit ?<Link className="ps-1" to="/login">Se connecter</Link>
                    </div>
            </div>
        </div>
        </>
    )
}
