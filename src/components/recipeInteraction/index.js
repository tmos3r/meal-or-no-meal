import { IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";

import styles from "./index.module.css";

const RecipeInteraction = () => {
  return (
    <div className={styles.recipeInteractionContainer}>
      <div className={styles.recipeInteractionSearchBar} />
      <IconButton sx={{ marginLeft: ".5rem" }}>
        <SearchIcon />
      </IconButton>
      <IconButton variant="full" sx={{ marginLeft: ".5rem" }}>
        <AddIcon />
      </IconButton>
    </div>
  );
};

export default RecipeInteraction;
