"use client";
import React, { useEffect, useState } from "react";
import {
  CardBody,
  CardContainer,
  CardDescription,
  CardLink,
  CardTime,
  CardTitle,
  FavoriteIcon,
} from "./RecipeCard.styles";
import { supabase } from "@/lib/supabaseClient";
import { useAuth } from "@/app/AuthProvider";
import { useRouter } from "next/navigation";
import Image from "next/image";

type RecipeCardProps = {
  recipeId: number;
  title: string;
  description: string;
  imageUrl: string;
  showFavoriteIcon?: boolean;
  totalTime: number;
};

const RecipeCard: React.FC<RecipeCardProps> = ({
  recipeId,
  title,
  description,
  imageUrl,
  showFavoriteIcon = true,
  totalTime,
}) => {
  const { session } = useAuth();
  const router = useRouter();
  const [isFavorited, setIsFavorited] = useState(false);

  const checkIfFavorited = async () => {
    const { data } = await supabase
      .from("favorites")
      .select("id")
      .eq("user_id", session?.user.id)
      .eq("recipe_id", recipeId)
      .single();

    if (data) {
      setIsFavorited(true);
    }
  };

  useEffect(() => {
    if (session && showFavoriteIcon) {
      checkIfFavorited();
    }
  }, [session, showFavoriteIcon, checkIfFavorited]);

  const handleToggleFavorite = async (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();

    if (!session) {
      router.push("/login");
      return;
    }

    if (isFavorited) {
      await supabase
        .from("favorites")
        .delete()
        .eq("user_id", session.user.id)
        .eq("recipe_id", recipeId);
      setIsFavorited(false);
    } else {
      await supabase.from("favorites").insert([
        {
          user_id: session.user.id,
          recipe_id: recipeId,
        },
      ]);
      setIsFavorited(true);
    }
  };

  return (
    <CardContainer>
      <CardLink
        href={`/recipes/${recipeId}`}
        style={{ textDecoration: "none" }}
      >
        <Image
          src={imageUrl}
          alt={title}
          width={300}
          height={200}
          placeholder="blur"
          blurDataURL="/images/placeholder.png"
          style={{ objectFit: "cover" }}
        />
        <CardBody>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
          <CardTime>Total Time: {totalTime} min</CardTime>
        </CardBody>
      </CardLink>

      {showFavoriteIcon && (
        <FavoriteIcon $isFavorited={isFavorited} onClick={handleToggleFavorite}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill={isFavorited ? "rgb(255, 56, 92)" : "rgba(0, 0, 0, 0.5)"}
            stroke="#fff"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d=" M12 21.35 L10.55 20.03 C5.4 15.36 2 12.28 2 8.5 C2 5.42 4.42 3 7.5 3 C9.24 3 10.91 3.81 12 5.09 C13.09 3.81 14.76 3 16.5 3 C19.58 3 22 5.42 22 8.5 C22 12.28 18.6 15.36 13.45 20.04 L12 21.35Z" />
          </svg>
        </FavoriteIcon>
      )}
    </CardContainer>
  );
};

export default RecipeCard;
