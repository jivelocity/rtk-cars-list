import { useDispatch, useSelector } from "react-redux";
import { RootState, removeCar } from "../store";


function CarList(){
  const dispatch = useDispatch();
  const {cars, name} = useSelector(({form, cars}:RootState) => {
    const filteredCars = cars.data.filter((car) => car.name.toLowerCase().includes(cars.searchTerm.toLowerCase()));

    return {
      cars: filteredCars,
      name: form.name,
    }
  });

  const handleCarDelete = (id: string) => {
    dispatch(removeCar(id));
  }

  const renderCard = cars.map((car) => {
    //decide if this car should be bold
    //state.form.name
    const bold = name && car.name.toLowerCase().includes(name.toLowerCase());


    return (
      <div key={car.id} className={`panel ${bold && 'bold'}`}>
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
