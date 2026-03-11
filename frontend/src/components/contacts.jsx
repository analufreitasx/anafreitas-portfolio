import { useLanguage } from '../services/translation'
import { Trans } from "react-i18next"
import "../styles/contacts.css"


import { FaLinkedin, FaGithub, FaEnvelope, FaWhatsapp } from 'react-icons/fa'
import EmailForm from './EmailForm'  

const Contacts = () => {
    const { t, idioma, changeLanguage } = useLanguage()


    const items = [
        { href: 'www.linkedin.com/in/ana-luizadefreitas', label: 'Linkedin', icon: <FaLinkedin /> },
        { href: 'https://github.com/analufreitasx', label: 'Github', icon: <FaGithub /> },
        { href: 'mailto:analuizafreitas12@yahoo.com.br', label: 'Email', icon: <FaEnvelope /> },
        { href: 'https://wa.me/5531992688681', label: 'Whatsapp', icon: <FaWhatsapp /> },
    ];

    return (
        <div id="contact" className="contact-content">
            <h2>
                <span className="hashtag">#</span>{t("contact")}
            </h2>
            <p>{t("contato-resumo")}</p>
            <div className="contact-links">
                {items.map(item => (
                    <a
                        key={item.href}
                        href={item.href}
                        className="contact-link"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span className="icon">{item.icon}</span>
                        <span className="label">{item.label}</span>
                    </a>
                ))}
            </div>

            <EmailForm />
        </div>
    )
}

export default Contacts;