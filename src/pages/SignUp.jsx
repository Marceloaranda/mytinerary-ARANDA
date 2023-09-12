import axios from "axios";
import { useEffect, useState } from "react";



const SignUp = () => {

    const [countries, setCountries] = useState([]);
    useEffect(() => {
        axios("https://restcountries.com/v3.1/all?fields=name").then(({data}) => 
        setCountries(data.map((country) => country.name.common))
        );
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
    }

  return (
    <section className="d-flex justify-content-center">
        <div className="card col-sm-p p-3">
            <div className="mb-3">
                <h4>Sign Up</h4>
            </div>
            <div className="mb-2">
                <form onSubmit= { handleSubmit }>
                    <div className="mb-2">
                        <label>
                            {" "}
                            FirstName:
                        <input type="text" name="firstname"></input>
                        </label>
                    </div>
                    <div className="mb-2">
                        <label>
                            {" "}
                            LastName:
                        <input type="text" name="lastname"></input>
                        </label>
                    </div>
                    <div className="mb-2">
                        <label>
                            {" "}
                            email:
                        <input type="email" name="email"></input>
                        </label>
                    </div>
                    <div className="mb-2">
                        <label>
                            {" "}
                            Password:
                        <input type="password" name="password"></input>
                        </label>
                    </div>
                    <div className="mb-2">
                        <label>
                            {" "}
                            Image:
                        <input type="text" name="image"></input>
                        </label>
                    </div>
                    <div className="mb-2">
                        <label>
                            {" "}
                            Country
                            <select name="country">
                                {countries.length > 0 &&
                                countries.map((country) => (
                                    <option key={`aot-country-${country}`} value={country}>{country}</option>
                                ))}
                        </select>
                        </label>
                    </div>
                    <button className="btn btn-secondary">Sign Up</button>
                </form>

            </div>

        </div>
    </section>
  )
}

export default SignUp;

