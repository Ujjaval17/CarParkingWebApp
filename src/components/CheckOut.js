import { useDispatch, useSelector } from "react-redux";
import { carParkingActions } from "../store/CarParkingSlice";

const CheckOut = () => {
  const data = useSelector((state) => state.carParking.disData);
  const dispatch = useDispatch();
  const closeHandler = () => {
    dispatch(carParkingActions.closeCheckOutData());
  };

  return (
    <>
      <div style={{ display: "flex", justifyContent: "right" }}>
        <button style={{ color: "red" }} onClick={closeHandler}>
          X
        </button>
      </div>

      <h5>Vehicle No &emsp;&emsp;&emsp;: {data[0].vehicleNo}</h5>
      <h5>Driver Name &emsp;&emsp;: {data[0].driver}</h5>
      <h5>Check-In Time &emsp;&nbsp;: {data[0].checkInTime}</h5>
      <h5>Check-Out Time &nbsp;&nbsp;: {data.checkOutTime}</h5>
    </>
  );
};

export default CheckOut;
