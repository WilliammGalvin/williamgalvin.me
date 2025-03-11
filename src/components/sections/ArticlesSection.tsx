"use client";

import { useEffect, useState } from "react";
import SectionWrapper from "../SectionWrapper";
import Link from "next/link";
import { motion } from "framer-motion";

type Article = {
  title: string;
  description: string;
  read_time: number;
  link: string;
};

const ArticlesSection = () => {
  const [articles, setArticles] = useState<Article[] | null>(null);
  const [articleLoadErr, setArticleLoadErr] = useState<boolean>(false);

  useEffect(() => {
    const fetchArticles = async () => {
      await fetch("./medium_articles.json")
        .then((res) => res.json())
        .then((data) => setArticles(data))
        .catch((err) => {
          setArticleLoadErr(true);
          console.error("Error fetching articles", err);
        });
    };

    fetchArticles();
  }, []);

  return (
    <SectionWrapper
      title={{
        header: "Medium Articles",
        description:
          "Below are articles I've written based upon deep dives into complex computer science topics.",
      }}
    >
      {articles == null || articleLoadErr ? (
        <div className="flex flex-1 justify-center items-center">
          <span className="text-neutral-400">
            {articleLoadErr ? "Error loading articles." : "Loading..."}
          </span>
        </div>
      ) : (
        <ul className="flex-1 mx-12 flex justify-center">
          {articles.map((article, i) => {
            return (
              <li key={i}>
                <ArticleBlock article={article} />
              </li>
            );
          })}
        </ul>
      )}
    </SectionWrapper>
  );
};

const ArticleBlock = ({ article }: { article: Article }) => {
  const { title, description, read_time, link } = article;

  return (
    <Link href={link} target="_blank">
      <motion.div
        className="p-4 border-2 border-black bg-white inline-flex flex-col"
        whileHover={{
          borderRadius: "12px",
        }}
      >
        <h3 className="font-bold">{title}</h3>
        <span className="text-sm text-neutral-500 mb-4">
          Read time: {read_time} minutes
        </span>
        <p className="max-w-[350px] text-neutral-600">{description}</p>
      </motion.div>
    </Link>
  );
};

export default ArticlesSection;
