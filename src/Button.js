
// para ocupar la funcion de React.Component se debe importar desde su biblioteca de React
import React from "react";


/* creamos una clase y le decimos a react com extends que esa clase va 
a heredar a traves del comando React.component las propiedades de los 
botones en React */

class Button extends React.Component { 
/* como es una clase se deben agragar un metodo que pueda retornar un valor, 
en este caso el metodo a utilizar es render que nos retornara el button en HTML */
    render() {
        return (
            // ocuparemos this.props cuando queramos referenciar a un atributo dentro de React.StrictMode en index.js desde una clase.
            <button>{this.props.text}</button>
        )
    }
};

// recordar que cada componente debe exportarse para poder ser utilizado por otros componentes en react
export default Button 