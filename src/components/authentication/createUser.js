import React,{useState} from "react";
import {useNavigate} from "react-router-dom";

export default function CreateUser(){
    const [formUser, setFormUser] = useState({
        login: "",
        password: "",
    });
    const navigate = useNavigate();
    function updateForm(value){
        return setFormUser((prev)=>{
            return {...prev, ...value};
        });
    }
    async function onSubmit(e){
        e.preventDefault();
        const newUser = {...form};
        await fetch("http://localhost:4000/user/add",{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify(newUser),
        })
        .catch(error =>{
            window.alert(error);
            return;
        });
        setFormUser({login:"", password: ""});
        navigate("/");// modifier ici la route pour rediriger sur le profile.
    }

    return(
    <div>
        <h3>Create New Record</h3>
        <form onSubmit={onSubmit}>
        <div className="form-group">
            <label htmlFor="login">Login</label>
            <input
            type="text"
            className="form-control"
            id="login"
            value={formUser.login}
            onChange={(e) => updateForm({ login: e.target.value })}
            />
        </div>
        <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
            type="text"
            className="form-control"
            id="password"
            value={formUser.password}
            onChange={(e) => updateForm({ password: e.target.value })}
            />
       </div>
       <div className="form-group">
         <input
           type="submit"
           value="Create User"
           className="btn btn-primary"
         />
       </div>
       </form>
    </div>
    )

}