"use client";

import React, { useEffect, useState } from "react";
import NewsCard from "./NewsCard";

interface NewsItem {
  url: string;
  title: string;
  urlToImage: string;
}

function NewsList() {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(false);

  async function getAllNews() {
    setLoading(true);
    try {
      const response = await fetch(
        `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.NEXT_PUBLIC_NEWS_APIKEY}`
      );
      const data = await response.json();

      setNewsData(data.articles);
      console.log(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    getAllNews();
  }, []);

  if (loading === true) {
    return (
      <div className="grid h-screen place-items-center">
        <h1 className="text-2xl text-gray-400 animate-pulse">
          Loading news....
        </h1>
      </div>
    );
  }

  return (
    <section className="container mx-auto grid gap-5 my-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {newsData.map((item: NewsItem, index) => (
        <NewsCard
          key={index}
          newsUrl={item.url}
          newsHeadLine={item.title}
          newsImageUrl={item.urlToImage}
        />
      ))}
    </section>
  );
}
export default NewsList;
