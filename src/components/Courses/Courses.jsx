import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const Courses = () => {
  const courses = useLoaderData();
  console.log(courses);
  return (
    <section className="px-5 py-10 dark:bg-gray-800 dark:text-gray-100">
      <div className="container grid grid-cols-12 mx-auto gap-y-6 md:gap-10">
        <div className="flex flex-col justify-between col-span-12 py-2 space-y-8 md:space-y-16 md:col-span-3">
          <div className="flex flex-col space-y-8 md:space-y-12">
            {courses.map((course) => (
              <Link>{course.title}</Link>
            ))}
          </div>
        </div>
        <div className="relative flex col-span-12 bg-center bg-no-repeat bg-cover dark:bg-gray-500  lg:col-span-9 md:col-span-9 min-h-96">
          <section className="md:py-0 sm:py-12 dark:bg-gray-800 dark:text-gray-100">
            <div className="container p-6 mx-auto space-y-8">
              <div className="space-y-2 text-center">
                <h2 className="text-3xl font-bold">Partem reprimique an pro</h2>
                <p className="font-serif text-sm dark:text-gray-400">
                  Qualisque erroribus usu at, duo te agam soluta mucius.
                </p>
              </div>
              <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
                <article className="flex flex-col dark:bg-gray-900">
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    aria-label="Te nulla oportere reprimique his dolorum"
                  >
                    <img
                      alt=""
                      className="object-cover w-full h-52 dark:bg-gray-500"
                      src="https://source.unsplash.com/200x200/?fashion?1"
                    />
                  </a>
                  <div className="flex flex-col flex-1 p-6">
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      aria-label="Te nulla oportere reprimique his dolorum"
                    ></a>
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      className="text-xs tracking-wider uppercase hover:underline dark:text-violet-400"
                    >
                      Convenire
                    </a>
                    <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">
                      Te nulla oportere reprimique his dolorum
                    </h3>
                    <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
                      <span>June 1, 2020</span>
                      <span>2.1K views</span>
                    </div>
                  </div>
                </article>
                <article className="flex flex-col dark:bg-gray-900">
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    aria-label="Te nulla oportere reprimique his dolorum"
                  >
                    <img
                      alt=""
                      className="object-cover w-full h-52 dark:bg-gray-500"
                      src="https://source.unsplash.com/200x200/?fashion?2"
                    />
                  </a>
                  <div className="flex flex-col flex-1 p-6">
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      aria-label="Te nulla oportere reprimique his dolorum"
                    ></a>
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      className="text-xs tracking-wider uppercase hover:underline dark:text-violet-400"
                    >
                      Convenire
                    </a>
                    <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">
                      Te nulla oportere reprimique his dolorum
                    </h3>
                    <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
                      <span>June 2, 2020</span>
                      <span>2.2K views</span>
                    </div>
                  </div>
                </article>
                <article className="flex flex-col dark:bg-gray-900">
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    aria-label="Te nulla oportere reprimique his dolorum"
                  >
                    <img
                      alt=""
                      className="object-cover w-full h-52 dark:bg-gray-500"
                      src="https://source.unsplash.com/200x200/?fashion?3"
                    />
                  </a>
                  <div className="flex flex-col flex-1 p-6">
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      aria-label="Te nulla oportere reprimique his dolorum"
                    ></a>
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      className="text-xs tracking-wider uppercase hover:underline dark:text-violet-400"
                    >
                      Convenire
                    </a>
                    <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">
                      Te nulla oportere reprimique his dolorum
                    </h3>
                    <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
                      <span>June 3, 2020</span>
                      <span>2.3K views</span>
                    </div>
                  </div>
                </article>
                <article className="flex flex-col dark:bg-gray-900">
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    aria-label="Te nulla oportere reprimique his dolorum"
                  >
                    <img
                      alt=""
                      className="object-cover w-full h-52 dark:bg-gray-500"
                      src="https://source.unsplash.com/200x200/?fashion?4"
                    />
                  </a>
                  <div className="flex flex-col flex-1 p-6">
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      aria-label="Te nulla oportere reprimique his dolorum"
                    ></a>
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      className="text-xs tracking-wider uppercase hover:underline dark:text-violet-400"
                    >
                      Convenire
                    </a>
                    <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">
                      Te nulla oportere reprimique his dolorum
                    </h3>
                    <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
                      <span>June 4, 2020</span>
                      <span>2.4K views</span>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default Courses;
