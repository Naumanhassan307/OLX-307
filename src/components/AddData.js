
import {db} from "../config/Firebase"

function AddData(){
    const ctaAddHandler = async () => {
        let newData = {
            name : "new data", 
            no: 3
        }
        try {
            let res = await db.collection("Ads").add(newData)
            console.log("response ", res)
        } catch (error) {
            console.log("error", error)
        }
    }
    const ctaFetchHandler = async () => {
        
        try {
            let fetchData = await db.collection("Ads").get()

            let Array = [];
            fetchData.forEach((doc)=>{
                Array.push(doc.id)
            })
            
            console.log("Fetch data is =>", Array)
        } catch (error) {
            console.log("error", error)
        }
    }
    const ctaUpdateHandler = async () => {
        
        // try {
        //     let fetchData = await db.collection("Ads").get()

        //     fetchData.forEach((doc)=>{
        //         console.log("Fetch data is =>", doc)
        //     })
            
        // } catch (error) {
        //     console.log("error", error)
        // }
    }
    const ctaDelHandler = async () => {
        
        // try {
        //     let fetchData = await db.collection("Ads").get()

        //     fetchData.forEach((doc)=>{
        //         console.log("Fetch data is =>", doc)
        //     })
            
        // } catch (error) {
        //     console.log("error", error)
        // }
    }
    return(
        <>
        <button onClick={ctaAddHandler}>Add Data</button>
        <button onClick={ctaUpdateHandler}>Update Data</button>
        <button onClick={ctaDelHandler}>Del Data</button>
        <button onClick={ctaFetchHandler}>Fetch Data</button>
        </>
    )
}
export default AddData