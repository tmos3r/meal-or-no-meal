import Recipes from "../pages/recipes";
import Calendar from "../pages/calendar";
import Inventory from "../pages/inventory";
import Settings from "../pages/settings";

export const menuOptions = [
  {
    title: "Recipes",
    icon: "faFileSignature",
    path: "/recipes",
    component: Recipes,
  },
  {
    title: "Calendar",
    icon: "faCalendarWeek",
    path: "/calendar",
    component: Calendar,
  },
  {
    title: "Inventory",
    icon: "faTruckLoading",
    path: "/Inventory",
    component: Inventory,
  },
  {
    title: "Settings",
    icon: "faCog",
    path: "/Settings",
    component: Settings,
  },
];
