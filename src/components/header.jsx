import { useState } from "react";
import { CartIcon, HeartIcon, SearchIcon, UserIcon } from "../assets/icons";
import { Link } from "react-router-dom";

const Header = () => {
  const [link, setLink] = useState("home");

  console.log("hello");

  return (
    <header>
      <div className="container w-full max-w-[1140px] mx-auto px-[10px]">
        <div className="w-full flex items-center justify-between py-[16px] ">
          <div>
            <Link to={"/"}>
              <h1 className="md:min-[320px]:text-[22px] md:max-[1024px]:text-[32px] font-[700]">
                <span className="">Texno</span>
                <span className="text-[#FF0000]">Bozor</span>
              </h1>
            </Link>
          </div>
          <div className="hidden">
            <form className="bg-[#F5F5F5] w-[375px] rounded-[8px] px-[12px] py-[8px] flex gap-[10px] border-[1px] border-[#F5F5F5] focus-within:border-[1px] focus-within:border-[#999] ease-in-out duration-[0.1s]">
              <label htmlFor="search">
                <SearchIcon />
              </label>
              <input
                id="search"
                placeholder="Search..."
                className="bg-transparent outline-none flex-auto"
                type="text"
              />
            </form>
          </div>
          <div className="gap-[20px] hidden lg:flex">
            <Link
              to={"/"}
              onClick={() => setLink("home")}
              className={`text-[#${
                link === "/" || "home" ? "000" : "909090"
              }] px-[14px] py-[6px]`}
            >
              Home
            </Link>
            <Link
              to={"/about"}
              onClick={() => setLink("about")}
              className={`text-[#${
                link === "about" ? "000" : "909090"
              }] px-[14px] py-[6px]`}
            >
              About
            </Link>
            <Link
              to={"/cantact"}
              onClick={() => setLink("cantact")}
              className={`text-[#${
                link === "cantact" ? "000" : "909090"
              }] px-[14px] py-[6px]`}
            >
              Cantact Us
            </Link>
            <Link
              to={"/blog"}
              onClick={() => setLink("blog")}
              className={`text-[#${
                link === "blog" ? "000" : "909090"
              }] px-[14px] py-[6px]`}
            >
              Blog
            </Link>
          </div>

          <div className="flex gap-[12px] items-center justify-center hidden md:flex">
            <button className="p-[8px] rounded-[4px] hover:bg-[#F5F5F5] transition-all ease-in-out duration-[0.2s]">
              <HeartIcon />
            </button>
            <button className="p-[8px] rounded-[4px] hover:bg-[#F5F5F5] transition-all ease-in-out duration-[0.2s]">
              <CartIcon />
            </button>
            <button className="p-[8px] rounded-[4px] hover:bg-[#F5F5F5] transition-all ease-in-out duration-[0.2s]">
              <UserIcon />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
