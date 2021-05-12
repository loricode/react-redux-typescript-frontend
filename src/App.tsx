import logo from './logo.svg';
import './App.css';
import { useEffect} from 'react';
import {apiEstudiante} from './http/apiEstudiante';
import { connect } from "react-redux"

function App({apiEstudiante, stateEstudiante}:any) {

  useEffect(() => {
    apiEstudiante();
  }, [apiEstudiante]);

  return (
    <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        {stateEstudiante.listaEstudiante.map((item:any, i:number)=>(
         <div key={i}>
            <p>{item.nombre} {item.edad}</p>
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
  apiEstudiante
};

export default connect(mapStateToProps, mapDispatchToProps)(App);