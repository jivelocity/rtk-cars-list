import { useDispatch, useSelector } from "react-redux";
import { changeName, RootState, changeCost, addCar } from "../store";


function CarForm(){
  const dispatch = useDispatch();

  const {name, cost} = useSelector((state: RootState) => {
    return {
      name: state.form.name,
      cost: state.form.cost
    }
  });

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(changeName(e.target.value));
  }

  const handleCostChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const carCost = parseInt(e.target.value) || 0;
    dispatch(changeCost(carCost));
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(addCar({name, cost}));
  }


  return(
    <div className="car-form panel">
      <h4 className="subtitle is-3">Add Car</h4>
      <form onSubmit={handleSubmit}>
        <div className="field-group">
          <div className="field">
            <label className="label">Name</label>
            <input
              type="text"
              className="input is-expanded"
              name="name"
              value={name}
              onChange={handleNameChange}
            />
          </div>
          <div className="field">
            <label className="label">Cost</label>
            <input
              type="number"
              className="input is-expanded"
              name="cost"
              value={cost || ""}
              onChange={handleCostChange}
            />
          </div>
        </div>
        <div className="field">
          <button type="submit" className="button is-link">Submit</button>
        </div>
      </form>
    </div>
  )
}

export default CarForm;
