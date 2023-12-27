import  React, {useState} from "react";
import {useNavigate} from "react-router-dom";

//Cette fonction va nous permettre de créer un nouveau post.
export default function Create(){
        //ici je créé mon composant de création
        //je stock dans un tableau les éléments
        //ces élkéments seront modifiés avec des fonction annexes. 
        const [form, setForm]= useState({
            title:"",
            content:"",
        });

        
    const navigate = useNavigate();
    //On va mettre a jour les propriétés de l'etat via cette fonction
    function updateForm(value){
        return setForm((prev)=>{
            return{...prev,...value};
        });
    };

//Cette fonction est utilisée pour appliquer des changements à notre DB
// On va créer un nouveau post lorqu'on soumet notre requete
    async function onSubmit(e){
        e.preventDefault();
        // Je stock dans cette variable les données de notre état form
        const newPost ={...form};
        //je récupère l'adresse serveur side ou je vais envoyer les données de la bd
        await fetch ("http://localhost:4000/post",{
            method:"POST",
            headers:{
                "Content-Type": "application/json",
            },
            body:JSON.stringify(newPost),
        })
        //en cas d'érreurs j'affiche un message d'erreur.
        .catch(error=>{
            window.alert(error);
            return;
        });
        //On oublie pas de définir les données qui seront modifiées à la soumissions de notre formulaire
        setForm({title:"", content:""});
        // Je définit ensuite notre navigation post soumission.
        navigate("/blog");
    };

    //formulaire pour renseigner les nouvelles informations de création de post.
    return(
        <div className="m-5">
            <h3>Create New post</h3>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor="title">Title:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="title"
                        value={form.title}
                        onChange={(e)=>updateForm({title: e.target.value})}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="content">Content:</label>
                    <input
                    type="text"
                    className="form-control"
                    id="content"
                    value={form.content}
                    onChange={(e)=>updateForm({content: e.target.value})}
                />
                </div>
                <div className="form-group">
                    <input
                    type="submit"
                    value="Create post"
                    className="btn btn-primary"
                    />
                </div>
            </form>
        </div>
    );

};