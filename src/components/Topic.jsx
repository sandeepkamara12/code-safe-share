import React from "react";
import { Link } from "react-router-dom";

const Topic = ({ topic }) => {
  return (
    <dd>
      <Link className="font-medium py-1.5 px-3 bg-gray-200 rounded-full text-gray-600 transition-colors hover:text-gray-50 hover:bg-gray-600">
        {topic ? topic : "Books"}
      </Link>
    </dd>
  );
};

export default Topic;
