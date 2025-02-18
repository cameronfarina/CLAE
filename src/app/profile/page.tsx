"use client";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useAuth } from "../AuthProvider";
import { useRouter } from "next/navigation";
import RecipeCard from "@/components/RecipeCard";

type FavoriteRow = {
  id?: number;
  user_id?: string;
  recipe_id: number;
  totalTime: number;
  recipes: {
    title: string;
    image_url: string;
    user_id: string;
    created_at: string;
    total_time: number;
  };
};

const Page = () => {
  const { session, loading } = useAuth();
  const router = useRouter();
  const [favorites, setFavorites] = useState<FavoriteRow[]>([]);

  useEffect(() => {
    if (!loading && !session) {
      router.push("/login");
    }
  }, [loading, session, router]);

  useEffect(() => {
    const fetchFavorites = async () => {
      if (!session) return;

      const { data, error } = await supabase
        .from("favorites")
        .select("recipe_id, recipes!inner(title, image_url)")
        .eq("user_id", session.user.id)
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Error fetching favorites:", error.message);
      } else {
        // @ts-ignore
        setFavorites(data || []);
      }
    };

    if (!loading && session) {
      fetchFavorites();
    }
  }, [loading, session]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!session) {
    return null;
  }

  return (
    <div style={{ maxWidth: 800, margin: "2rem auto" }}>
      <h1>My Favorites</h1>
      {favorites.length === 0 ? (
        <p>You have no favorites yet.</p>
      ) : (
        <ul
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "1rem",
            listStyle: "none",
            padding: 0,
          }}
        >
          {favorites.map((fav) => (
            <li key={fav.recipe_id}>
              <RecipeCard
                recipeId={fav.recipe_id}
                title={fav.recipes.title}
                imageUrl={fav.recipes.image_url}
                description="Your favorite recipe"
                showFavoriteIcon={false}
                totalTime={fav.totalTime}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Page;
