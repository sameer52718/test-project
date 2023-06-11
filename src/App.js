import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Error from './components/Error';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/contact",
    element: <Contact/>,
  },
  {
    path: "/about",
    element: <About/>,
  },
  {
    path: "/*",
    element: <Error/>,
  }
]);
function App() {
  return (
    <>
    <RouterProvider router={router} />
    </>
    
  );
}

export default App;
