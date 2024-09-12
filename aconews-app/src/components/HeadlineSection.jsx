const HeadlineSection = () => {
  return (
    <section className="bg-gray-800 text-white py-20 text-center">
      <h1 className="text-5xl font-bold mb-4">Today's Top Headlines</h1>
      <p className="text-lg mb-6">Get the latest updates from around the globe.</p>
      <a href="#news" className="bg-red-500 text-white py-3 px-6 rounded-full hover:bg-red-400 transition">Read Latest News</a>
    </section>
  );
};

export default HeadlineSection;
