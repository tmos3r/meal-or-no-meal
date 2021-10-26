import {
  faFileSignature,
  faCalendarWeek,
  faTruckLoading,
  faCog,
} from "@fortawesome/free-solid-svg-icons";

const icons = {
  faCalendarWeek: faCalendarWeek,
  faCog: faCog,
  faFileSignature: faFileSignature,
  faTruckLoading: faTruckLoading,
};

export const getIcon = (iconName) => {
  return icons[iconName];
};
