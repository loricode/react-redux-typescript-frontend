import
{ GET_ESTUDIANTES,
  ADD_ESTUDIANTE,
  DELETE_ESTUDIANTE
} from '../actions/estudianteAction';
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
      case DELETE_ESTUDIANTE:
        return {        
            listaEstudiante:state.listaEstudiante
                 .filter((item:Estudiante) => item.id !== action.payload)
        }   
      default:
        return state
    }
}