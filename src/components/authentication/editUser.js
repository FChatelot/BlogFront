import React, {useState, useEffect} from "react";
import {useParams, useNavigate} from "react-router-dom";
export default function EditUser(){
const [formUser, setFormUser] = useState({
    login:"",
    password:"",
    users: [],
});

const params = useParams();
const navigate = useNavigate();
    useEffect(()=>{
        async function fetchData(){
            const id = params.id.toString()
            const response= await fetch (`http://localhost:4000/user/${params.id.toString()}`);
                if(!response.ok){
                    const message = `An error has occured: ${response.statusText}`;
                window.alert(message);
                return;
                }
                const user = await response.json();
                if (!user){
                    window.alert(`User with id ${id} not found`);
                    navigate("/");//edit when routes defined
                    return;
                }
                setFormUser(user);
        }
        fetchData();
        return;
    },[params.id, navigate]);

    function updateForm(value) {
        return setForm((prev) => {
          return { ...prev, ...value };
        });
      }
      async function onSubmit(e) {
        e.preventDefault();
        const editedUser = {
          login: formUser.login,
          password: formUser.password,
        };
        await fetch (`http://localhost:4000/user/${params.id}`,{
            method: "POST",
            body: JSON.stringify(editedUser),
            headers: {
            'Content-Type': 'application/json'
            },
        });
            navigate("/");
        }
        return (
            
                <div>
                    <h3>Update Record</h3>
                    <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <label htmlFor="login">Login: </label>
                        <input
                        type="text"
                        className="form-control"
                        id="login"
                        value={formUser.login}
                        onChange={(e) => updateForm({ login: e.target.value })}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password: </label>
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
                        value="Update User"
                        className="btn btn-primary"
                        />
                    </div>
                    </form>
            </div>
        )


}
