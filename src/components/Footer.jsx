import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer className="">
        <div className="contenedor ultima">
          <div className="siguenos">
            <p className="descripcion">Siguenos:</p>
            <div className="social">
              <a
                className="button_footer"
                href="https://www.facebook.com/profile.php?id=100093660517720&notif_id=1687100274217475&notif_t=page_user_activity&ref=notif"
                target="_blank"
              >
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a
                className="button_footer"
                href="https://wa.me/5521977058010"
                target="_blank"
              >
                <i class="fa-brands fa-whatsapp fa-lg"></i>
              </a>
              <a
                className="button_footer"
                href="mailto:mk_artesanais@gmail.com"
                target="_blank"
              >
                <i className="fab fa-google"></i>
              </a>
              <a
                className="button_footer"
                href="https://www.instagram.com/mk.culinaria.artesanal/"
                target="_blank"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a className="button_footer" href="#">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
          <div className="contacto">
            <p className="descripcion">Contacto</p>
            <div>
              <i className="fa-solid fa-house"></i> R. do Sulista, 812 - Campo
              Grande, Rio de Janeiro - RJ, 23098-630
            </div>
            <div>
              <i className="fa-solid fa-phone"></i> +55 21 97705-8010
            </div>
            <div>
              <i className="fa-solid fa-envelope"></i> mk_artesanais@gmail.com
            </div>
          </div>
        </div>
        <div className="ultima2">© 2023 Copyright: Juan Pablo Urgellés</div>
      </footer>
    </>
  );
};

export default Footer;
