import './Card.css';

function Card (props) {
    return (

        /* recordar que no se puede usar class dentro de la etiqueta html 
        para referencia a la etiqueta con una clase porque class es una palabra 
        reservada de jsx ahora se debe ocupar className */

        
        <div id="container" className={props.genero == 'femenino' ? 'femenino' : 'masculino'}>
            <div>Nombre: {props.nombre}</div>
            <div>Edad: {props.edad}</div>
            <div>Genero: {props.genero}</div>
        </div>
    )
};

export default Card;