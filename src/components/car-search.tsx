import { useDispatch, useSelector } from "react-redux";
import { changeSearchTerm, RootState } from "../store";

function CarSearch(){
  const dispatch = useDispatch();
  const searchTerm = useSelector((state: RootState) => state.cars.searchTerm);

  const handleSearchTermChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(changeSearchTerm(e.target.value));
  }

  return(
    <div className="list-header">
      <h3 className="title is-3">My Cars</h3>
      <div className="search field is-horizontal">
        <label className="label">Search</label>
        <input
          type="text"
          value={searchTerm}
          className="input"
          onChange={handleSearchTermChange}
        />
      </div>
    </div>
  )
}

export default CarSearch;
