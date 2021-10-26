import { Card } from "@mui/material";

import RecipeInteraction from "../../components/recipeInteraction";

import styles from "./index.module.css";

const Recipes = () => {
  return (
    <Card sx={{ width: "100%", maxWidth: "1200px" }} raised>
      <RecipeInteraction />
    </Card>
  );
};

export default Recipes;
