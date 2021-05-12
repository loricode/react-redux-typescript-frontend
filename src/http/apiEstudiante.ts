import axios from 'axios';
import { GET_ESTUDIANTES } from '../actions/estudianteAction'

export const apiEstudiante = () => async (dispatch:any) =>{
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