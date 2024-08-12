import "@/assets/css/style.css";
import {RouterProvider} from "react-router-dom";
import {router} from "./RoutesApp";

function App() {
  
  return (
      <RouterProvider router={router} />
  )
}

export default App
