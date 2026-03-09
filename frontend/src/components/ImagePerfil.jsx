import "../styles/home.css"
import { useLanguage } from '../services/translation'
import foto from "../assets/PicturePerfil.jpg"

const ImagePerfil = () => {
  const { t, idioma, changeLanguage } = useLanguage()

  return (
               <div class="photo-container">
                    <div class="frame-outer"></div>
                    <div class="frame-inner"></div>
                    <div class="photo-placeholder">
                        <img src={foto} alt="Foto de perfil" className="photo-box" />
                    </div>
                    <div class="status-badge">
                        <span className="trabalhando-quadrado"></span>
                        <p>
                            {t("trabalhando-atualmente")} <strong>Portfólio</strong>
                        </p>
                    </div>
            </div>

)}

export default ImagePerfil;