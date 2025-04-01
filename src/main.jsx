import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Header from './Components/Header.jsx'

import "./CSS/Basic.css"

import HomePage from './pages/HomePage.jsx'
import Profile from './pages/Profile.jsx'
import Recipe_form from './pages/Recipes_form.jsx'
import Recipe_info from './pages/Recipe_info.jsx'
import Recipes from './pages/Recipes.jsx'
import NotFound from './pages/Notfound.jsx'

const router = createBrowserRouter([
{
  path: '/',
  element: <HomePage/>,
  errorElement: <NotFound> </NotFound>,
},
{
  path: '/profile',
  element: <Profile/>,
},
{
  path: '/Recipe_form',
  element: <Recipe_form/>,
},
{
  path: '/Recipe_info',
  element: <Recipe_info/>,
},
{
  path: '/Recipes',
  element: <Recipes/>,
},

]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router}/>
  </StrictMode>
)
