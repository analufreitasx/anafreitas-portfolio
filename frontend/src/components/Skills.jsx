import { useLanguage } from "../services/translation";
import "../styles/skills.css"

const Skills = () => {
    const { t } = useLanguage();

     const skillsData = [
        {
            titleKey: 'skills.skill-1-title',
            tech1: "TypeScript",
            tech2: " JavaScript",
            tech3: "Java",
            tech4: "C",
            tech5: "Swift",
        },
        {
            titleKey: 'skills.skill-2-title',
            tech1: "VSCode",
            tech2: " Figma",
            tech3: "Git",
            tech4: "Power Bi",
        },
        {
            titleKey: 'skills.skill-3-title',
            tech1: "React",
            tech2: " Next",
            tech3: "Tailwind",
            tech4: "Node.JS",
        },
        {
            titleKey: 'skills.skill-4-title',
            tech1: "MySQL",
        }
    ];

    return (
        <section className="skills-content">
            <h1 className="skills-title">
                <span className="skills-tag">#</span>
                {t("skills")}
            </h1>
            <div className="skills-grid">
                {skillsData.map((skill, index) => (
                    <div className="skill-card" key={index}>
                        <div className="skill-header">
                            <h3 className="skills-description">
                                {t(skill.titleKey)}
                            </h3>
                        </div>
                        <div className="skill-body">
                            <div class="skill-text"><span class="skill-name">{t(skill.tech1)}</span></div>
                            <div class="skill-text"><span class="skill-name">{t(skill.tech2)}</span></div>
                            <div class="skill-text"><span class="skill-name">{t(skill.tech3)}</span></div>
                            <div class="skill-text"><span class="skill-name">{t(skill.tech4)}</span></div>
                            <div class="skill-text"><span class="skill-name">{t(skill.tech5)}</span></div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;