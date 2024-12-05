import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { useState } from 'react'
import './App.css'
import HomePage from './pages/HomePage'
import ContactUsPage from './pages/ContactUsPage'
import AuthPage from "./pages/AuthPage"
import NotFoundPage from './pages/NotFoundPage'
import AboutUsPage from "./pages/AboutUsPage"

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomePage />,
    },
    {
      path: '/Home',
      element: <HomePage />
    },
    {
      path: 'ContactUsPage',
      element: <ContactUsPage />
    },
    {
      path: 'AuthPage',
      element: <AuthPage />
    }
  ])

  return (
    <>
      {/*<RouterProvider router={router}/>*/}
      <AboutUsPage />
    </>
  )
}

export default App
