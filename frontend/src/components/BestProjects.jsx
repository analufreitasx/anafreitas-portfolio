import { Link } from 'react-router-dom'
import { useLanguage } from "../services/translation";
import "../styles/bestprojects.css"
import project1Image from '../assets/PsiPlus.png';
import project2Image from '../assets/RealConsult.png';
import project3Image from '../assets/PotentialSenior.jpg';

const BestProjects = () => {
    const { t } = useLanguage();

    const bestProjectsData = [
        {
            image: project1Image,
            techs: ['Java', 'TypeScript', 'React'],
            titleKey: 'projects.project-1-title',
            descKey: 'projects.project-1-description',
            github: 'https://github.com/analufreitasx/psiplus'
        },
        {
            image: project2Image,
            techs: ['Java', 'JavaScript', 'Next'],
            titleKey: 'projects.project-2-title',
            descKey: 'projects.project-2-description',
            github: 'https://github.com/analufreitasx/realconsult'
        },
        {
            image: project3Image,
            techs: ['HTML', 'JavaScript'],
            titleKey: 'projects.project-3-title',
            descKey: 'projects.project-3-description',
            github: 'https://github.com',
            demo: 'https://github.com'
        }
    ];

    return (
        <section className="best-projects-content">
            <div className="best-projects-header">
                <h2 className="best-projects-title">
                    <span className="projects-tag">#</span>
                    {t("projects.best-projects")}
                </h2>
                <Link to="projects" className="all-projects">{t("ver-todos")}</Link>
            </div>

            <div className="projects-grid">
                {bestProjectsData.map((project, index) => (
                    <div className="best-project-card" key={index}>
                        <img
                            src={project.image}
                            alt={t(project.titleKey)}
                            className="project-image"
                        />

                        <div className="best-project-techs">
                            {project.techs.map((tech, i) => (
                                <span className="best-project-tech" key={i}>
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <div className="body-card">
                            <h3 className="project-title">
                                {t(project.titleKey)}
                            </h3>

                            <p className="best-project-description">
                                {t(project.descKey)}
                            </p>

                            <div className="project-links">
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="best-project-link"
                                >
                                    &gt; GitHub
                                </a>

                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default BestProjects;