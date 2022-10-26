import React from "react";

const Home = () => {
  return (
    <section className="dark:bg-gray-800 dark:text-gray-100">
      <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
        <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
          <h1 className="text-5xl font-bold leading-none sm:text-6xl">
            CS
            <span className="dark:text-violet-400"> Mentor</span> learning
            course
          </h1>
          <p className="mt-6 mb-8 text-lg sm:mb-12">
            Learn Computer Science and programming course{" "}
            <br className="hidden md:inline lg:hidden" />
            with easy and simplest way.
          </p>
        </div>
        <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
          <img
            src="https://img.freepik.com/free-vector/online-education-concept_1284-4474.jpg?w=740&t=st=1666784978~exp=1666785578~hmac=b356ac5539435518e0e8222305a7ffa393d18092546888eedca2f9c4bd2ba287"
            alt=""
            className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
