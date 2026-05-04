import React from "react";
import { Hero } from "../components/Hero";
import { FeatureBanner } from "../blog/FeatureBanner";
import { CurriculumCards } from "../blog/CurriculumCards";

export const HomePage = () => {
  return (
    <>
      <Hero />
      <FeatureBanner />
      <CurriculumCards />
    </>
  );
};
