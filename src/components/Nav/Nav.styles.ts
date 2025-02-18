"use client";
import styled from "styled-components";
import Link from "next/link";

export const NavBar = styled.nav`
  background-color: #fff;
  color: #111;
  border-bottom: 1px solid #ddd;
  height: 60px;
  position: sticky;
  top: 0;
  z-index: 2;
`;

export const NavBarContainer = styled.div`
  max-width: 1200px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
`;

export const NavLeft = styled.div`
  display: flex;
  align-items: center;
  width: 250px;
`;

export const Logo = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;

  img {
    height: 100px;
    width: auto;
    cursor: pointer;
  }
`;

export const NavCenter = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  gap: 1.5rem;
`;

export const NavRight = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  color: #111;
  font-size: 0.95rem;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
`;

export const IconButton = styled.button`
  background: none;
  border: none;
  color: #111;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    text-decoration: underline;
  }
`;

export const OutlineButton = styled(Link)`
  padding: 0.4rem 0.8rem;
  border: 1px solid #3b82f6;
  border-radius: 20px;
  background-color: transparent;
  color: #3b82f6 !important;
  font-weight: 500;
  text-decoration: none;
  font-size: 0.9rem;

  &:hover {
    background-color: #3b82f6;
    color: #fff !important;
  }
`;

export const FilledButton = styled(Link)`
  padding: 0.4rem 0.8rem;
  border: 1px solid #3b82f6;
  border-radius: 20px;
  background-color: #3b82f6;
  color: #fff !important;
  font-weight: 500;
  text-decoration: none;
  font-size: 0.9rem;

  &:hover {
    background-color: #fff;
    border-color: #3b82f6;
    color: #3b82f6 !important;
  }
`;
