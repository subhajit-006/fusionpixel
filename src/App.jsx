import { createBrowserRouter, RouterProvider } from "react-router-dom"
import './App.css'
import HomePage from './pages/HomePage'
import ContactUsPage from './pages/ContactUsPage'
import AuthPage from "./pages/AuthPage"
import NotFoundPage from './pages/NotFoundPage'
import AboutUsPage from "./pages/AboutUsPage"
import WebDevPage from "./pages/WebDevPage"
import WebDesigningPage from "./pages/WebDesigningPage"
import GraphicsDesigningPage from "./pages/GraphicsDesigningPage"
import PhotoEditingPage from "./pages/PhotoEditingPage"
import VideoEditingPage from "./pages/VideoEditingPage"
import PhotoAndVideoShootPage from "./pages/PhotoAndVideoShootPage"

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
    },
    {
      path: 'AboutUsPage',
      element: <AboutUsPage />
    },
    {
      path: 'WebDevPage',
      element: <WebDevPage />
    },
    {
      path: 'WebDesigningPage',
      element: <WebDesigningPage />
    },
    {
      path: 'GraphicsDesigningPage',
      element: <GraphicsDesigningPage />
    },
    {
      path: 'PhotoEditingPage',
      element: <PhotoEditingPage />
    },
    {
      path: 'VideoEditingPage',
      element: <VideoEditingPage />
    },
    {
      path: 'PhotoAndVideoShootPage',
      element: <PhotoAndVideoShootPage />
    }
  ])

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
