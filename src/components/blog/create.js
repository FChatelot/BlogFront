import  React, {useState} from "react";
import {Link, useNavigate} from "react-router-dom";

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
        await fetch ("https://shielded-eyrie-12790-2606840fb7b6.herokuapp.com/post" ,{ //"http://localhost:4000/post" pour bosser en dev mode
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
        <div className="container-fluid p-5">
            <h3 className="text-toUpperCase">CREER UN NOUVEAU POST</h3>
            <form onSubmit={onSubmit}>
                <div className="form-group mt-4">
                    <label htmlFor="title">Titre:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="title"
                        value={form.title}
                        onChange={(e)=>updateForm({title: e.target.value})}
                    />
                </div>
                <div className="form-group mt-4">
                    <label htmlFor="content">Contenu:</label>
                    <input
                    type="text"
                    className="form-control"
                    id="content"
                    value={form.content}
                    onChange={(e)=>updateForm({content: e.target.value})}
                />
                </div>
                <div className="d-flex mt-4">
                    <div className="form-group">
                        <input
                        type="submit"
                        value="Creer Post"
                        className="btn btn-primary "
                        />
                    </div>
                    <button className="btn btn-secondary ms-3">
                        <Link className="nav-link" to="/blog">Retour</Link>
                    </button>
                </div>
            </form>
        </div>
    );

};