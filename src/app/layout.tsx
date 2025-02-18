"use client";
import React from "react";
import { AuthProvider } from "@/app/AuthProvider";
import NavBarWithAuth from "@/components/Nav/Nav";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <head>
        <title>Cook Like an Engineer</title>
      </head>
      <body>
        <AuthProvider>
          <NavBarWithAuth />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
};

export default RootLayout;
