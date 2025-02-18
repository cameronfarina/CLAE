"use client";
import React from "react";
import Image from "next/image";

type RecipeQuickViewProps = {
  imageUrl: string;
  title: string;
  description: string;
  duration: string;
  ingredients: string;
  instructions: string;
};

const RecipeQuickView: React.FC<RecipeQuickViewProps> = ({
  imageUrl,
  title,
  description,
  duration,
  ingredients,
  instructions,
}) => {
  const ingredientList = ingredients.split("\n").filter(Boolean);
  const instructionList = instructions.split("\n").filter(Boolean);

  return (
    <div className="max-w-md rounded overflow-hidden shadow-md bg-white">
      <Image src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="font-semibold text-xl mb-1">{title}</h2>
        <p className="text-gray-600 text-sm">{description}</p>

        <p className="text-sm text-gray-600 mt-2">
          <strong>Time:</strong> {duration}
        </p>

        <h3 className="font-semibold text-lg mt-4">Ingredients</h3>
        <ul className="list-disc list-inside text-sm text-gray-700 mt-2">
          {ingredientList.map((item, idx) => (
            <li key={idx}>{item.trim()}</li>
          ))}
        </ul>

        <h3 className="font-semibold text-lg mt-4">Instructions</h3>
        <ol className="list-decimal list-inside text-sm text-gray-700 mt-2 space-y-1">
          {instructionList.map((step, idx) => (
            <li key={idx}>{step.trim()}</li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default RecipeQuickView;
