"use client";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  max-width: 48rem;
  margin: 0 auto;
  padding: 2rem;
`;

const RecipeImage = styled.img`
  width: 100%;
  max-height: 24rem; /* ~max-h-96 */
  object-fit: cover;
  border-radius: 0.25rem; /* ~rounded */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* ~shadow */
  margin-bottom: 1.5rem; /* ~mb-6 */
`;

const RecipeTitle = styled.h1`
  font-size: 1.875rem; /* ~text-3xl */
  font-weight: 700; /* ~font-bold */
  margin-bottom: 1rem; /* ~mb-4 */
`;

const RecipeText = styled.p`
  color: #374151; /* ~text-gray-700 */
  margin-bottom: 1rem; /* ~mb-4 */
`;

const Section = styled.div`
  margin-bottom: 1.5rem; /* ~mb-6 */
`;

const SectionTitle = styled.h2`
  font-size: 1.25rem; /* ~text-xl */
  font-weight: 600; /* ~font-semibold */
  margin-bottom: 0.5rem; /* ~mb-2 */
`;

const List = styled.ul`
  list-style-type: disc; /* ~list-disc */
  padding-left: 1.25rem; /* ~list-inside (approx) */
  margin-top: 0.5rem;
  color: #374151; /* ~text-gray-700 */
`;

const OrderedList = styled.ol`
  list-style-type: decimal; /* ~list-decimal */
  padding-left: 1.25rem; /* ~list-inside (approx) */
  margin-top: 0.5rem;
  color: #374151;
`;

type RecipeDetailProps = {
  recipe: {
    id: number;
    title: string;
    description: string;
    image_url: string;
    ingredients: string;
    instructions: string;
  };
};

const RecipeDetailClient: React.FC<RecipeDetailProps> = ({ recipe }) => {
  return (
    <Container>
      {recipe.image_url && (
        <RecipeImage src={recipe.image_url} alt={recipe.title} />
      )}

      <RecipeTitle>{recipe.title}</RecipeTitle>

      {recipe.description && <RecipeText>{recipe.description}</RecipeText>}

      {recipe.ingredients && (
        <Section>
          <SectionTitle>Ingredients</SectionTitle>
          <List>
            {recipe.ingredients.split("\n").map((item: string, idx: number) => (
              <li key={idx}>{item.trim()}</li>
            ))}
          </List>
        </Section>
      )}

      {recipe.instructions && (
        <Section>
          <SectionTitle>Instructions</SectionTitle>
          <OrderedList>
            {recipe.instructions
              .split("\n")
              .map((step: string, idx: number) => (
                <li key={idx}>{step.trim()}</li>
              ))}
          </OrderedList>
        </Section>
      )}
    </Container>
  );
};

export default RecipeDetailClient;
