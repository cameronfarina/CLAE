import { supabase } from "@/lib/supabaseClient";
import RecipeListClient from "./RecipeListClient";

const RecipesPage = async () => {
  const { data: recipes, error } = await supabase
    .from("recipes")
    .select(
      "id, title, description, image_url, prep_time, cook_time, total_time",
    )
    .order("id");

  if (error) {
    return (
      <p style={{ padding: "2rem", color: "red" }}>Error: {error.message}</p>
    );
  }

  if (!recipes || recipes.length === 0) {
    return <p style={{ padding: "2rem" }}>No recipes found.</p>;
  }

  return <RecipeListClient recipes={recipes} />;
};

export default RecipesPage;
