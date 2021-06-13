import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./commonCom/header/Headre";
import Slider from "./components/slider/Slider"
import Card from "./components/card/Card"
import Body from "./components/body/Body"
// import AddData from "./components/AddData"
// import CustomizedDialogs from "./components/addCard/AddCard"

function App() {
  return (
    <>
      <Header />
      <Slider />
      <Card />
      <Body />
      {/* <AddData /> */}
      {/* <CustomizedDialogs /> */}
    </>
  );
}

export default App;
