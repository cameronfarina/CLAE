"use client";
import React from "react";
import { SearchButtonWrapper, SearchIcon } from "./SearchButton.styles";

type SearchButtonProps = {
  onClick: () => void;
};

const SearchButton: React.FC<SearchButtonProps> = ({ onClick }) => {
  return (
    <SearchButtonWrapper onClick={onClick}>
      <SearchIcon>🔍</SearchIcon>
      <span>Search</span>
    </SearchButtonWrapper>
  );
};

export default SearchButton;
