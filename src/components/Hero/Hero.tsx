"use client";
import React from "react";
import {
  HeroContainer,
  HeroContent,
  HeroSubtitle,
  HeroTitle,
} from "./Hero.styles";

const Hero = () => {
  return (
    <HeroContainer>
      <HeroContent>
        <HeroTitle>Engineering Your Way to Great Food</HeroTitle>
        <HeroSubtitle>
          Use iterative methods, Big-O efficiency, and linear scalability to
          optimize your cooking workflow.
        </HeroSubtitle>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
