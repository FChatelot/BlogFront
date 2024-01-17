import React, {useState, useEffect} from "react";
import {useParams, useNavigate, Link} from "react-router-dom";

export default function Edit(){
    const[form, setForm]= useState({
        title:"",
        content:"",
        posts:[],
    });
    const params = useParams();
    const navigate = useNavigate();
    //cet useEffect a pour effet d'assigner la data.
    useEffect(()=>{
        async function fetchData(){
            //Ici je signale que je veux récupérer les paramètres de mes posts en fonction de l'id
            const id= params.id.toString();
            //Je définis l'url où je vais récupére mes données via l'id.
            const response= await fetch(`https://shielded-eyrie-12790-2606840fb7b6.herokuapp.com/post/${params.id}`);
            if(!response.ok){
                //si je n'ai pas de réponse, un message d'erreur s'affiche et le processus s'arrete
                const message =`An error has occured:${response.statusText}`;
                window.alert(message);
                return;
            };
            //je stock dans une variable l'attente de la réponse.
            const post = await response.json();
            //Si j'ai une réponse mais pas l'id désiré, j'affiche un message d'erreur.
            if(!post){
                window.alert(`post with id ${id} not found`);
                navigate("/blog");
                return;
            };
            //j'applique ensuite notre requete à notre état.
            setForm(post);
        };
        //je fais ensuite un callback de notre fonction.
        fetchData();
        return;
    }, [params.id, navigate]);

    //je créé une nouvelle méthode pour mettre à jour l'état de nos props.
    //cette méthode sera mise en application dans notre formulaire.
    function updateForm(value){
        return setForm((prev)=>{
            return {...prev, ...value};
        });
    };
    //maintenant je vais configurer la soumission de notre demande.
    async function onSubmit(e){
        e.preventDefault();
        const editedPost={
            title: form.title,
            content: form.content,
        };
        //j'envoie ensuite une requete post pour pouvoir mettre a jour nos données dans la db.
        await fetch(`http://localhost:4000/post/${params.id}`||`https://shielded-eyrie-12790-2606840fb7b6.herokuapp.com/post/${params.id}`,{
            method:"PATCH",
            body:JSON.stringify(editedPost),
            headers:{
                "content-Type": "application/json"
            },
        });
        navigate("/blog");

    };
    return(
        <div className="container-fluid p-5">
            <h3 className="text-toUpperCase" >METTRE A JOUR POST</h3>
            <form onSubmit={onSubmit}>
                <div className="form-group mt-4">
                    <label htmlFor="title">Titre:</label>
                    <input
                    type="text"
                    className="form-control"
                    id="title"
                    value = {form.title}
                    onChange={(e)=> updateForm({title: e.target.value})}
                    />

                </div>
                <div className="form-group mt-4">
                    <label htmlFor="content">Contenu:</label>
                    <input
                    type="text"
                    className="form-control"
                    id="content"
                    value = {form.content}
                    onChange={(e)=> updateForm({content: e.target.value})}
                    />
                </div>
                <br/>
                
                <div className="d-flex mt-4">
                    <div className="form-group">
                        <input
                        type="submit"
                        value="Mettre à jour"
                        className="btn btn-primary"
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