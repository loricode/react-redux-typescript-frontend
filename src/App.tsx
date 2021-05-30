import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState} from 'react';
import {getEstudiantes, postEstudiante, deleteEstudiante} from './http/apiEstudiante';
import { connect } from "react-redux"
import { Estudiante } from './interfaces/estudiante';

function App({getEstudiantes, stateEstudiante, postEstudiante, deleteEstudiante}:any) {

  const [{nombre, edad, telefono}, setState] = useState({
    nombre:'',
    edad:'',
    telefono:''
  })

  useEffect(() => {
    getEstudiantes();
  }, [getEstudiantes]);

 function addEstudiante(e:React.ChangeEvent<HTMLFormElement>){
   e.preventDefault();
   postEstudiante({nombre, telefono, edad})
   clearInputs()
 }

 function handleInputChange(name:string, value:string){
  setState({
     nombre,
     edad,
     telefono,
     [name]:value
  }) 
 }

 function removeEstudiante(id: number | undefined){
   if(window.confirm("¡Desea eliminar el registro!")){
     deleteEstudiante(id)
   }
 }

 function clearInputs(){
  setState({
    nombre:"",
    edad:"",
    telefono:"",
 })
 }

  return (
    <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
         <form onSubmit={addEstudiante}>
            <input 
               style={{padding:12}}
               placeholder="Nombre"
               name="nombre"
               onChange={(e)=> handleInputChange("nombre", e.target.value)}
               value={nombre}
            />
              <input 
               style={{padding:12}}
               placeholder="Edad"
               name="edad"
               onChange={(e)=> handleInputChange("edad", e.target.value)}
               value={edad}
            />
              <input 
               style={{padding:12}}
               placeholder="Télefono"
               name="telefono"
               onChange={(e)=> handleInputChange("telefono", e.target.value)}
               value={telefono}
            />
            <button style={{padding:12, backgroundColor:"blue", color:"white"}}>
              Add
            </button>
         </form>
        {stateEstudiante.listaEstudiante.map((item:Estudiante)=>(
         <div key={item.id}>
            <p>{item.nombre} - {item.edad} - {item.telefono}</p>
            <button style={{padding:11, backgroundColor:"red", color:"white"}}
                 onClick={() => removeEstudiante(item.id)}>
                 X
              </button>  
         </div>    
        ))}
    </div>
  );
}

const mapStateToProps = (state:any) => {
  return {
    stateEstudiante: state.estudianteReducer
  };
};

const mapDispatchToProps = {
  getEstudiantes,
  postEstudiante,
  deleteEstudiante
};

export default connect(mapStateToProps, mapDispatchToProps)(App);