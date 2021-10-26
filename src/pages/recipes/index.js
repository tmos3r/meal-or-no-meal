import { Card } from "@mui/material";

import RecipeInteraction from "../../components/recipeInteraction";
import RecipeList from "../../components/recipeList";

import styles from "./index.module.css";

const Recipes = () => {
  return (
    <Card sx={{ width: "100%", maxWidth: "900px" }} raised>
      <div className={styles.recipesContainer}>
        <RecipeInteraction />
        <RecipeList />
      </div>
    </Card>
  );
};

export default Recipes;
