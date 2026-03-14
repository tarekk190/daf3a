
import { createBrowserRouter, RouterProvider } from 'react-router'
import Login from './Components/login/Login'
import SignUp from './Components/signUp/SignUp'
import Layout from './Components/latout/Layout'
import Home from './Components/home/Home'
import Notfound from './Components/notfound/Notfound'
import FindMentor from './Components/findmentor/FindMentor'
import Workshops from './Components/workshops/Workshops'

function App() {

  let router = createBrowserRouter([

    {path:'', element:<Layout/> , children:[
      {path:'/', element:<Home/>},
      {path:'/login', element:<Login/>},
      {path:'/signup', element:<SignUp/>},
      {path:'/mentors', element:<FindMentor paragraph={"Please log in or create an account to explore and connect with mentors."}/>},
      {path:'/workshops', element:<Workshops/>},
       
    ],
  },
    {path:'*', element:<Notfound/>}
  ])

  return (
    <>
    <RouterProvider router={router}>
    </RouterProvider>
    </>
  )
}

export default App
