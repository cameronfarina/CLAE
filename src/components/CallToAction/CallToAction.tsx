"use client";
import React from "react";
import {
  CTAButton,
  CTASection,
  CTAText,
  CTATitle,
} from "./CallToAction.styles";

const CallToAction = () => {
  return (
    <CTASection>
      <CTATitle>Ready to Engineer Your Next Meal?</CTATitle>
      <CTAText>
        Sign up or browse our full library of recipes to get started.
      </CTAText>
      <CTAButton href="/recipes">Browse All Recipes</CTAButton>
    </CTASection>
  );
};

export default CallToAction;
