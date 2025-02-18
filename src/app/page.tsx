import { supabase } from "@/lib/supabaseClient";
import Hero from "@/components/Hero/Hero";
import FeaturedRecipes from "@/components/FeaturedRecipes/FeaturedRecipes";
import CallToAction from "@/components/CallToAction/CallToAction";
import InfoCards from "@/components/InfoCards/InfoCards";

export const revalidate = 60;

const HomePage = async () => {
  const { data, error } = await supabase
    .from("recipes")
    .select(
      "id, title, description, image_url, prep_time, cook_time, total_time",
    )
    .eq("featured", true)
    .limit(6);

  if (error) {
    console.error("Error fetching featured recipes:", error.message);
  }

  const featured = (data ?? []).map((item) => ({
    id: item.id,
    title: item.title,
    description: item.description,
    image_url: item.image_url,
    prep_time: item.prep_time,
    cook_time: item.cook_time,
    totalTime: item.total_time,
  }));

  return (
    <>
      <Hero />
      <InfoCards />
      <FeaturedRecipes recipes={featured || []} />
      <CallToAction />
    </>
  );
};

export default HomePage;
