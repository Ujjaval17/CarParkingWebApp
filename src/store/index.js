import {configureStore} from '@reduxjs/toolkit';
import CarParkingSlice from './CarParkingSlice';


const store = configureStore({
    reducer : {
        carParking : CarParkingSlice
    }
});

export default store;