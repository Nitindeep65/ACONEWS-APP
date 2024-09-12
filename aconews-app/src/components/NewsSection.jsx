import { useState, useEffect } from 'react';
import NewsCard from './NewsCard';

const NewsSection = () => {
  const [newsArticles, setNewsArticles] = useState([]);

  useEffect(() => {
    fetch('https://gnews.io/api/v4/top-headlines?token=0867ff8e1ca0865b4f13b3335458844f&lang=en')
      .then(response => response.json())
      .then(data => setNewsArticles(data.articles))
      .catch(error => console.error("Error fetching news:", error));
  }, []);

  return (
    <section id="news" className="py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Featured News</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsArticles.map((article, index) => (
            <NewsCard key={index} article={article} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
