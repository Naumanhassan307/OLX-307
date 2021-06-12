
import {
  ADD_CARD,
  FETCH_CARD,
  DEL_CARD,
  UPD_CARD,
} from "../constTypes/ConstType";

import { db } from "../../config/Firebase";

export const AddCard=(data) =>{
    return {
      type: ADD_CARD,
      payload: data
    };
}
// export const FetchCard=() => async (dispatch) =>{
//    try {
//      let fetchData = await db.collection("Ads").get();

//      let Array = [];
//      fetchData.forEach((doc) => {
//        Array.push(doc.data());
//      });

//      console.log("Fetch data is =>", Array);

//      dispatch({
//        type: FETCH_CARD,
//        payload: Array,
//      });

//    } catch (error) {
//      console.log("error", error);
//    }
    
// }
// export const DelCard=(data) =>{
//     return {
//       type: DEL_CARD,
//       payload: data,
//     };
// }
// export const UpdateCard=(data) => async (dispatch) =>{


//   try {
//     console.log("Data comming from updHandler is", data)
//     let res = await db.collection("Ads").add(data);
//     console.log("response ", res.data());

//     dispatch({

      
//       type: UPD_CARD,
//       payload: res.data(),
    
//     })

//   } catch (error) {
//     console.log("error is=>". error)
//   }

    
// }