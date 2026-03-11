import { useLanguage } from "../services/translation";
import '../styles/projects.css'
import project1Image from '../assets/PsiPlus.png';
import project2Image from '../assets/RealConsult.png';
import project3Image from '../assets/PotentialSenior.jpg';
import project4Image from '../assets/portfolio.png';


const Projects = () => {
    const { t } = useLanguage()

    const projectsData = [
        {
            image: project1Image,
            techs: ['Java', 'TypeScript', 'React'],
            titleKey: 'projects.project-1-title',
            descKey: 'projects.project-1-description',
            github: 'https://github.com/analufreitasx/psiplus',
            demo: 'https://github.com'
        },
        {
            image: project2Image,
            techs: ['Java', 'JavaScript', 'Next'],
            titleKey: 'projects.project-2-title',
            descKey: 'projects.project-2-description',
            github: 'https://github.com/analufreitasx/realconsult',
            demo: 'https://github.com'
        },
        {
            image: project3Image,
            techs: ['HTML', 'JavaScript'],
            titleKey: 'projects.project-3-title',
            descKey: 'projects.project-3-description',
            github: 'https://github.com',
            demo: 'https://github.com'
        },

        {
            image:project4Image,
            techs: ['React', 'CSS'],
            titleKey: 'smallprojects.project-3-title',
            descKey: 'smallprojects.project-3-description',
            github: 'https://github.com/analufreitasx/anafreitas-portfolio',
            demo: 'https://github.com'
        }
    ];

    const smallProjectsData = [
        {
            techs: ['Java'],
            titleKey: 'smallprojects.project-1-title',
            descKey: 'smallprojects.project-1-description',
            github: 'https://github.com/analufreitasx/HackatonUniversit-rio.git',
            demo: 'https://github.com'
        },
        {
            techs: ['Java', 'JavaSwing'],
            titleKey: 'smallprojects.project-2-title',
            descKey: 'smallprojects.project-2-description',
            github: 'https://github.com/pucmg-aulas/roombookings-g1-noite-roombookingsg4',
            demo: 'https://github.com'
        }
    ];

    return (
        <section className="projects-content">
            <h1 className="projects-title">
                <span className="projects-tag">/</span>
                {t('projects.title')}
            </h1>

            <p className="projects-subtitle">{t('projects.subtitle')}</p>

            <h2 className="sub-projects-title">
                <span className="projects-tag">#</span>
                {t('projects.complete-projects')}
            </h2>

            <div className="projects-grid">
                {projectsData.map((project, index) => (
                    <div className="best-project-card" key={index}>
                        <img src={project.image} alt={t(project.titleKey)} className="best-project-image" />
                        <div className="project-techs">
                            {project.techs.map((tech, i) => (
                                <span className="project-tech" key={i}>{tech}</span>
                            ))}
                        </div>
                        <h3 className="project-title">{t(project.titleKey)}</h3>
                        <p className="project-description">{t(project.descKey)}</p>
                        <div className="project-links">
                            <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">&gt; GitHub</a>
                            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link">&gt; Demo</a>
                        </div>
                    </div>
                ))}
            </div>

            <h2 className="sub-projects-title">
                <span className="projects-tag">#</span>
                {t('projects.small-projects')}
            </h2>

            <div className="projects-grid">
                {smallProjectsData.map((project, index) => (
                    <div className="best-project-card" key={index}>
                        <div className="project-techs">
                            {project.techs.map((tech, i) => (
                                <span className="project-tech" key={i}>{tech}</span>
                            ))}
                        </div>
                        <h3 className="project-title">{t(project.titleKey)}</h3>
                        <p className="project-description">{t(project.descKey)}</p>
                        <div className="project-links">
                            <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">&gt; GitHub</a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
