import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
const User = (props) =>(
    //attention je dois encore modifier le get pour obtenir l'id 
    //et ne voir que l'user qui est connecté.
    // aussi je dois  rendre le password caché.
    <tr>
        <td>{props.user.login}</td>
        <td>{props.user.password}</td>
        <td>
            <Link className="btn btn-link" to={`/edit/${props.user._id}`}>Edit</Link>
            <button className="btn btn-link"
                onClick={() => {
                    props.deleteRecord(props.user._id);
                }}
                >
                Delete
                </button>
        </td>
    </tr>
);
export default function userProfile(){

    //il faut que je modifie le get afin d'obtenir l'id uniquement de notre utilisateur
    const [user, setUser] = useState([]);
    useEffect (()=>{
        async function getUser(id){//j'ai add un id on verra + tard
            const response = await fetch (`http://localhost:4000/user/${id}`);//j'ai add un id on verra + tard
            if (!response.ok) {
                const message = `An error occurred: ${response.statusText}`;
                window.alert(message);
                return;
        }
        const user = await response.json();
        setUser(user);
    }
    getUser();
    return;
    },[user.lenght]);

    async function deleteUser(id){
    await fetch (`http://localhost:4000/${id}`,{
        method: "DELETE"
    });
     const newUser = user.filter((el) => el._id !== id);
    setUser(newUser);
  }
}

//https://www.mongodb.com/languages/mern-stack-tutorial reprendre a recordList