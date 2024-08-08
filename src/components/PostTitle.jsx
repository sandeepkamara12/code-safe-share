import React from "react";

const PostTitle = ({ aside }) => {
  return (
    <h3
      className={`${
        !aside ? "text-md" : "text-sm"
      } font-semibold tracking-tight text-slate-900 dark:text-slate-200 pt-8 lg:pt-0`}
    >
      Headless UI v2.1: Simplified transition API and improved multi-dialog
      support
    </h3>
  );
};

export default PostTitle;
