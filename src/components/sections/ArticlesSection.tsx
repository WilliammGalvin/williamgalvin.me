"use client";

import { useEffect, useState } from "react";
import SectionWrapper from "../SectionWrapper";
import Link from "next/link";
import { motion } from "framer-motion";
import { BiBook } from "react-icons/bi";
import useScreen from "@/hooks/useScreen";

type Article = {
  title: string;
  description: string;
  read_time: number;
  link: string;
};

const ArticlesSection = () => {
  const [articles, setArticles] = useState<Article[] | null>(null);
  const [articleLoadErr, setArticleLoadErr] = useState<boolean>(false);
  const { isMobile } = useScreen();

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
        header: "Medium articles",
        description:
          "Below are research articles that I've written about various computers science topics.",
      }}
    >
      {!isMobile() ? (
        <div className="flex justify-center mb-6">
          <Link href="https://medium.com/@williammgalvin" target="_blank">
            <AllArticleButtonContent />
          </Link>
        </div>
      ) : (
        <Link
          href="https://medium.com/@williammgalvin"
          target="_blank"
          className="absolute left-1/2 -translate-x-1/2 bottom-5"
        >
          <AllArticleButtonContent />
        </Link>
      )}

      {articles == null || articleLoadErr ? (
        <div className="flex flex-1 justify-center items-center">
          <span className="text-neutral-400">
            {articleLoadErr ? "Error loading articles." : "Loading..."}
          </span>
        </div>
      ) : (
        <div className="flex-1 flex justify-center sm:px-12 px-6 pb-12">
          <ul className="grid sm:grid-cols-2 grid-cols-1 gap-5">
            {articles.map((article, i) => {
              return (
                <li key={i}>
                  <ArticleBlock article={article} />
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </SectionWrapper>
  );
};

const ArticleBlock = ({ article }: { article: Article }) => {
  const { title, description, read_time, link } = article;

  return (
    <Link href={link} target="_blank">
      <motion.div
        className="relative p-4 border-2 border-black bg-white inline-flex flex-col gap-y-12 w-full h-full justify-between"
        whileHover={{
          borderRadius: "12px 0 12px 12px",
        }}
      >
        <span className="absolute top-1 -translate-y-[70%] right-1 translate-x-3/4 text-xl">
          📌
        </span>

        <div>
          <h3 className="font-bold max-w-[350px]">{title}</h3>
          <span className="text-sm text-neutral-500 mb-4">
            Read time: {read_time} minutes
          </span>
        </div>

        <p className="max-w-[350px] text-neutral-600">{description}</p>
      </motion.div>
    </Link>
  );
};

const AllArticleButtonContent = () => {
  return (
    <motion.div
      className="inline-flex gap-x-2 items-center border-2 border-black bg-white rounded-lg px-6 py-2 md:shadow-lg"
      whileHover={{
        borderRadius: 0,
      }}
    >
      <BiBook />
      <span>View all articles</span>
    </motion.div>
  );
};

export default ArticlesSection;
