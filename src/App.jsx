
import './App.css'
import Layout from './layouts/Layout'
import Home from './pages/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Cities from './pages/Cities'
import Details from './pages/Details'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { authenticated } from './store/actions/userActions'

const router = createBrowserRouter([
  { path: '/', element: <Layout />,
    children: [
      { path: '/', element: <Home />},
  
      { path: '/cities', element: <Cities />},
    
      { path: '/details/:id', element: <Details />},

      { path: '/signup', element: <SignUp />},

      { path: '/signin', element: <SignIn />},
    ],
  },

]);

function App() {

  const dispatch = useDispatch()
  useEffect( () => { 
    const token = localStorage.getItem('token')
    if(token) {
      dispatch(authenticated())
     }
    }, [])


  return (
    <>
      <RouterProvider router={router}></RouterProvider>
      
    </>
  )
}

export default App
