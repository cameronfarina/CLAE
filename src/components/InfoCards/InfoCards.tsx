"use client";
import React from "react";
import {
  InfoCard,
  InfoCardsContainer,
  InfoText,
  InfoTitle,
} from "./InfoCards.styles";

const InfoCards = () => {
  return (
    <InfoCardsContainer>
      <InfoCard>
        <InfoTitle>Iterative Cooking</InfoTitle>
        <InfoText>
          Break down recipes into discrete steps and refine them over time for
          consistent perfection.
        </InfoText>
      </InfoCard>
      <InfoCard>
        <InfoTitle>Big-O Efficiency</InfoTitle>
        <InfoText>
          Analyze your prep and cooking times like algorithmic complexity to
          optimize every minute.
        </InfoText>
      </InfoCard>
      <InfoCard>
        <InfoTitle>Linear Scalability</InfoTitle>
        <InfoText>
          Scale your recipes linearly, whether you’re cooking for two or a team
          of engineers.
        </InfoText>
      </InfoCard>
    </InfoCardsContainer>
  );
};

export default InfoCards;
