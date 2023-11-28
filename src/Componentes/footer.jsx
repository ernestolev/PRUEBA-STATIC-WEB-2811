import React from "react";
import '../Estilos/estilos-footer.css';

export function Footer() {
    return (
        <div className="container-footer">
            <div className="footer-item1">
                <h1 className="titulo-empresa">M&M</h1>
            </div>
            <div className="footer-item2">
                <div className="item2-redes-img">
                    <a href="https://www.facebook.com/planosmym">
                        <img
                            className="img-redes"
                            src={require(`../imagenes/imagen-fb-logo.png`)}
                            alt="imgred1" />
                    </a>
                    <a href="https://www.instagram.com/end.shirts/">
                        <img
                            className="img-redes"
                            src={require(`../imagenes/imagen-ig-logo.png`)}
                            alt="imgred2" />
                    </a>
                    <a href="https://www.linkedin.com/in/ernesto-marcelo-levano-585a48203/">
                        <img
                            className="img-redes"
                            src={require(`../imagenes/imagen-linkedin-logo.png`)}
                            alt="imgred3" />
                    </a>
                </div>
            </div>
        </div>
    )
}