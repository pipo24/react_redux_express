import Home from "./home";
import Vehicles from "./search_vehicles";

const routes = [
  {
    path: "/",
    exact: true,
    component: Home
  },
  {
    path: "/search_vehicles",
    component: Vehicles
  }
];

export default routes;
