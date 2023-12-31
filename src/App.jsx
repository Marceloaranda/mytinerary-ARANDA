
import './App.css'
import Layout from './layouts/Layout'
import Home from './pages/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Cities from './pages/Cities'
import Details from './pages/Details'

const router = createBrowserRouter([
  { path: '/', element: <Layout />,
    children: [
      { path: '/', element: <Home />}
    ]
  },
  { path: '/Cities', element: <Layout />,
    children: [
      { path: '/Cities', element: <Cities />},
    ] 
  },
  { path: '/details', element: <Layout />,
    children: [
      { path: '/details', element: <Details />},
    ] 
  }

])

function App() {

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
      
    </>
  )
}

export default App
