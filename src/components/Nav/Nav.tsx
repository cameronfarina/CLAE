"use client";
import React, { useState } from "react";
import { useAuth } from "@/app/AuthProvider";
import { supabase } from "@/lib/supabaseClient";
import TopSearchOverlay from "@/components/TopSearchOverlay/TopSearchOverlay";
import {
  FilledButton,
  IconButton,
  Logo,
  NavBar,
  NavBarContainer,
  NavCenter,
  NavLeft,
  NavLink,
  NavRight,
  OutlineButton,
} from "./Nav.styles";
import SearchButton from "@/components/SearchButton/SearchButton";

const NavBarWithAuth = () => {
  const { session } = useAuth();
  const [showSearch, setShowSearch] = useState(false);

  const handleLogout = async () => {
    await supabase.auth.signOut();
  };

  return (
    <NavBar>
      <NavBarContainer>
        <NavLeft>
          <Logo href="/">
            <img src="/images/logo.png" alt="Cook Like an Engineer" />
          </Logo>
        </NavLeft>

        <NavCenter>
          <NavLink href="/">Home</NavLink>
          <NavLink href="/recipes">Recipes</NavLink>
          <NavLink href="/about">About</NavLink>
          <NavLink href="/contact">Contact</NavLink>
        </NavCenter>

        <NavRight>
          <SearchButton onClick={() => setShowSearch(true)} />
          {showSearch && (
            <TopSearchOverlay onClose={() => setShowSearch(false)} />
          )}

          {!session ? (
            <>
              <OutlineButton href="/login">Log in</OutlineButton>
              <FilledButton href="/signup">Get started</FilledButton>
            </>
          ) : (
            <>
              <NavLink href="/profile">Profile</NavLink>
              <IconButton onClick={handleLogout}>Logout</IconButton>
            </>
          )}
        </NavRight>
      </NavBarContainer>
    </NavBar>
  );
};

export default NavBarWithAuth;
