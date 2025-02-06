import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.scss'
import Layout from './Pages/Layout/Layout'
import Meals from './Components/Meals/Meals'
import MealDetails from './Pages/MealDetails/MealDetails'

function App() {

  const router = createBrowserRouter([
    {
      path: "", element: <Layout />, children: [
        {
          index: true, element: <Meals />
        },
        {

          path: "category/:category", element: <Meals />
        },
      ]
    }, {
      path: "mealdetails/:id", element: <MealDetails />
    }
  ])


  return (
    <>
      <RouterProvider router={router}></RouterProvider>

    </>
  )
}

export default App
