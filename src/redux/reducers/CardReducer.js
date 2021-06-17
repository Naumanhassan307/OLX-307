
import {
  ADD_CARD,
  FETCH_CARD,
  DEL_CARD,
  UPD_CARD,
} from "../constTypes/ConstType";



let initialState = {
    desc: "",
    detail: "",
    img : "",
    loc: "",
    price: "",
    newState:[]
}

function CardReducer(state = initialState, action){

    switch (action.type) {
      case ADD_CARD: {
        return {
          state: action.payload
        };
      }
      case FETCH_CARD: {
      return{
        ...state,
        newState: action.payload

       }
      //  return newData;
     
      }
      case DEL_CARD: {
        return {};
      }
      case UPD_CARD: {
        return {
            state: action.payload
        };
      }

      default:
        return state;
    }
}
export default CardReducer;