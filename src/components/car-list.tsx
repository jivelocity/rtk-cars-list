import { useDispatch, useSelector } from "react-redux";
import { RootState, removeCar } from "../store";


function CarList(){
  const dispatch = useDispatch();
  const cars = useSelector((state: RootState) => {
    return state.cars.data;
  });

  const handleCarDelete = (id: string) => {
    dispatch(removeCar(id));
  }

  const renderCard = cars.map((car) => {
    return (
      <div key={car.id} className="panel">
        <p>
          {car.name} - ${car.cost}
        </p>
        <button
          className="button is-danger"
          onClick={() => {handleCarDelete(car.id)}}
        >
          Delete
        </button>
      </div>
    )
  })

  return(
    <div className="car-list">
      {renderCard}
      <hr />
    </div>
  )
}

export default CarList;
