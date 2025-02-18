"use client";
import styled from "styled-components";

export const RecipesSection = styled.section`
  max-width: 1100px;
  width: 90%;
  margin: 3rem auto;
`;

export const RecipesTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1.5rem;
  text-align: center;
`;

export const RecipesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;
