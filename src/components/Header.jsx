import ThemeToggler from "./ThemeToggler.jsx";

function Header() {
  return (
    <div className="flex justify-between bg-white dark:bg-blue-900 p-8 lg:px-12 shadow-header">
      <h1 className="text-sm lg:text-2xl text-grey-950 dark:text-white font-extrabold">
        Where in the world?
      </h1>
      <ThemeToggler />
    </div>
  );
}

export default Header;
