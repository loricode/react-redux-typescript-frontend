import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState} from 'react';
import {
  getEstudiantes, 
  postEstudiante,
  deleteEstudiante,
  getEstudiante,
  updateEstudiante
  
} from './http/apiEstudiante';
import { connect } from "react-redux"
import { Estudiante } from './interfaces/estudiante';


function App(
 {getEstudiantes, 
  stateEstudiante,
  postEstudiante,
  deleteEstudiante,
  getEstudiante,
  updateEstudiante}:any) {

  const [isCreate, setIsCreate ] = useState(true)
  const [{id, nombre, edad, telefono}, setState] = useState({
    id:'',
    nombre:'',
    edad:'',
    telefono:''
  })

  useEffect(() => {
    getEstudiantes();
  }, [getEstudiantes]);

 function addEstudiante(e:React.ChangeEvent<HTMLFormElement>){
   e.preventDefault();
   if(isCreate){
    postEstudiante({nombre, telefono, edad})
   }else{
    updateEstudiante({id, nombre, telefono, edad})  
   }
   setIsCreate(true)
   clearInputs()
 }

 function handleInputChange(name:string, value:string){
  setState({
     id,
     nombre,
     edad,
     telefono,
     [name]:value
  }) 
 }

 function removeEstudiante(id:string){
   if(window.confirm("¡Desea eliminar el registro!")){
     deleteEstudiante(id)
   }
 }

 function clearInputs(){
  setState({
    id:"",
    nombre:"",
    edad:"",
    telefono:"",
 })
 }

 function getOneEstudiante(id:string){
     getEstudiante(id).then((estudiante:Estudiante)=>{
     setIsCreate(false)
     setState(estudiante)
     console.log(estudiante)
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
             {isCreate ? "Add": "Edit"} 
            </button>
         </form>
        {stateEstudiante.listaEstudiante.map((item:Estudiante)=>(
         <div key={item.id}>
            <p>{item.nombre} - {item.edad} - {item.telefono}</p>
            <button style={{padding:11, backgroundColor:"red", color:"white"}}
                 onClick={() => removeEstudiante(item.id)}>
                 X
              </button>  
              <button style={{padding:11, backgroundColor:"green", color:"white"}}
                 onClick={() => getOneEstudiante(item.id)}>
                 Editar
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
  deleteEstudiante,
  getEstudiante,
  updateEstudiante
};

export default connect(mapStateToProps, mapDispatchToProps)(App);