import { useEffect, useState, useRef } from "react"
import CityCard from "../components/CityCard"
import { getCities } from "../services/citiesQueries"
import { useSelector, useDispatch } from "react-redux";
import cityActions from "../store/actions/cityActions";


export default function Cities() {
 // const [cities, setCities] = useState([]);
  const [allCities, setAllCities] = useState([]);
  const input = useRef(null);

  let citiesInStore = useSelector(store => store.citiesReducer.cities)
  console.log(citiesInStore)

  const dispatch = useDispatch()




  useEffect(() => {
    getCities()
      .then((data) => {
       // setCities(data),
        dispatch(cityActions.add_cities(data))
       setAllCities(data);
      })
      .catch((err) => console.log(err))
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.current.value) {
      const queryParams = "?city="+input.current.value;
      console.log(queryParams)
      getCities(queryParams)
        .then((res) => {
       // setCities(res)
        dispatch(cityActions.add_cities(res))
        })
        .catch((err) => console.log(err));
    } else {
      // setCities(allCities);
      dispatch(cityActions.add_cities(allCities))

    }
    
  }
  return (
    
    <section className="container d-flex flex-wrap gap-4 justify-content-center justify-content-md between">
      <form className="d-flex gap-4 col-90" onSubmit={handleSubmit}>
        <input className="form-control" type="text" ref={input} />
        <button className="btn ">Search Cities</button>
      </form>
      <h2 className= "text-center w-100 text-primary">Cities</h2>
      {citiesInStore.length > 0 ? (
        citiesInStore.map((city) => 
        <CityCard key={city._id} city={city} />)
        ) : (
          <h2> No results!!</h2>
      )}
    </section>
    
  )
}

