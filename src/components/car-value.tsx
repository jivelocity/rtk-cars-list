import { useSelector } from "react-redux";
import { RootState } from "../store";

function CarValue(){
  const totalCost = useSelector(({cars}:RootState) => {
    return cars.data
      .filter((car) => car.name.toLowerCase().includes(cars.searchTerm.toLowerCase())
    )
    .reduce((acc, car) => acc + car.cost, 0);

    //same like reduce
    // let cost = 0;
    // for(const car of filteredCars){
    //   cost += car.cost;
    // }
    // return cost;


  })


  return(
    <div className="car-value">
      Total Cost: ${totalCost}
    </div>
  )
}

export default CarValue;
