
import {ADD_CARD, FETCH_CARD,  DEL_CARD} from "../constTypes/ConstType"


export const AddCard=(data) =>{
    return {
      type: ADD_CARD,
      payload: data
    };
}
export const FetchCard=(data) =>{
    return {
      type: FETCH_CARD,
      payload: data,
    };
}
export const DelCard=(data) =>{
    return {
      type: DEL_CARD,
      payload: data,
    };
}