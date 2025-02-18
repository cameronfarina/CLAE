import styled from "styled-components";

export const SearchButtonWrapper = styled.button`
  display: flex;
  align-items: center;
  background-color: #f8f8f8;
  border: 1px solid #ddd;
  border-radius: 9999px;
  padding: 0.4rem 0.8rem;
  gap: 0.5rem;
  font-size: 0.9rem;
  color: #333;
  cursor: pointer;
  outline: none;
  width: 200px;

  &:hover {
    background-color: #eee;
  }
`;

export const SearchIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  color: #555; /* or #333, adjust as needed */
`;

export const ShortcutWrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 0 0.3rem;
  font-size: 0.8rem;
  color: #666;
`;
