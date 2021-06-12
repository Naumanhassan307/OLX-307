
import {ADD_CARD, FETCH_CARD,  DEL_CARD} from "../constTypes/ConstType"



let initialState = {
    desc: "This is a Bike",
    detail: "This is the detail of the bike",
    img : "--",
    loc: "lhr",
    price: 200
}

function CardReducer(state = initialState, action){

    switch (action.type){
        case ADD_CARD:{
            return{
                
            }

        }
        case FETCH_CARD:{
            return{

            }

        }
        case DEL_CARD:{
            return{

            }

        }
            
            
    
        default:
            return state;
    }
}
export default CardReducer;