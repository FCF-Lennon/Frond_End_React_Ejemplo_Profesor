// en react se trabaja con componentes que pueden ser funciones o clases

function App (props) { 

  return (
    /* ocuparemos en jsx  el parametro props = propiedadeas para hacer referencia 
    a un atributo dentro de React.StrictMode en index.js desde una funcion*/

    <div className = "div">hola {props.name}</div>
  )
}      

/* se deben exportar todos los componentes para que puedan ser utilizados por 
otros componentes que tengan que importar el componente App */

export default App 