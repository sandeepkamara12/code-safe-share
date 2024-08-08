import React from "react";

const PostDescription = () => {
  return (
    <div className="mt-2 mb-0  text-sm text-gray-600">
      <p className="desc text-sm lg:text-md leading-6 line-clamp-2 overflow-hidden whitespace-normal text-ellipsis">
        We just released Headless UI v2.1 for React, which dramatically
        simplifies our transition APIs and adds support for rendering multiple
        dialogs as siblings. our transition APIs and adds support for rendering
        multiple dialogs as siblings.
      </p>

      {/* <Link
            className="flex items-center text-sm text-sky-500 font-medium mt-2 hover:text-blue-600"
            href=""
          >
            Read more
          </Link> */}
    </div>
  );
};

export default PostDescription;
