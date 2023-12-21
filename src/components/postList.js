import React,{ useEffect, useState } from "react";
import { Link } from "react-router-dom";

//ici je configure la méthode GET qui nous permettra d'afficher nos différents posts.
//Chaque post proviendra de données stockées dans la base de données.
//à ce la je configure des routes qui vont nous permettre de modifier ou supprimer des posts.
const Post = (props)=>(
    <tr>
        <td>{props.post.title}</td>
        <td>{props.post.content}</td>
        <td>
            <Link className="btn btn-link" to={`/edit/${props.post._id}`}>Edit</Link>
            <button className="btn btn-Link"
                onClick={()=>{
                    props.deletePost(props.post._id);
                }}
                >
                Delete
                </button>
        </td>
    </tr>
);

// Je crée notre list de posts qui seront visibles par tout le monde.
export default function PostList(){
    const [posts, setPosts]= useState([]);// je créée un état qui permet de sélectionner notre collection de posts dans la bdd.
//avec l'effet ci-dessous je vais récupérer nos effets dans la base de données.
    useEffect(()=>{
        async function getPosts(){
            // je vais requeter nos posts.
            const response = await fetch(`http://localhost:4000/post/`);
            //si pas de réponse alors Erreur.
            if (!response.ok){
                const message = `An error occurred: ${response.statusText}`;
                window.alert(message);
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
        await fetch(`http://localhost:4000/post/${id}`,{
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
            <h3>Posts List</h3>
            <table className="table table-striped" style={{marginTop:20}}>
                <thead>
                    <tr>Title</tr>
                    <tr>Content</tr>
                </thead>
                <tbody>{postList()}</tbody>
            </table>
        </div>
    )
}