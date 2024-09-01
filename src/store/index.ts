import { configureStore } from "@reduxjs/toolkit";
import { formReducer, changeName, changeCost } from "./slices/formSlice";
import { carsReducer, addCar, removeCar, changeSearchTerm } from "./slices/carsSlice";

const store = configureStore({
  reducer: {
    cars: carsReducer,
    form: formReducer,
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export { store, addCar, removeCar, changeSearchTerm, changeName, changeCost };
