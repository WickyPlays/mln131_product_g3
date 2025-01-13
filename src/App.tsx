import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Routes } from "react-router-dom";
import "./App.scss";
import HomePage from "@components/Home/HomePage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/mln131_product_g3">
      <Route index element={<HomePage />} />
    </Route>
  )
)


export default function App() {
  return (
    <div className="app">
       <RouterProvider router={router}/>
    </div>
  );
}
