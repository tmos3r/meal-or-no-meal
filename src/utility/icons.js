import { faFileSignature } from "@fortawesome/free-solid-svg-icons";

const icons = {
  faFileSignature: faFileSignature,
};

export const getIcon = (iconName) => {
  return icons[iconName];
};
