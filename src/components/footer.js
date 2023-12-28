import React from "react"
import { ReactComponent as TwitchLogo} from "../assets/logos/twitch-logo.svg";
import { ReactComponent as LinkedinLogo} from "../assets/logos/linkedin-logo.svg";
import { ReactComponent as GitHubLogo} from "../assets/logos/github-logo.svg";
import { Link } from "react-router-dom";

const Footer = () => <footer className="page-footer mt-auto pt-4 bg-dark text-white">
    <div className="container-fluid text-center text-md-left">
        <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
                <h5 className="text-uppercase">Pour plus d'information</h5>
                <br/>
                <p>Pour toute information complémentaire vous pouvez me contacter
                    via les liens suivants.
                </p>
            </div>

            <hr className="clearfix w-100 d-md-none pb-0"/>

            <div className="col-md-6 mb-md-0 mb-3">
                <h5 className="text-uppercase">Links</h5>
                <br/>
                <ul className="list-unstyled">
                    <li>
                        <Link className="link-light link-underline-opacity-0 link-opacity-75-hover" to="https://www.twitch.tv/captainzeinn">
                            Twitch <TwitchLogo/>
                        </Link>  
                    </li>
                    <br/>
                    <li>
                        <Link className="link-light link-underline-opacity-0 link-opacity-75-hover" to="https://www.linkedin.com/in/florian-chatelot-a11475194/">
                            Linkedin <LinkedinLogo/>
                        </Link>  
                    </li>
                    <br/>
                    <li>
                        <Link className=" link-light link-underline-opacity-0 link-opacity-75-hover" to="https://github.com/FChatelot">
                            GitHub <GitHubLogo/>
                        </Link>  
                    </li>

                </ul>
            </div>

        </div>
    </div>

    <div className="footer-copyright text-center py-3">© 2023 Copyright
        Florian Chatelot
    </div>

</footer>

export default Footer