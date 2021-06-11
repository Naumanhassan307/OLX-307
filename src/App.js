import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./commonCom/header/Headre";
import Slider from "./components/slider/Slider"
import Card from "./components/card/Card"

function App() {
  return (
    <>
      <Header />
      <Slider />
      <Card />
    </>
  );
}

export default App;
