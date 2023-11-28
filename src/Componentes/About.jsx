import React from "react";
import '../Estilos/estilos-about.css';

export function Proyectos(props) {
    return (
      <div className='contenedor-infodiv'>
        <img
          className='imagen-info'
          src={require(`../imagenes/imagen-${props.imagen}.jpg`)}
          alt='Foto de '
        />
        <div className='contenedor-texto-info'>
          <p className='titulo-info'>
            <strong>{ props.titulo }</strong></p>
          <p className='texto-info'>{ props.texto }</p>
          <p className='ubi-info'>{ props.ubi }</p>
        </div>
      </div>
    )
  }

export function Acercade() {
    return (
      <div className='contenedor-acercade'>
        <h1 className="titulo-acercade"><strong>Agricultura Inteligente</strong>&nbsp; en Chile:</h1>
        <div className="texto-acercade">
        <p>La agricultura inteligente en Chile se refiere a la aplicación de tecnologías avanzadas, como la telemetría, la inteligencia artificial y los sistemas de información geográfica, para optimizar la producción agrícola. Estas tecnologías permiten monitorear y gestionar de manera más eficiente los recursos naturales, como el agua y el suelo, así como mejorar la toma de decisiones en la planificación de cultivos y el manejo de plagas. Los beneficios de la agricultura inteligente en Chile incluyen el aumento de la productividad, la reducción del impacto ambiental, la optimización del uso de recursos y la mejora en la rentabilidad para los agricultores.
            En resumen, la agricultura inteligente en Chile busca modernizar y hacer más sostenible la producción agrícola a través de la implementación de tecnologías innovadoras, lo que conlleva beneficios tanto económicos como ambientales para el sector agrícola del país.</p>
        </div>
        <h1 className="titulo-proyectos">PROYECTOS</h1>
       <div className="divs-info-general">
            <Proyectos
            titulo='Plataforma de Agricultura de Precisión para Viñedos'
            imagen='precision'
            texto='Este proyecto utiliza tecnología de drones y sensores remotos para recopilar datos sobre el suelo y las plantas, lo que permite a los viticultores tomar decisiones más informadas sobre el riego, la fertilización y la gestión de plagas.'
            ubi='Valle de Colchagua, Región del Libertador General Bernardo O"Higgins'
            />

            <Proyectos
            titulo='Sistema de Monitoreo Inteligente para Cultivos de Frutas'
            imagen='monitoreo'
            texto='Este sistema utiliza sensores de humedad del suelo, estaciones meteorológicas y análisis de datos en la nube para optimizar el riego y la gestión de cultivos de frutas, como los arándanos y las cerezas.'
            ubi='Valle de Linares, Región del Maule'
            />

            <Proyectos
            titulo='Plataforma de Gestión Agrícola basada en IoT'
            imagen='ioit'
            texto='Esta plataforma integra sensores de campo, sistemas de riego automatizado y análisis de datos en tiempo real para mejorar la eficiencia operativa y la toma de decisiones en granjas de hortalizas y cultivos extensivos.'
            ubi='Región del Maule'
            />

            <Proyectos
            titulo='Uso de Drones para Monitoreo de Cultivos'
            imagen='drone'
            texto='Este proyecto emplea drones equipados con cámaras multiespectrales para realizar un seguimiento detallado del estado de los cultivos, identificar áreas de estrés vegetal y optimizar la aplicación de insumos agrícolas.'
            ubi='Valle de Casablanca, Región de Valparaíso'
            />
            
            <Proyectos
            titulo='Sistemas de Riego Inteligente con Control Remoto'  
            imagen='riego'
            texto='Este proyecto implementa sistemas de riego automatizado con capacidad de control remoto a través de dispositivos móviles, lo que permite a los agricultores ajustar el riego según las condiciones climáticas y las necesidades de los cultivos.'
            ubi='Valle del Elqui, Región de Coquimbo'
            />
        </div>
      </div>
    )
}