import React from "react";
import '../Estilos/estilos-nav.css';
import '../Componentes/About.jsx';

export function Nav() {
    return (
      <div className='contenedor-nav'>
        <ul>
            <li><a href="#acercade">Acerca de</a></li>
            <li><a href="">Proyectos</a></li>
            <li><a href="">M&M</a></li>
        </ul>
      </div>
    )
}