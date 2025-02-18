"use client";
import React from "react";
import styled from "styled-components";
import RecipeCard from "@/components/RecipeCard";

const Container = styled.div`
  max-width: 72rem; /* ~"max-w-7xl" in Tailwind */
  margin: 0 auto;
  padding: 2rem; /* ~p-8 */
`;

const Title = styled.h1`
  font-size: 1.5rem; /* ~text-2xl */
  font-weight: bold;
  margin-bottom: 1.5rem; /* ~mb-6 */
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem; /* ~gap-6 */

  /* Responsive breakpoints (approx. Tailwind sizes) */
  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

type Recipe = {
  id: number;
  image_url: string | null;
  title: string;
  description: string | null;
  prep_time: number;
  cook_time: number;
  total_time: number;
};

interface RecipeListClientProps {
  recipes: Recipe[];
}

const RecipeListClient: React.FC<RecipeListClientProps> = ({ recipes }) => {
  return (
    <Container>
      <Title>All Recipes</Title>
      <Grid>
        {recipes.map((recipe) => (
          <RecipeCard
            key={recipe.id}
            recipeId={recipe.id}
            imageUrl={recipe.image_url || "/placeholder.jpg"}
            title={recipe.title}
            description={recipe.description || ""}
            prepTime={recipe.prep_time}
            cookTime={recipe.cook_time}
            totalTime={recipe.total_time}
          />
        ))}
      </Grid>
    </Container>
  );
};

export default RecipeListClient;
