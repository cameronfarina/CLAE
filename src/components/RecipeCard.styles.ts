"use client";
import styled from "styled-components";
import Link from "next/link";

export const CardContainer = styled.div`
  border-radius: 0.5rem;
  overflow: hidden;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.2s ease-in-out;
  position: relative;
  width: 300px;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

export const CardLink = styled(Link)`
  color: #000;
  text-decoration: none;

  &:visited {
    color: #000;
  }

  &:hover {
    color: #000;
  }

  &:active {
    color: #000;
  }
`;

export const CardBody = styled.div`
  padding: 1rem;
`;

export const CardTitle = styled.h2`
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 0.25rem;
`;

export const CardDescription = styled.p`
  font-size: 0.875rem;
  color: #4b5563;
`;

export const FavoriteIcon = styled.div<{ $isFavorited: boolean }>`
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
  font-size: 1.5rem;
  cursor: pointer;
  text-shadow: 0 0 4px rgba(0, 0, 0, 0.5);
  transition: color 0.2s ease;
`;

export const CardTime = styled.div`
  position: absolute;
  bottom: 0.5rem;
  right: 0.5rem;
  font-size: 0.8rem;
  color: #666;
`;
