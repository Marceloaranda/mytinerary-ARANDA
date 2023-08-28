import { useEffect, useState, useRef } from "react"
import CityCard from "../components/CityCard"
import { getCities } from "../services/citiesQueries"

export default function Cities() {
  const [cities, setCities] = useState([]);
  const [allCities, setAllCities] = useState([]);
  const input = useRef(null);
  useEffect(() => {
    getCities()
      .then((data) => {
        setCities(data),
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
        .then((res) => setCities(res))
        .catch((err) => console.log(err));
    } else {
      setCities(allCities);
    }
    
  }
  return (
    
    <section className="container d-flex flex-wrap gap-4 justify-content-center justify-content-md between">
      <form className="d-flex gap-4 col-90" onSubmit={handleSubmit}>
        <input className="form-control" type="text" ref={input} />
        <button className="btn ">Search Cities</button>
      </form>
      <h2 className= "text-center w-100 text-primary">Cities</h2>
      {cities.length > 0 ? (
        cities.map((city) => 
        <CityCard key={city._id} city={city} />)
        ) : (
          <h2> No results!!</h2>
      )}
    </section>
    
  )
}

