"use client";
import styled from "styled-components";

export const InfoCardsContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 2rem;
  padding: 4rem 2rem;
  background-color: #f9f9f9;
`;

export const InfoCard = styled.div`
  background: #fff;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

export const InfoTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

export const InfoText = styled.p`
  font-size: 1rem;
  color: #555;
`;
