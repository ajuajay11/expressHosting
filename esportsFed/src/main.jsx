 import { createRoot } from 'react-dom/client'
import './index.css'
import router from "../src/router/index.jsx"
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import {store} from "./store/index.js"

createRoot(document.getElementById('root')).render(
  <Provider store={store}> {/* //inside the provider onl every component can access state managment (redux tool kit ) */}
    <RouterProvider router={router} />
 </Provider>
)