"use client";
import styled from "styled-components";

export const HeroContainer = styled.section`
  position: relative;
  width: 100%;
  min-height: 500px;
  background: url("/images/coding.jpg") center/cover no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.5);
  }
`;

export const HeroContent = styled.div`
  position: relative;
  z-index: 1;
  text-align: center;
  max-width: 1200px;
  padding: 2rem;
`;

export const HeroTitle = styled.h1`
  font-size: 68px;
  font-weight: 700;
  margin-bottom: 1rem;
`;

export const HeroSubtitle = styled.p`
  font-size: 24px;
  line-height: 1.4;
`;
