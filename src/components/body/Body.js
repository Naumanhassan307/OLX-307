
import {useDispatch, useSelector} from "react-redux"
import {FetchCard} from "../../redux/actions/Action"
import { useEffect, useState } from "react"


import Card from "../card/Card"
import "./body.css"


function Body(){
    const store = useSelector(store => store.CardReducer.newState)
    console.log("store data =>", store)
  

    const dispatch = useDispatch()
    
      
   
    useEffect(()=>{
     dispatch(FetchCard());

   }, [])
    

    return (
      <>
        
        <div className="bdy-dv">
          

          {store.map((item) => {
            return (
              <Card
                cardTitle={item.cardTitle}
                cardPrice={item.cardPrice}
                cardCateg={item.cardCateg}
                cardDetail={item.cardDetail}
                cardLoc={item.cardLoc}
                cardDesc={item.cardDesc}
              />
            );
          })}
        </div>
      </>
    );
}
export default Body;
