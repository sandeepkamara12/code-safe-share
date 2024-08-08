import React, { useEffect, useRef, useState } from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
import Users from "./Users";
import Topic from "./Topic";
import Article from "./Article";

const Layout = ({ children }) => {
  const asideRef = useRef(null);
  const [isSticky, setSticky] = useState(false);
  const [top, setTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (asideRef.current) {
        const sidebarHeight = asideRef.current.offsetHeight;
        const scrollTop = window.pageYOffset + window.innerHeight;

        if (scrollTop > sidebarHeight) {
          setTop(window.innerHeight - (sidebarHeight + 80)); // 64 is the header height + a few jurking margin.
          setSticky(true);
        } else {
          setTop(0);
          setSticky(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Header alignment="top" />
      <main className="max-w-[52rem] mx-auto px-4 py-20 sm:px-6 md:px-8 lg:max-w-5xl">
        <div className="flex justify-between">
          <div className="relative w-7/12">{children}</div>
          <aside className="w-4/12">
            <div
              ref={asideRef}
              style={{
                position: isSticky ? "sticky" : "relative",
                top: isSticky ? top : "initial",
              }}
            >
              <div className="mb-10">
                <h1 className="mb-4 text-2xl tracking-tight text-slate-900 font-extrabold dark:text-slate-200">
                  Today's Posts
                </h1>
                <Article aside={true} />
                <Article aside={true} />
                <Article aside={true} />
                <Link className="mt-4 inline-block text-xs leading-5 font-medium py-1.5 px-3 bg-gray-200 rounded-full text-gray-600 transition-colors hover:text-gray-50 hover:bg-gray-600">
                  View All Posts
                </Link>
              </div>
              <div className="mb-10">
                <h1 className="mb-4 text-2xl tracking-tight text-slate-900 font-extrabold dark:text-slate-200">
                  Following them?
                </h1>
                <Users
                  aside={true}
                  username="Pavel Samsonov"
                  details="New JavaScript and Web Development content."
                />
                <Users
                  aside={true}
                  username="Samanta Writes"
                  details="Self-improvement and engaging reviews of top."
                />
                <Users
                  aside={true}
                  username="Will Lockett"
                  details="Problem designer at AWS. Sick of rectangles."
                />
                <Link className="mt-4 inline-block text-xs leading-5 font-medium py-1.5 px-3 bg-gray-200 rounded-full text-gray-600 transition-colors hover:text-gray-50 hover:bg-gray-600">
                  View All Authors
                </Link>
              </div>
              <div className="mb-10">
                <h1 className="mb-4 text-2xl tracking-tight text-slate-900 font-extrabold dark:text-slate-200">
                  Topics in demand
                </h1>
                <div className="flex flex-wrap items-center gap-2 text-xs leading-6 mb-8 ">
                  <Topic topic="React JS" />
                  <Topic topic="React Native" />
                  <Topic topic="Angular JS" />
                  <Topic topic="Node JS" />
                  <Topic topic="Typescript" />
                  <Topic topic="Javascript" />
                  <Link className="mt-4 inline-block text-xs leading-5 font-medium py-1.5 px-3 bg-gray-200 rounded-full text-gray-600 transition-colors hover:text-gray-50 hover:bg-gray-600">
                    View All Topics
                  </Link>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </>
  );
};

export default Layout;
