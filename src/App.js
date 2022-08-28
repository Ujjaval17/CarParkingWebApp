import { useState } from "react";
import { useSelector } from "react-redux";
import "./App.css";
import CarList from "./components/CarList";
import CheckIn from "./components/CheckIn";
import CheckOut from "./components/CheckOut";


function App() {
  const [shw, setshw] = useState(false);
  const [shwlist, setshwlist] = useState(false);
  const [shwnum, setshwNum] = useState(false);

  const check = useSelector((state) => state.carParking.checkOut);
  const close = useSelector((state) => state.carParking.close);
  const error = useSelector((state) => state.carParking.error);
  const carData = useSelector((state) => state.carParking.carData1);
 

  const carListHandler = () => {
    setshwlist(!shwlist);
  };

  const checkInHandler = () => {
    setshw(true);
  };

  const numCarHandler = () => {
    setshwNum(!shwnum);
    console.log(carData);
    if(carData.length == 'undefined'){
      carData.length = 0;
    }
  };

  return (
    <div
      style={{
        backgroundImage: `url("https://content.jdmagicbox.com/comp/def_content/car-parking-management/cars-parked-in-parking-lot-car-parking-management-1-0stjw.jpg?clr=382e2e")`,
        backgroundRepeat: "repeat-y",
      }}
    >
      <div className="card">
        <button onClick={carListHandler}>CarList</button>
        {shwlist && (
          <div>
            {(!error && <CarList />) || <p>No Cars in parking garage</p>}
          </div>
        )}
        <br/>
        <div>
          <button onClick={numCarHandler}>No of Cars in Garage</button>
          {shwnum && <h5>{carData.length}</h5>}
        </div>
      </div>

      <div className="card">
        <div>
          <button onClick={checkInHandler}>New CheckIn</button>
        </div>
        <br></br>
        <div>{shw && <CheckIn />}</div>
      </div>

      {!close && check && (
        <div className="card" style={{ textAlign: "left" }}>
          <CheckOut />
        </div>
      )}
    </div>
  );
}

export default App;
