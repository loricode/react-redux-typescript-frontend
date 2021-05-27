import { GET_ESTUDIANTES, ADD_ESTUDIANTE} from '../actions/estudianteAction';
import { Estudiante } from '../interfaces/estudiante';

interface Action {
  type:string,
  payload:null
}

const initialStateEstudiante = {
  listaEstudiante:[] as Estudiante[],
}

export function estudianteReducer(state = initialStateEstudiante, action:Action) {
    switch (action.type) {
      case GET_ESTUDIANTES:
        return {
             listaEstudiante:action.payload,      
        }
      case ADD_ESTUDIANTE:
        return {
            listaEstudiante:[...state.listaEstudiante, action.payload]
        }
      default:
        return state
    }
}