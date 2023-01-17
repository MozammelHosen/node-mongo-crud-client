import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddUser from "./AddUser";
import "./App.css";
import Home from "./component/Home";

function App() {
  const router = createBrowserRouter([
    { 
      path: "/",
      element:<Home/>
    },
    {
      path:"/user/add",
      element: <AddUser/>
    }
  ]);
  return <div className="App">
    <RouterProvider router={router}></RouterProvider>
  </div>;
}

export default App;
