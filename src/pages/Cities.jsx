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
      const queryParams = "?name"+input.current.value;
      getCities(queryParams)
        .then((res) => setCities(res))
        .catch((err) => console.log(err));
    } else {
      setCities(allCities);
    }
    
  }
  return (
    
    <section className="container d-flex flex-wrap gap-5 justify-content-center justify-content-md between">
      <form className="d-flex gap-5 col-10" onSubmit={handleSubmit}>
        <input type="text" ref={input} />
        <button className="btn btn-secondary">Search</button>
      </form>
      <h2 className= "text-center w-100 text-primary">Cities</h2>
      {cities.map((city) => (
        <CityCard key={city._id} city={city} />
      ))}
    </section>
    
  )
}

