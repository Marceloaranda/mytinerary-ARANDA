import { Link as Anchor } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../store/actions/userActions'

export default function Navbar() {

  const user = useSelector( store => store.userReducer.user)
  const dispatch = useDispatch()

  return (
    <header>
        <nav className="navbar navbar-expand-lg ">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">My Tinerary</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup" >
              <div className="navbar-nav ">  
                <Anchor to='/' className="nav-link active">Home</Anchor>
                <Anchor to="/cities" className="nav-link">Cities</Anchor>

                {
                  user? (
                      <button onClick={()=> dispatch(logout())}>Log out </button>
                    ) : (
                      <>
                      <Anchor to="/signup" className="nav-link">Sign Up</Anchor>
                      <Anchor to="/signin" className="nav-link">Sign In</Anchor>
                      </>
                    )
                }

              </div>
            </div>
          </div>
        </nav>
    </header>
  )
}
