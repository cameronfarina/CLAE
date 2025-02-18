"use client";
import React, { useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/navigation";
import styled from "styled-components";

const LoginContainer = styled.div`
  max-width: 400px;
  margin: 4rem auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LoginTitle = styled.h1`
  font-size: 1.5rem;
  margin-bottom: 2rem;
`;

const Form = styled.form`
  width: 100%;
`;

const FormGroup = styled.div`
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const Label = styled.label`
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
  color: #333;
`;

const Input = styled.input`
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;

  &:focus {
    outline: none;
    border-color: #3b82f6;
  }
`;

const ForgotLink = styled.a`
  position: absolute;
  right: 0;
  top: 0;
  font-size: 0.8rem;
  color: #3b82f6;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const RememberMeContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
`;

const Checkbox = styled.input`
  margin-right: 0.5rem;
`;

const RememberMeLabel = styled.label`
  font-size: 0.9rem;
  color: #333;
`;

const ErrorMsg = styled.p`
  color: red;
  font-size: 0.85rem;
  margin-bottom: 1rem;
`;

const SignInButton = styled.button`
  width: 100%;
  background-color: #3b82f6;
  color: #fff;
  padding: 0.75rem;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  font-weight: 600;

  &:hover {
    background-color: #2563eb;
  }
`;

const Page = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setErrorMsg(error.message);
    } else {
      router.push("/profile");
    }
  };

  return (
    <LoginContainer>
      <LoginTitle>Sign in</LoginTitle>
      <Form onSubmit={handleLogin}>
        {errorMsg && <ErrorMsg>{errorMsg}</ErrorMsg>}

        <FormGroup>
          <Label>Email</Label>
          <Input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormGroup>

        <FormGroup>
          <Label>Password</Label>
          <ForgotLink href="#">Forgot password?</ForgotLink>
          <Input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormGroup>

        <RememberMeContainer>
          <Checkbox
            type="checkbox"
            id="rememberMe"
            checked={rememberMe}
            onChange={() => setRememberMe(!rememberMe)}
          />
          <RememberMeLabel htmlFor="rememberMe">Remember me</RememberMeLabel>
        </RememberMeContainer>

        <SignInButton type="submit">Sign in</SignInButton>
      </Form>
    </LoginContainer>
  );
};

export default Page;
