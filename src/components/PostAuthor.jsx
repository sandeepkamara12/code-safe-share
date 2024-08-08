import React from "react";
import { Link } from "react-router-dom";

const PostAuthor = () => {
  return (
    <Link className="inline-flex flex-wrap gap-1 group items-center text-xs leading-5">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
        />
      </svg>
      <span className="text-gray-900 font-medium group-hover:text-blue-600 transition-colors">
        Tim Cook
        <span className="text-gray-600"> in blog name</span>
      </span>
    </Link>
  );
};

export default PostAuthor;
