const NewsCard = ({ article }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <img src={article.image} alt={article.title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-4">{article.title}</h3>
        <p className="text-gray-600 mb-4">{article.description}</p>
        <a href={article.url} target="_blank" rel="noopener noreferrer" className="text-red-500 hover:text-red-700">Read More</a>
      </div>
    </div>
  );
};

export default NewsCard;

