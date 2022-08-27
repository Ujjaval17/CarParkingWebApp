import { useSelector, useDispatch } from "react-redux/es/exports";
import { carParkingActions } from "../store/CarParkingSlice";

const CarList = () => {
  const data = useSelector((state) => state.carParking.carData1);
  const close = useSelector((state) => state.carParking.close);

  var heading = ["Vehicle No", "Driver", "Check-in Time"];

  var newData = [{}];

  var time = new Date();

  const dispatch = useDispatch();

  const checkOutHandler = (key) => {
    newData = data.filter((item) => item.vehicleNo != key);

    // console.log(newData);

    dispatch(carParkingActions.updateDetails(newData));

    if (newData.length == 0) {
      dispatch(carParkingActions.errorUpdate());
    }

    const time1 = time.toLocaleString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });

    const carData = data.filter((item) => item.vehicleNo == key);

    // console.log(carData);

    carData.checkOutTime = time1;

    dispatch(carParkingActions.checkOutData(carData));
    console.log(newData);
    if (close) {
      dispatch(carParkingActions.closeCheckOutData());
    }
  };

  // if(data.length == 0){
  //   dispatch(carParkingActions.errorUpdate());
  // }

  return (
    <div>
      <table style={{ width: 300 }}>
        <thead>
          <tr>
            {heading.map((head) => (
              <th>{head}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((newData) => (
            <tr key={newData.vehicleNo}>
              <td>{newData.vehicleNo}</td>
              <td>{newData.driver}</td>
              <td>{newData.checkInTime}</td>
              <td>
                <button
                  type="button"
                  onClick={() => checkOutHandler(newData.vehicleNo)}
                >
                  Check Out
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CarList;
