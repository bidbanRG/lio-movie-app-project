import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import MovieContextProvider from './context/MovieContext.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
   <MovieContextProvider>
    <App />
   </MovieContextProvider> 
  </React.StrictMode>,
)
