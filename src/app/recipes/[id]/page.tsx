import { supabase } from "@/lib/supabaseClient";
import RecipeDetailClient from "./RecipeDetailClient";

const RecipeDetailPage = async ({ params }: { params: { id: string } }) => {
  const { id } = params;

  const { data: recipe, error } = await supabase
    .from("recipes")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    return (
      <p style={{ padding: "2rem", color: "red" }}>Error: {error.message}</p>
    );
  }

  if (!recipe) {
    return <p style={{ padding: "2rem" }}>Recipe not found.</p>;
  }

  return <RecipeDetailClient recipe={recipe} />;
};

export default RecipeDetailPage;
