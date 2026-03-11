import { useLanguage } from '../services/translation'
import Skills from '../components/Skills.jsx'
import '../styles/about.css'
import stellantisLogo from "../assets/stellantis.png";
import konicaLogo from "../assets/KonicaMinolta.png"
import ImagePerfil from '../components/ImagePerfil.jsx'

const AboutMe = () => {
    const { t } = useLanguage()

    return (
        <>
            <section className="about-content">
                <h1 className="about-title">
                    <span className="about-tag">/</span>
                    {t('about')}
                </h1>

                <p className="about-subtitle">{t('about-subtitle')}</p>

                <div className="about-main">
                    <div className="about-bio">
                        <p>{t('about-paragraph-1')}</p>
                        <p>{t('about-paragraph-2')}</p>
                    </div>

                    <div className="about-photo-wrapper">
                        <ImagePerfil/>
                    </div>
                </div>
            </section>

            <Skills />

            <section className="experience-content">
                <h1 className="experience-title">
                    <span className="experience-tag">#</span>
                    {t('experience')}
                    <hr></hr>
                </h1>
                <div className="timeline">
                    <div className="container">
                        <div className="tl-dot">
                            <img src={stellantisLogo} alt="StellantisLogo"/>
                        </div>
                        <h2 className="enterpriseTitle text-gradient"> {t('enterprise-name-1')}</h2>
                        <div className="text-box">
                            <h2> {t('position-name-1')}</h2>
                            <div className="Data">
                                <small> 2025 - Presente</small>
                                <span className="badge-atual">ATUAL</span>
                            </div>
                            <p>{t('job-description-1')}</p>
                        </div>
                    </div>
                    <div className="container">
                        <div className="tl-dot">
                            <img src={konicaLogo} alt="GoogleLogo"/>
                        </div>
                        <h2 className="enterpriseTitle text-gradient"> {t('enterprise-name-2')}</h2>
                        <div className="text-box">
                            <h2> {t('position-name-2')}</h2>
                            <small> 2024-2026</small>
                            <p>{t('job-description-2')}</p>
                        </div>
                    </div>
                </div>
            </section>
            </>
    )
}

export default AboutMe
