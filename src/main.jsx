import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.css'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './store/store.js'
import { GoogleOAuthProvider } from '@react-oauth/google'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <GoogleOAuthProvider clientId='64283431541-iq1kk9qnr725opj1a2thv4sfa6smencc.apps.googleusercontent.com'>
      <App />
      </GoogleOAuthProvider>
     
    </Provider>
    
  </React.StrictMode>,
)
