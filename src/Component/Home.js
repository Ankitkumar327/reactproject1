import React from "react";
import styles from "../AppStyles.module.css";
import FeaturedArticleComponent from "./FeaturedArticleComponent";
import LatestArticlesAllSection from "./LatestArticleAllSection";
import LatestArticleCategory from "./LatestArticleCateogry";
import LatestStories from "./LatestStories";

const Home = () => {
  return (
    <div className={styles.commonStyle}>
      <FeaturedArticleComponent />
      <LatestArticlesAllSection />
      <LatestArticleCategory />
      <LatestStories />
    </div>
  );
};

export default Home;
