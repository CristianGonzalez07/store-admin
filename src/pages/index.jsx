import Home from "./Home";
import Login from "./Login";
import SignUp from "./SignUp";


const publicRoutes = [
  { path: '/login', title:"Login", component: <Login/>},
  { path: '/sign-up', title:"Sign up", component: <SignUp/>},
]

const protectedRoutes = [
  { path: '/', title:"", component: <Home/>},
]

export { publicRoutes, protectedRoutes };