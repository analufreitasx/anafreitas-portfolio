import { Link } from 'react-router-dom'
import { useLanguage } from '../services/translation'
import "../styles/home.css"
import Contacts from '../components/contacts.jsx'
import BestProjects from '../components/BestProjects.jsx'
import Skills from '../components/Skills.jsx'
import { MdLocationOn } from "react-icons/md";

import foto from "../assets/PicturePerfil.jpg"
import ImagePerfil from '../components/ImagePerfil.jsx'

const Home = () => {
    const { t, idioma, changeLanguage } = useLanguage()

    return (
        <div className="home-content">
            <div className="home-intro">
                <div className="home-infos">
                    <div className="home-container">
                        <h1 className="nome">{t("nome")}</h1>
                        <h3 className="profissao">{t("profissao")}</h3>
                    </div>

                    <div className="home-bottom">
                        <div className="cta-box">
                            <Link to="projects" className="cta-item">{t("veja-projetos")}</Link>
                            <a href="#contact" className="cta-item">{t("entre-em-contato")}</a>
                        </div>

                        <div className="location">
                            <MdLocationOn className="icon" />
                            <p>Belo Horizonte, MG - Brasil</p>
                        </div>
                    </div>
                </div>
                <ImagePerfil/>
            </div>

            <div className="best-projects-container"><BestProjects /></div>

            <div className="home-skills"><Skills /></div>

            <div className="contacts-container"><Contacts /></div>
        </div>
    );
};

export default Home;
