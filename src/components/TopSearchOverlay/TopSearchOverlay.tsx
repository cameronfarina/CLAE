"use client";
import React, { useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import {
  CloseButton,
  Filter,
  FiltersContainer,
  LeftInfo,
  OverlayContainer,
  OverlayHeader,
  OverlayWrapper,
  ResultImage,
  ResultInfo,
  ResultRow,
  ResultsContainer,
  ResultSubtitle,
  ResultTitle,
  RightInfo,
  SearchInput,
} from "./TopSearchOverlay.styles";

type Recipe = {
  id: number;
  title: string;
  description: string;
  image_url: string;
  prep_time: number;
  cook_time: number;
  total_time: number;
};

type TopSearchOverlayProps = {
  onClose: () => void;
};

const TopSearchOverlay: React.FC<TopSearchOverlayProps> = ({ onClose }) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Recipe[]>([]);
  const [selectedFilter, setSelectedFilter] = useState<string>("All");

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const q = e.target.value;
    setQuery(q);

    if (!q) {
      setResults([]);
      return;
    }

    let queryBuilder = supabase
      .from("recipes")
      .select(
        "id, title, description, image_url, prep_time, cook_time, total_time",
      )
      .ilike("title", `%${q}%`);

    if (selectedFilter !== "All") {
      queryBuilder = queryBuilder.contains("tags", [
        selectedFilter.toLowerCase(),
      ]);
    }

    const { data, error } = await queryBuilder;

    if (error) {
      console.error("Search error:", error.message);
      setResults([]);
    } else {
      setResults((data as Recipe[]) || []);
    }
  };

  const fetchTopRecipesForFilter = async (filterName: string) => {
    let queryBuilder = supabase
      .from("recipes")
      .select(
        "id, title, description, image_url, prep_time, cook_time, total_time",
      )
      .limit(5);

    if (filterName !== "All") {
      queryBuilder = queryBuilder.contains("tags", [filterName.toLowerCase()]);
    }

    const { data, error } = await queryBuilder;
    if (error) {
      console.error("Error fetching default filter results:", error.message);
      setResults([]);
    } else {
      setResults(data || []);
    }
  };

  const handleResultClick = (id: number) => {
    window.location.href = `/recipes/${id}`;
    onClose();
  };

  const handleFilterClick = (filterName: string) => {
    setSelectedFilter(filterName);

    if (!query) {
      fetchTopRecipesForFilter(filterName);
    }
  };

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <OverlayWrapper onClick={handleOverlayClick}>
      <OverlayContainer onClick={(e) => e.stopPropagation()}>
        <OverlayHeader>
          <SearchInput
            type="text"
            placeholder="Search..."
            value={query}
            onChange={handleChange}
          />
          <CloseButton onClick={onClose}>✕</CloseButton>
        </OverlayHeader>

        <FiltersContainer>
          <Filter
            onClick={() => handleFilterClick("All")}
            $active={selectedFilter === "All"}
          >
            All
          </Filter>
          <Filter
            onClick={() => handleFilterClick("Meals")}
            $active={selectedFilter === "Meals"}
          >
            Meals
          </Filter>
          <Filter
            onClick={() => handleFilterClick("Sweets")}
            $active={selectedFilter === "Sweets"}
          >
            Sweets
          </Filter>
          <Filter
            onClick={() => handleFilterClick("Snacks")}
            $active={selectedFilter === "Snacks"}
          >
            Snacks
          </Filter>
          <Filter
            onClick={() => handleFilterClick("Vegetarian")}
            $active={selectedFilter === "Vegetarian"}
          >
            Vegetarian
          </Filter>
          <Filter
            onClick={() => handleFilterClick("Vegan")}
            $active={selectedFilter === "Vegan"}
          >
            Vegan
          </Filter>
        </FiltersContainer>

        <ResultsContainer>
          {results.map((item) => (
            <ResultRow key={item.id} onClick={() => handleResultClick(item.id)}>
              <LeftInfo>
                <ResultImage src={item.image_url} alt={item.title} />
                <ResultInfo>
                  <ResultTitle>{item.title}</ResultTitle>
                  <ResultSubtitle>
                    {item.description?.slice(0, 50) || "No description"}
                  </ResultSubtitle>
                </ResultInfo>
              </LeftInfo>

              <RightInfo>{item.prep_time + item.cook_time} min</RightInfo>
            </ResultRow>
          ))}
        </ResultsContainer>
      </OverlayContainer>
    </OverlayWrapper>
  );
};

export default TopSearchOverlay;
