import PostDate from "./PostDate";
import Topic from "./Topic";
import PostTitle from "./PostTitle";
import PostDescription from "./PostDescription";
import PostMeta from "./PostMeta";
import PostAuthor from "./PostAuthor";

const Article = ({ aside }) => {
  return (
    <article
      className={`${
        !aside ? "pb-16 lg:pb-9" : "py-3"
      } relative border-b border-b-gray-100`}
    >
      <div>
        {!aside ? (
          <dl className="mb-4 flex flex-wrap gap-4 text-xs leading-6">
            <PostDate />
            <Topic />
          </dl>
        ) : null}
        <PostTitle aside={aside} />
        {!aside ? <PostDescription /> : null}
      </div>
      <div
        className={`${
          !aside ? "mt-4" : "mt-2"
        } flex flex-wrap items-center justify-between`}
      >
        <PostAuthor />
        {!aside ? <PostMeta /> : null}
      </div>
    </article>
  );
};

export default Article;
