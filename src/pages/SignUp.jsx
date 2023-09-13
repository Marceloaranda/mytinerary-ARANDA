import axios from "axios";
import { useEffect, useState, useRef } from "react";
import { signUp } from "../store/actions/userActions";
import { useDispatch } from "react-redux";


const SignUp = () => {

    const [countries, setCountries] = useState([]);

    const dispatch = useDispatch()

    const firstName = useRef(null)
    const lastName = useRef(null)
    const email = useRef(null)
    const password = useRef(null)
    const imageUrl = useRef(null)
    const country = useRef(null)

    useEffect(() => {
        axios("https://restcountries.com/v3.1/all?fields=name").then(({data}) => 
        setCountries(data.map((country) => country.name.common))
        );
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        const aux = [firstName, lastName, email, password, imageUrl, country];
        if (aux.some((item) => !item.current.value)) {
            alert("All fields are required")
        }else {
            const body = {
                firstName : firstName.current.value,
                lastName : lastName.current.value,
                email : email.current.value,
                password : password.current.value,
                imageUrl : imageUrl.current.value,
                country : country.current.value
            }
            dispatch( signUp( body ) )
        }
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
                        <input type="text" name="firstname" ref={firstName}></input>
                        </label>
                    </div>
                    <div className="mb-2">
                        <label>
                            {" "}
                            LastName:
                        <input type="text" name="lastname" ref={lastName}></input>
                        </label>
                    </div>
                    <div className="mb-2">
                        <label>
                            {" "}
                            email:
                        <input type="email" name="email" ref={email}></input>
                        </label>
                    </div>
                    <div className="mb-2">
                        <label>
                            {" "}
                            Password:
                        <input type="password" name="password" ref={password}></input>
                        </label>
                    </div>
                    <div className="mb-2">
                        <label>
                            {" "}
                            Image:
                        <input type="text" name="image" ref={imageUrl}></input>
                        </label>
                    </div>
                    <div className="mb-2">
                        <label>
                            {" "}
                            Country
                            <select name="country" ref={country}>
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

