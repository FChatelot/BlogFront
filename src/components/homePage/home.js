import React from "react";
import Marquee from"react-fast-marquee";
import { Link } from "react-router-dom";
import { ReactComponent as IExpress} from "../../assets/svg/express-icon.svg";
import { ReactComponent as Imongo} from "../../assets/svg/mongodb-icon.svg";
import { ReactComponent as Inode} from "../../assets/svg/nodejs-icon.svg";
import { ReactComponent as Ireact} from "../../assets/svg/react-icon.svg";
import CardBlog from "../../assets/img/blogCard.png";
import CardAuth from"../../assets/img/authCard.png";

function HeroBanner(){
return(
    <div className="container-fluid p-5">
        <h1 className="text-uppercase">Bienvenue sur mon Premier Site</h1>
        <p>Bienvenue sur la Version 2.0 de mon premier site, entièrement créé en Javascript. </p>
        <p>Ce site a été conçu grâce à React pour la partie Frontend et node.js et Express.js pour la partie Backend.
            <br/>
            En parallèle, le site est connecté à une base de données NoSQL MongoDB et le css est
            pris en charge principalement par bootstrap à qui l'on doit cette horrible navigation et ce manque de gout indéniable en ce qui concerne
            le choix des couleurs.
            (Je ne suis vraiment pas fan de bootstrap, mais il faut apprendre!)
        </p>
    </div>
)
}
function MarqueeMern(){
    return(
        <Marquee autoFill true className="bg-dark"> 
            <Imongo className="m-4"/>
            <IExpress className="m-4"/>
            <Ireact className="m-4"/>
            <Inode className="m-4"/>
        </Marquee>
    )
}
function History(){
    return(
        <div className="container-fluid p-5">
            <h2 className="text-uppercase">Qui-suis-je?</h2>
            <p>Mon nom est Florian Chatelot, étudiant développeur 
                FullStack en reconversion professionnelle via la plateforme 
                Icadémie.
                <br/>
                Bien qu'ayant étudié aussi le php en language Backend, 
                j'ai choisi de réaliser ce site pour gagner en expérience 
                en Javascrit et apprendre à utiliser le NoSQL ainsi que node.js et 
                Express.js. Ces technologies seront probablement très liés à mon futur en tant 
                que développeur. Je reste cependant très ouvert à l'apprentissage 
                de nouveaux language et le perfectionnement de ceux que j'ai déja 
                pratiqués. 
            </p>

            <h2 className="text-uppercase">Mon histoire</h2>
            <p>Mon parcours professionnel a débuté en 2018, faisant suite à l'obtention de mon Master 2 en Archéologie.
                Bien qu'extrèmement passionant enrichissant, le manque d'attractivité du secteur et l'arrivée du covid en 2020,
                je n'ai pas eu d'autre choix que d'abandonner ce métier. Ma recherche d'un nouvel emploi m'a rapidement conduit vers les métiers du numérique et les arts digitaux.
                Ma compagne se trouvant dans la même situation que moi, nous avons choisis de nous réorienter l'un après l'autre, ce qui l'a menée 
                à devenir ux/ui designer Freelance. Pour ma part c'est la programmation qui m'a pris au piège.
            </p>
            <h2 className="text-uppercase">De créateur de contenu à développeur</h2>
            <p>Avec l'arrivée du covid en 2020 c'est tout notre univers qui s'est écroulé. J'ai à ce moment là
                découvert la plateforme de streaming Twitch où je me suis alors découvert une passion pour la création
                de contenu. Attendant que ma compagne termine sa formation et trouve son premier emploi, j'ai pris un emploi
                alimentaire nous permettant de subvenir à nos besoins, tout en créant du contenu sur twitch et en me lançant progressivement
                dans l'apprentissage de languages de programmation. Ce qui nous amène finalement aujourd'hui à vous qui lisez ces quelques lignes.
            </p>
            <button className="btn btn-dark">
                <Link className="nav-link" to="https://www.twitch.tv/captainzeinn">
                    Découvrir ma chaine Twitch
                </Link>  
            </button>
        </div>
    )
}
function Projets(){
    return(
        <div className=" mb-3 bg-dark text-white p-4" >
            <div className="row g-0">
                <div className="col-md-8 p-4">
                    <h2 className="card-title">Les élements du site</h2>
                    <br/>
                    <h4>La V1:</h4>
                    <p className="card-text">Lors de la première version, le site disposait d'un blog simple permettant de creer, modifier, supprimer et voir les posts. 
                    J'y ai ensuite implanté un rate limiter permettant d'eviter de spammer la création de posts, empechant ainsi la base de données de crasher sous l'aflux 
                    massif de requetes!
                    </p>
                    <br/>
                     <button className="btn btn-light">   
                        <Link className="nav-link" to="/blog">
                            Accéder au blog
                        </Link>  
                    </button>
                </div>
                <div className="col-md-4 p-5">
                    <img src={CardBlog} className="img-fluid rounded" alt="cardblog"/>
                </div>
                <div className="col-md-8 p-4">
                    <h4>La V2:</h4>
                    <p className="card-text">Afin d'offrir plus de sécurité au blog, j'ai décidé d'implenter un systeme d'authentication ce qui a nécessité de changer la structure
                    de mon back et de mon front. J'ai en effet utilisé Mongoose pour maintenant traiter les infos de ma base de données alors que je ne l'utilisait pas pour les
                    posts du blog auparavant. D'autre part j'ai choisi volontairement de tester l'adaptabilité de mon back eu front en créant une structure différente du front
                    pour mes différentes requetes. Le blog utilise donc une méthode de fetch alors que le systeme d'authentication utilise react-redux-tookit.
                    </p>
                    <br/>
                     <button className="btn btn-light">   
                        <Link className="nav-link" to="/register">
                            S'inscrire
                        </Link>  
                    </button>
                    <br/>
                    <br/>
                    <p>Le site utilise maintenant un cookie de connexion. Bien qu'il ne soit pas possible d'obtenir le mot de passe, il est toute fois possible d'obtenir 
                        des données concernant le pseudo, l'id et l'email de l'utilisateur, ce qui constitue une faille de sécurité majeure qui devra être fixée dans la prochaine 
                        version.
                    </p>
                </div>
                <div className="col-md-4 p-5">
                    <img src={CardAuth} className="img-fluid rounded border" alt="cardblog"/>
                </div>
            </div>
        </div>
    )
}

function Next(){
    return (
    <div className="container-fluid p-5">
        <h2 className="text-uppercase">A venir</h2>
        <p>Afin de perfectionner cet espace de blog je prévois d'implanter 
            pour la v2 une fonctionnalité de connection avec un systeme 
            d'authentication ainsi qu'une page de gestion de profil, le tout
            fonctionnant de concert avec le blog. A celà sera ajouté un systeme 
            d'autorisation, donnant la permission ou non de supprimer, créer, éditer
             ou encore juste lire un post du blog. J'améliorerai aussi la sécurité 
             générale du site.
        </p>
    </div>
    )
}
export default function HomePage(){
    return(
        <main className="bg-dark-subtle text-dark">
            <section>
                <HeroBanner/>
                <MarqueeMern/>
            </section>
            <section>
                <History/>
            </section>
            <section>
                <Projets/>
            </section>
            <section>
                <Next/>
            </section>
        </main>
    )
}