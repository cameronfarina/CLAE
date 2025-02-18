"use client";
import styled from "styled-components";

export const FeaturesSection = styled.section`
  max-width: 1100px;
  width: 90%;
  margin: 3rem auto;
  text-align: center;
`;

export const FeaturesTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1.5rem;
`;

export const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 2rem;
`;

export const FeatureCard = styled.div`
  background-color: #fff;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

export const FeatureTitle = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 0.75rem;
`;

export const FeatureText = styled.p`
  font-size: 0.95rem;
  line-height: 1.4;
`;
