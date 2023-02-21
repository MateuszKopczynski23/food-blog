const Navbar = () => {
  return (
      <nav className="navbar">
        <h1>Food Blog</h1>
        <div className="links">
          <a href="/">Home</a>
          <a href="/create">New Recipe</a>
        </div>
      </nav>
  );
};

export default Navbar;
