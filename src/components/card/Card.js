import {  Button } from "react-bootstrap";
import CustomizedDialogs from "./cardDetail/cardDetail"

import "./Card.css"
import c16 from "../../assets/c16.jfif"
function Card({cardCateg, cardDesc , cardDetail, cardLoc, cardPrice, cardTitle}) {
  return (
    <>
      <div className="main-card-div">
        <h4>{cardTitle}</h4>
        <div>
          <img src={c16} width="200px" height="250px" />
          <h2>PKR: {cardPrice}</h2>
          <p>{cardDesc} </p>
        </div>
        <div className="sub-div">
          <p>{cardLoc}</p> &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          {/* <Button className="card-btn">Detail</Button> */}
          <CustomizedDialogs
            cardTitle={cardTitle}
            cardPrice={cardPrice}
            cardCateg={cardCateg}
            cardDetail={cardDetail}
            cardLoc={cardLoc}
            cardDesc={cardDesc}
          />
        </div>
      </div>
      <br />
    </>
  );
}
export default Card;



       