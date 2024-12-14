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
import PhotoShootPage from "./pages/PhotoShootPage"
import VideoShootPage from "./pages/VideoShootPage"
import PhotoAndVideoEditingPage from "./pages/PhotoAndVideoEditingPage"
import ServicePage from "./pages/ServicePage"
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage"
import PrivateRoute from "./PrivateRoute"
import { AuthProvider } from './context/AuthContext';

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
      path: 'PhotoShootPage',
      element: <PhotoShootPage />
    },
    {
      path: 'VideoShootPage',
      element: <VideoShootPage />
    },
    {
      path: 'PhotoAndVideoEditingPage',
      element: <PhotoAndVideoEditingPage />
    },
    {
      path: 'ServicePage',
      element: <ServicePage />
    },
    {
      path: 'PrivacyPolicyPage',
      element: <PrivacyPolicyPage />
    },
    {
      path: '/',
      element: <PrivateRoute />,
      children: [
        {
          path: 'Loggedin',
          element: <HomePage />,
        }
      ]
    }
  ])

  return (
    <>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </>
  )
}

export default App
