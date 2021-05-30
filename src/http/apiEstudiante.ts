import axios from 'axios';
import
{ GET_ESTUDIANTES,
  ADD_ESTUDIANTE,
  DELETE_ESTUDIANTE
} from '../actions/estudianteAction'
import { Estudiante } from '../interfaces/estudiante';

export const getEstudiantes = () => async (dispatch:any) =>{
    axios
    .get(`http://localhost:4000/estudiantes`)
    .then((response) => {
      const data = response.data;
      dispatch({
        type: GET_ESTUDIANTES,
        payload: data
      });
    })
    .catch((error) => {
      console.log(error);
    });
} 

export const postEstudiante = (estudiante:Estudiante) => async (dispatch:any) =>{
  axios
  .post(`http://localhost:4000/estudiantes`, estudiante)
  .then((response) => {
    const data = response.data;
    estudiante["id"] = data
    dispatch({
      type: ADD_ESTUDIANTE,
      payload: estudiante
    });
  })
  .catch((error) => {
    console.log(error);
  });
} 

export const deleteEstudiante = (id:number) => async (dispatch:any) =>{
  axios
  .delete(`http://localhost:4000/estudiantes/${id}`)
  .then(() => {
    dispatch({
      type: DELETE_ESTUDIANTE,
      payload: id
    });
  })
  .catch((error) => {
    console.log(error);
  });
} 