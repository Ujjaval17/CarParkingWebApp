import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { carParkingActions } from "../store/CarParkingSlice";
import styles from "./CheckIn.module.css";

const CheckIn = () => {
  const [carData, setCarData] = useState({
    vehicleNo: "",
    driver: "",
    checkInTime: "",
    checkOutTime: "",
  });

  var time = new Date();
 
  const inputHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setCarData({ ...carData, [name]: value });
  };

  const dispatch = useDispatch();

  const error = useSelector((state) => state.carParking.error);

  const formSubmitHandler = (e) => {
    e.preventDefault();

    const time1 = time.toLocaleString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });

    carData.checkInTime = time1;

    dispatch(carParkingActions.getDetails(carData));

    setCarData({
      vehicleNo: "",
      driver: "",
      checkInTime: "",
      checkOutTime: "",
    });
    if (error) {
      dispatch(carParkingActions.errorUpdate());
    }
  };

  return (
    <form className={styles.form}>
      <div>
        <div>
          <label className={styles.label} htmlFor="vehicleNo">
            Vehicle No :{" "}
          </label>
          <input
            type="text"
            value={carData.vehicleNo}
            onChange={inputHandler}
            name="vehicleNo"
            id="vehicleNo"
          />
        </div>
        <div>
          <label className={styles.label} htmlFor="driver">
            Driver Name :{" "}
          </label>
          <input
            type="text"
            value={carData.driver}
            onChange={inputHandler}
            name="driver"
            id="driver"
          />
        </div>
        <br />
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button className="button" onClick={formSubmitHandler}>
            {""}
            Submit{" "}
          </button>
        </div>
      </div>
    </form>
  );
};

export default CheckIn;
