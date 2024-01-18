import React,{ useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {useSelector} from "react-redux";

//ici je configure la méthode GET qui nous permettra d'afficher nos différents posts.
//Chaque post proviendra de données stockées dans la base de données.
//à ce la je configure des routes qui vont nous permettre de modifier ou supprimer des posts.
const Post = (props)=>(
    <tr>
        <td className="p-4"><Link to={`/single/${props.post._id}`} state={{id : props.post._id}}>{`${props.post.title.substring(0,15)}...`}</Link></td>
        <td className="p-4">{`${props.post.content.substring(0,12)}...`}</td>
        <td>
            <Link className="btn btn-dark mt-2" to={`/edit/${props.post._id}`}>Editer</Link>
            <button className="btn btn-danger mt-2"
                onClick={()=>{
                    props.deletePost(props.post._id);
                }}
                >
                Supprimer
                </button>
        </td>

    </tr>
);

// Je crée notre list de posts qui seront visibles par tout le monde.
export default function PostList(){
    const [posts, setPosts]= useState([]);// je créée un état qui permet de sélectionner notre collection de posts dans la bdd.
//avec l'effet ci-dessous je vais récupérer nos effets dans la base de données.
    const { userInfo } = useSelector((state) => state.auth);
    useEffect(()=>{
        async function getPosts(){
            // je vais requeter nos posts.
            const response = await fetch(`https://shielded-eyrie-12790-2606840fb7b6.herokuapp.com/post/`);//`http://localhost:4000/post/` en dev mode
            //si pas de réponse alors Erreur.
            if (!response.ok){
                const message = `An error occurred: ${response.statusText}`;
                console.error(message);
                return;
            }
            //je stock dans notre variable notre réponse.
            const posts = await response.json();
            //j'appelle notre état afin de récupérer nos posts.
            setPosts(posts);
        }
        //je fais un call back de notre fonction qui nous permettra de voir nos posts.
        getPosts();
        return;
    }, [posts.lenght]);

    //je créé maintenant une méthode pour supprimer nos posts.
    async function deletePost(id){
        //je récupère l'id du post que je veux supprimer
        await fetch(`https://shielded-eyrie-12790-2606840fb7b6.herokuapp.com/post/${id}`,{ // `http://localhost:4000/post/${id}` en dev mode
            //j'y ajoute la méthode de supression.
            method: "DELETE"
        });
        const newPosts = posts.filter((el)=>el._id !== id);
        setPosts(newPosts);
    }
    // avec la méthode suivante j'instaure le mappage de nos précédentes méthodes.
    function postList(){
        return posts.map((post)=>{
            return(
                <Post
                post = {post}
                deletePost = {()=>deletePost(post._id)}
                key =  {post._id}
                />
            );
        });
    }
    
    // Je créé ensuite la section html qui va recueillir nos posts.*
    return(
        <div>
                {userInfo ?
                (
                    <>
                        <div className="d-flex justify-content-between p-4 ">
                            <h3>LISTE DE POSTS</h3>         
                            <Link className="btn btn-primary" to="/create">
                                Nouveau Post
                            </Link>
                        </div>
                        <div className="container-fluid">
                            <table className="table table-hover " style={{marginTop:20}}>
                                <thead >
                                    <tr>
                                        <th className="bg-dark-subtle p-4">Titre</th>
                                        <th className="bg-dark-subtle p-4">Contenu</th> 
                                    </tr>
                                </thead>
                                <tbody className="table-group-divider">{postList()}</tbody>
                            </table>
                        </div>
                    </>
                ):(
                    <>
                    <div className="card  m-5 p-5">
                        <h3 className="text-uppercase">Authentification nécessaire</h3>
                        <p>
                                    Il est nécessaire d'être connecté pour accéder au blog.
                        </p>
                            <div className="d-flex">
                                <Link className="btn btn-dark " to="/login">
                                        Se connecter
                                </Link>
                            </div>
                    </div>
                    </>
                )}
        </div>
    )
}