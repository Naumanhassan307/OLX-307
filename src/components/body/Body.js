
import {useDispatch, useSelector} from "react-redux"
import {FetchCard} from "../../redux/actions/Action"
function Body(){
    const store = useSelector(store => store.CardReducer.initialState)
    const dispatch = useDispatch()
    
        

    const ctaFHandler= () =>{
        dispatch(FetchCard());

        console.log("Data is fetched from DB");
    }
    const ctaHandler= () =>{
        console.log("store data =>", store)
    }
    return(
        <>
        <button onClick={ctaFHandler}>Get DB data</button>
        <button onClick={ctaHandler}>Get store data</button>
        </>
    )
}
export default Body;