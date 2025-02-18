"use client";
import styled from "styled-components";

export const OverlayWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 5rem;
`;

export const OverlayContainer = styled.div`
  background-color: #fff;
  width: 800px;
  max-width: 90vw;
  max-height: 80vh;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export const OverlayHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid #eee;
`;

export const SearchInput = styled.input`
  flex: 1;
  font-size: 1rem;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;

  &:focus {
    outline: none;
    border-color: #3b82f6;
  }
`;

export const CloseButton = styled.button`
  margin-left: 1rem;
  background: none;
  border: none;
  font-size: 1.25rem;
  cursor: pointer;
`;

export const FiltersContainer = styled.div`
  display: flex;
  gap: 1rem;
  padding: 1rem;
  border-bottom: 1px solid #eee;
  justify-content: center;
`;

export const Filter = styled.button<{ $active?: boolean }>`
  border: none;
  outline: none;
  cursor: pointer;
  padding: 0.4rem 0.8rem;
  border-radius: 9999px;
  font-size: 0.9rem;
  font-weight: 500;
  margin-right: 0.5rem;
  transition:
    background-color 0.2s ease,
    color 0.2s ease;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);

  background-color: #f1f5f9;
  color: #333;

  &:hover {
    background-color: #e2e8f0;
  }

  ${({ $active }) =>
    $active &&
    `
    background-color: #3b82f6;
    color: #fff;

    &:hover {
      background-color: #3b82f6;
    }
  `}
`;

export const ResultsContainer = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 1rem;
`;

export const ResultRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  border-bottom: 1px solid #f0f0f0;
  cursor: pointer;

  &:hover {
    background: #fafafa;
  }
`;

export const LeftInfo = styled.div`
  display: flex;
  align-items: center;
`;

export const RightInfo = styled.div`
  font-size: 0.85rem;
  color: #666;
`;

export const ResultImage = styled.img`
  width: 48px;
  height: 48px;
  object-fit: cover;
  border-radius: 4px;
  margin-right: 0.75rem;
`;

export const ResultInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ResultTitle = styled.span`
  font-weight: 600;
  color: #333;
`;

export const ResultSubtitle = styled.span`
  font-size: 0.85rem;
  olor: #666;
`;
