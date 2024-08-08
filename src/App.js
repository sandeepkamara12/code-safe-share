import "./App.css";
import Article from "./components/Article";
import Topic from "./components/Topic";
import Layout from "./components/Layout";

function App() {
  return (
    <div className="App">
      <Layout>

        {/* <NewsLetter /> */}
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
          <Article />
          <Article />
          <Article />
          <Article />
          <Article />
          <Article />
          <Article />
          <Article />
          <Article />
          <Article />
          <Article />
          <Article />
          <Article />
          <Article />
          <Article />
          <Article />
          <Article />
          <Article />
          <Article />
          <Article />
          <Article />
          <Article />
          <Article />
          <Article />
          <Article />
          <Article />
          <Article />
          <Article />
        </div>

      </Layout>
      {/* <Header alignment="bottom" /> */}
    </div>
  );
}

export default App;
