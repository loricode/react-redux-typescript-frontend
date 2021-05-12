import { GET_ESTUDIANTES } from '../actions/estudianteAction';

interface Action {
  type:string,
  payload:null
}

const initialStateEstudiante = {
  listaEstudiante:[],
  nombre:'',
  edad:'',
  telefono:''
}

export function estudianteReducer(state = initialStateEstudiante, action:Action) {
    switch (action.type) {
      case GET_ESTUDIANTES:
        return {
             ...state,
             listaEstudiante:action.payload
        }
      default:
        return state
    }
}