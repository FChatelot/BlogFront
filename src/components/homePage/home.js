import React from "react";
import Marquee from"react-fast-marquee";
import { ReactComponent as IExpress} from "../../assets/svg/express-icon.svg";
import { ReactComponent as Imongo} from "../../assets/svg/mongodb-icon.svg";
import { ReactComponent as Inode} from "../../assets/svg/nodejs-icon.svg";
import { ReactComponent as Ireact} from "../../assets/svg/react-icon.svg";

function HeroBanner(){
return(
    <div className="container-fluid p-5">
        <h1>Bienvenue sur mon Premier Site FULLSTACK</h1>
        <p>Bienvenue sur la Version 1.0 de mon premier site, entièrement créé en Javascript. </p>
        <p>Pour concevoir ce site j'ai fait appel à l'ensemble de technologies M.E.R.N</p>
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

export default function HomePage(){
    return(
        <main className="bg-warning text-dark">
            <section>
                <HeroBanner/>
                <MarqueeMern/>

            </section>
            <section>
                
            </section>
        </main>
    )
}