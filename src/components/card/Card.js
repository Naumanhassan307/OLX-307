import {  Button } from "react-bootstrap";
import "./Card.css"
import c16 from "../../assets/c16.jfif"
function Card() {
  return (
    <>
    <div className="main-card-div">
      <div>
        <img src={c16} width="200px" height="250px" />
        <h2>Price</h2>
        <p>Hello world</p>
      </div>
      <div className="sub-div">
        <p>Location</p>
        <Button className="card-btn">Detail</Button>
      </div>
    </div>
    <br />
    </>
  );
}
export default Card;