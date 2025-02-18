"use client";
import styled from "styled-components";
import Link from "next/link";

export const CTASection = styled.section`
  text-align: center;
  margin: 3rem 0;
`;

export const CTATitle = styled.h2`
  font-size: 1.75rem;
  margin-bottom: 1rem;
`;

export const CTAText = styled.p`
  font-size: 1rem;
  margin-bottom: 1.5rem;
  color: #555;
`;

export const CTAButton = styled(Link)`
  display: inline-block;
  background-color: #0070f3;
  color: #fff;
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 600;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #0059c9;
  }
`;
