"use client";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function RecipeList() {
  const [recipes, setRecipes] = useState<unknown[]>([]);

  useEffect(() => {
    async function fetchRecipes() {
      const { data, error } = await supabase.from("recipes").select("*");
      if (!error && data) setRecipes(data);
    }

    fetchRecipes();
  }, []);

  return (
    <div>
      <h2>All Recipes</h2>
      <ul>
        {recipes.map((r) => (
          // @ts-expect-error data is not null
          <li key={r.id}>{r.title}</li>
        ))}
      </ul>
    </div>
  );
}
