import { siteTitle } from "./constants/constants";

const Header = () => {
  return (
    <header className="text-center py-5 bg-white shadow-md sticky top-0 z-10">
      <h1 className="text-lg md:text-3xl font-semibold px-4 whitespace-pre-line">
        {siteTitle}
      </h1>
    </header>
  );
};

export default Header;
