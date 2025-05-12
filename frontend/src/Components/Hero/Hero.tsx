import React from "react";
import hero from "./hero.png";
import { Link } from "react-router-dom";
import { useAuth } from "../../Context/useAuth";

interface Props {}

const Hero = (props: Props) => {
  const { isLoggedIn } = useAuth();
  return (
    <section id="hero">
      <div className="container flex flex-col-reverse mx-auto p-8 lg:flex-row">
        <div className="flex flex-col space-y-10 mb-44 m-10 lg:m-10 xl:m-20 lg:mt:16 lg:w-1/2 xl:mb-52">
          <h1 className="text-5xl font-bold text-center lg:text-6xl lg:max-w-md lg:text-left">
            Wealth Meets Wisdom.
          </h1>
          <p className="text-2xl text-center text-gray-400 lg:max-w-md lg:text-left">
            Stay informed with stock data, analyze trends, and craft a portfolio
            that drives success.
          </p>
          <div className="mx-auto lg:mx-0">
            {isLoggedIn() ? (
              <Link
                to="/search"
                className="py-5 px-10 text-2xl font-bold text-white bg-[#a07035] rounded lg:py-4 hover:opacity-70"
              >
                View Portfolio
              </Link>
            ) : (
              <Link
                to="/register"
                className="py-5 px-10 text-2xl font-bold text-white bg-[#a07035] rounded lg:py-4 hover:opacity-70"
              >
                Get Started
              </Link>
            )}
          </div>
        </div>
        <div className="mb-24 mx-auto md:w-180 md:px-10 lg:mb-0 lg:w-1/2">
          <img src={hero} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
