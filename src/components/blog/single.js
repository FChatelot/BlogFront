import React, {useEffect, useState} from "react";
import { useParams, useNavigate, Link } from "react-router-dom";


export default function SinglePost(){
    const [post, setPost] = useState({
        posts:[],
    });
    const params = useParams();
    const navigate = useNavigate();
    useEffect(()=>{
        async function fetchData(){
            //Ici je signale que je veux récupérer les paramètres de mes posts en fonction de l'id
            const id= params.id.toString();
            //Je définis l'url où je vais récupére mes données via l'id.
            const response= await fetch(`https://shielded-eyrie-12790-2606840fb7b6.herokuapp.com/post/${id}`);//`http://localhost:4000/post/${id}` en dev mode
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
            setPost(post);
            };
            //je fais ensuite un callback de notre fonction.
            fetchData();
            return;
        }, [params.id, navigate]);

        const title =post.title;
        const content = post.content;
        return(
            <div className="container-fluid p-4">
                    <h1 className="p-4">{title}</h1>
                    <div className="p-4">{content}</div>
                    <br/>
                <button className="btn btn-dark m-4"><Link className="nav-link" to="/blog">Retour</Link></button>
            </div>
        )
    }

