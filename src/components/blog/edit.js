import React, {useState, useEffect} from "react";
import {useParams, useNavigate} from "react-router-dom";

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
            const response= await fetch(`http://localhost:4000/post/${id}`);
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
        await fetch(`http://localhost:4000/post/${params.id}`,{
            method:"PATCH",
            body:JSON.stringify(editedPost),
            headers:{
                "content-Type": "application/json"
            },
        });
        navigate("/blog");

    };
    return(
        <div>
            <h3>Update Post</h3>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor="title">Title:</label>
                    <input
                    type="text"
                    className="form-control"
                    id="title"
                    value = {form.title}
                    onChange={(e)=> updateForm({title: e.target.value})}
                    />

                </div>
                <div className="form-group">
                    <label htmlFor="content">Content:</label>
                    <input
                    type="text"
                    className="form-control"
                    id="content"
                    value = {form.content}
                    onChange={(e)=> updateForm({content: e.target.value})}
                    />
                </div>
                <br/>
                <div className="form-group">
                    <input
                    type="submit"
                    value="Update Post"
                    className="btn btn-primary"
                    />
                </div>
            </form>
        </div>
    );
};