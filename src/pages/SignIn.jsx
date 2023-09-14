import { GoogleLogin } from "@react-oauth/google";
import { signIn } from "../store/actions/userActions"
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";
import Swal from "sweetalert2";

const SignIn = () => {

  const email = useRef(null)
  const password = useRef(null)

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault();
    const aux = [email, password];
    if (aux.some((item) => !item.current.value)) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'All fields are required',
      })

        //alert("All fields are required")
    }else {
        const body = {
            email : email.current.value,
            password : password.current.value,
        }
        dispatch( signIn( body ) ).then((response) => {
          //console.log(response)
          if (response.payload.success) {
            
            navigate('/');
        }
    })
    }
  }

const signInWithGoogle = (credentialResponse) => {
  //console.log(credentialResponse.credential)
  const dataUser = jwtDecode(credentialResponse.credential)
  const body = {
    email : dataUser.email,
    password : dataUser.given_name + dataUser.family_name
  }
  dispatch( signIn( body ) ).then((response) => {
    //console.log(response)
    if (response.payload.success) {
      navigate('/');
    }
    }).catch( err => console.log(err) );
}

  return (
    <section className="d-flex justify-content-center">
        <div className="card col-sm-4 p-2">
            <div className="mb-1" >
                <h4>Sign In</h4>
            </div>
            <div className="mb-1 " >
                <form onSubmit= { handleSubmit }>
                    
                    <div className="mb-2">
                        <label className= "form-label  d-flex flex-colum">email:</label>
                        <input type="email" className= "form-control" name="email" ref={email}></input>
                    </div>
                    <div className="mb-2">
                        <label className= "form-label  d-flex flex-colum">Password:</label>
                        <input type="password" className= "form-control" name="password" ref={password}></input>
                    </div>

                    <div>
                    <p>Don`t have an account? <b> Create one. </b> </p>
                    </div>
                    
                    <button className="btn btn-secondary">Sign In</button>
                    
                    <div>
                    <p><b> or </b> </p>
                    </div>
                    <div className="d-flex justify-content-center">
                    <GoogleLogin 
                        text="signin_with"
                        onSuccess={signInWithGoogle}
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

export default SignIn;
