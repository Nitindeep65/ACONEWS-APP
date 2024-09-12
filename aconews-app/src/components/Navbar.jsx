const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="/" className="text-2xl font-bold text-blue-600">ACONEWS</a>
        <div className="hidden md:flex space-x-6">
          <a href="/" className="text-gray-700 hover:text-blue-600">Home</a>
          <a href="/news" className="text-gray-700 hover:text-blue-600">News</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
