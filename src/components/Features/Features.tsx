"use client";
import {
  FeatureCard,
  FeaturesGrid,
  FeaturesSection,
  FeaturesTitle,
  FeatureText,
  FeatureTitle,
} from "./Features.styles";

const Features = () => {
  return (
    <FeaturesSection>
      <FeaturesTitle>Our Engineering Approach</FeaturesTitle>
      <FeaturesGrid>
        <FeatureCard>
          <FeatureTitle>Iterative Cooking</FeatureTitle>
          <FeatureText>
            Break recipes into discrete steps and iterate until you reach your
            desired taste. No guesswork—just methodical improvement.
          </FeatureText>
        </FeatureCard>
        <FeatureCard>
          <FeatureTitle>Big-O Efficiency</FeatureTitle>
          <FeatureText>
            Analyze your prep time and cooking methods like code complexity.
            Optimize your cutting, marinating, and plating for best performance.
          </FeatureText>
        </FeatureCard>
        <FeatureCard>
          <FeatureTitle>Linear Scalability</FeatureTitle>
          <FeatureText>
            Cooking for 2 or 10? Our approach scales linearly. Just multiply
            your ingredient arrays by n and watch your meal adapt seamlessly.
          </FeatureText>
        </FeatureCard>
      </FeaturesGrid>
    </FeaturesSection>
  );
};

export default Features;
