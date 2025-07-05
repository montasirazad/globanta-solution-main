import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Asia from "../components/Asia/Asia";
import Europe from "../components/Europe/Europe";
import NorthAmerica from "../components/NorthAmerica/NorthAmerica";
import Oshenia from "../components/Oshenia/Oshenia";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/globanta/country/details/asia",
    element: <Asia />,
  },
  {
    path: "/globanta/country/details/europe",
    element: <Europe />,
  },
  {
    path: "/globanta/country/details/north-america",
    element: <NorthAmerica />,
  },
  {
    path: "/globanta/country/details/oshenia",
    element: <Oshenia />,
  },
  {
    path: "/hello",
    element: <div>Hello world!</div>,
  },
]);

export { router };

