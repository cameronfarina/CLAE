"use client";
import {
  RecipesGrid,
  RecipesSection,
  RecipesTitle,
} from "./FeaturedRecipes.styles";
import RecipeCard from "@/components/RecipeCard";

type Recipe = {
  id: number;
  title: string;
  description: string | null;
  image_url: string | null;
  totalTime: number;
};

type FeaturedRecipesProps = {
  recipes: Recipe[];
};

const FeaturedRecipes = ({ recipes }: FeaturedRecipesProps) => {
  return (
    <RecipesSection>
      <RecipesTitle>Featured Recipes</RecipesTitle>
      <RecipesGrid>
        {recipes.map((recipe) => (
          <RecipeCard
            key={recipe.id}
            recipeId={recipe.id}
            imageUrl={recipe.image_url || "/placeholder.jpg"}
            title={recipe.title}
            description={recipe.description || ""}
            totalTime={recipe.totalTime}
          />
        ))}
      </RecipesGrid>
    </RecipesSection>
  );
};

export default FeaturedRecipes;
