
import { Link } from "react-router-dom";
import "./App.css";
import Article from "./components/Article";
import Header from "./components/Header";
import NewsLetter from "./components/NewsLetter";
import Topic from "./components/Topic";
import Users from "./components/Users";

function App() {
  return (
    <div className="App">
      <Header alignment="top" />
      <main className="max-w-[52rem] mx-auto px-4 py-20 sm:px-6 md:px-8 lg:max-w-5xl">
        {/* <NewsLetter /> */}
        <div className="flex justify-between">
          <div className="relative w-7/12">
            <div className="flex flex-wrap items-center gap-2 text-xs leading-6 mb-8 ">
              <Topic topic="React JS" />
              <Topic topic="React Native" />
              <Topic topic="Angular JS" />
              <Topic topic="Node JS" />
              <Topic topic="Typescript" />
              <Topic topic="Javascript" />
            </div>
            <div className="space-y-16 lg:space-y-10">
              <Article />
              <Article />
              <Article />
              <Article />
            </div>
          </div>
          <aside className="w-4/12">
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
              <Users aside={true} username="Pavel Samsonov" details="New JavaScript and Web Development content." />
              <Users aside={true} username="Samanta Writes" details="Self-improvement and engaging reviews of top." />
              <Users aside={true} username="Will Lockett" details="Problem designer at AWS. Sick of rectangles." />
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
          </aside>
        </div>
      </main>
      {/* <Header alignment="bottom" /> */}
    </div>
  );
}

export default App;
