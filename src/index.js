
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Button from './Button'; // importamos el boton desde nuestro componente button.js para ser utilizados por index.js
import Card from './Card';

const root = ReactDOM.createRoot(document.getElementById('root'));
let personas = [
  {nombre: 'Daniel', edad: '34', genero: 'masculino'},
  {nombre: 'Ivonne', edad: '21', genero: 'femenino'},
  {nombre: 'Tommy', edad: '34', genero: 'masculino'},
  {nombre: 'Paula', edad: '34', genero: 'femenino'}
];

root.render(
  /* inicializamos el boton dentro de la etiqueta React.StrictMode para que aparesca visible en nuestro DOM HTML */
  <React.StrictMode>
    <Card nombre="Juan" edad="24" genero="masculino"></Card>
    <Card nombre="Isabel" edad="45" genero="femenino"></Card>
    <Card nombre="Maria" edad="64" genero="femenino"></Card>
    <Card nombre="Jimmy" edad="14" genero="masculino"></Card>

    {personas.map(persona => {
      return <Card nombre= {persona.nombre} edad={persona.edad} genero={persona.genero}></Card>
    })};
          
    {/* <App name= "Jose Perez" />
    <Button  text="actualizar"/> 
    <Button  text="guardar"/>
    <Button  text="eliminar"/> */}

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
