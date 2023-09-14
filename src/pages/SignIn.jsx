import { signIn } from "../store/actions/userActions"
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const SignIn = () => {

  const email = useRef(null)
  const password = useRef(null)

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault();
    const aux = [email, password];
    if (aux.some((item) => !item.current.value)) {
        alert("All fields are required")
    }else {
        const body = {
            email : email.current.value,
            password : password.current.value,
        }
        dispatch( signIn( body ) ).then((response) => {
          //console.log(response)
          if (response.payload.success) {
            alert("Welcome  " + response.payload.user.email)
            navigate('/');
        }
    })
    }
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
                    
                    <button className="btn btn-secondary">Sign In</button>
                </form>

            </div>

        </div>
    </section>
  )
}

export default SignIn;
