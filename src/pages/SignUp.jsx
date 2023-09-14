import axios from "axios";
import { useEffect, useState, useRef } from "react";
import { signUp } from "../store/actions/userActions";
import { useDispatch } from "react-redux";
import { GoogleLogin } from "@react-oauth/google";
import jwtDecode from "jwt-decode";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const SignUp = () => {

    const [countries, setCountries] = useState([]);

    const dispatch = useDispatch()
    const navigate = useNavigate()
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
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'All fields are required',
              })
           // alert("All fields are required")
        }else {
            const body = {
                firstName : firstName.current.value,
                lastName : lastName.current.value,
                email : email.current.value,
                password : password.current.value,
                imageUrl : imageUrl.current.value,
                country : country.current.value
            }
            dispatch( signUp( body ) ).then((response) => {
                //console.log(response)
                if (response.payload.success) {
                  
                  navigate('/');
              }
          })
        }
    }

    const signUpWithGoogle = (credentialResponse) => {
        
        const dataUser = jwtDecode(credentialResponse.credential)
        
        const body = {
            firstName : dataUser.given_name,
            lastName : dataUser.family_name,
            email : dataUser.email,
            password : dataUser.given_name + dataUser.family_name,
            imageUrl : dataUser.picture  
        }
        dispatch( signUp( body ) ).then((response) => {
            //console.log(response)
            if (response.payload.success) {
              
              navigate('/');
          }
      })
    }




  return (
    <section className="d-flex justify-content-center">
        <div className="card col-sm-4 p-2">
            <div className="mb-1" >
                <h4>Sign Up</h4>
            </div>
            <div className="mb-1 " >
                <form onSubmit= { handleSubmit }>
                    <div className="mb-2 ">
                        <label className= "form-label  d-flex flex-colum">FirstName:</label>
                        <input type="text" className= "form-control" name="firstname" ref={firstName}></input>
                    </div>
                    <div className="mb-2">
                        <label className= "form-label  d-flex flex-colum">LastName:</label>
                        <input type="text" className= "form-control" name="lastname" ref={lastName}></input>
                    </div>
                    <div className="mb-2">
                        <label className= "form-label  d-flex flex-colum">email:</label>
                        <input type="email" className= "form-control" name="email" ref={email}></input>
                    </div>
                    <div className="mb-2">
                        <label className= "form-label  d-flex flex-colum">Password:</label>
                        <input type="password" className= "form-control" name="password" ref={password}></input>
                    </div>
                    <div className="mb-2">
                        <label className= "form-label  d-flex flex-colum">Image:</label>
                        <input type="text" className= "form-control" name="image" ref={imageUrl}></input>
                    </div>
                    <div className="mb-2">
                        <label className= "form-label  d-flex flex-colum">
                            Country:
                            <select className= "form-control" name="country" ref={country}>
                                {countries.length > 0 &&
                                countries.map((country) => (
                                    <option key={`aot-country-${country}`} value={country}>{country}</option>
                                ))}
                        </select>
                        </label>
                    </div>

                    <div>
                    <p>If you already have an account,  <b> log in! </b> </p>
                    </div>

                    <button className="btn btn-secondary">Sign Up</button>

                    <div>
                    <p><b> or </b> </p>
                    </div>
                    <div className="d-flex justify-content-center">

                    <GoogleLogin 
                        text="signup_with"
                        onSuccess={signUpWithGoogle}
                        onError={() => {
                        console.log('Login Failed');
                        }}/>
                    </div>

                </form>

            </div>

        </div>
    </section>
  )
}

export default SignUp;

