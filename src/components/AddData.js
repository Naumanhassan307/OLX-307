
// // import {db} from "../config/Firebase"

// import {useSelector, useDispatch } from "react-redux"


// import { UpdateCard, FetchCard } from "../redux/actions/Action";

// function AddData(){
// //     const ctaAddHandler = async () => {
// //         let newData = {
// //             name : "new data", 
// //             no: 3
// //         }
// //         try {
// //             let res = await db.collection("Ads").add(newData)
// //             console.log("response ", res)
// //         } catch (error) {
// //             console.log("error", error)
// //         }
// //     }
//     const ctaFetchHandler =  () => {
//         dispatch(FetchCard());
       
//     }


//     const dispatch = useDispatch()
//     const store = useSelector(store => store)

// //     const ctaUpdateHandler =  () => {
// //         console.log("Store in AddData  component update btn", store.CardReducer)
// //         let newObj = {
// //           desc: "This is a Bike NEW",
// //           detail: "This is the detail of the bike NEW",
// //           img: "-- NEW",
// //           loc: "lhr NEW",
// //           price: 3444400,
// //         };
// //         dispatch(UpdateCard(newObj));
        
// //     }


//     const ctaDelHandler =  () => {
//           console.log("Store data fetch ", store.CardReducer.initialState)
        
//     }
//     return(
//         <>
// {/* //         <button onClick={ctaAddHandler}>Add Data</button> */}
//         {/* <button onClick={ctaUpdateHandler}>Update Data</button> */}
//         <button onClick={ctaDelHandler}>store Data</button>
// //         <button onClick={ctaFetchHandler}>Fetch Data</button>
//          </>
//     )
// }
// export default AddData