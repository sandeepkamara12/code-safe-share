import { Link } from "react-router-dom";

const Users = ({ aside, username, details }) => {
  return (
    <div
      className={`${
        !aside ? "mt-4" : "py-3"
      } flex flex-wrap items-center justify-between text-xs border-b border-b-gray-100`}
    >
      <div className="inline-flex gap-1 group items-center w-8/12">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-10"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
          />
        </svg>
        <div className="flex flex-wrap flex-col w-11/12">
          <span className="text-sm leading-5 text-gray-900 font-semibold group-hover:text-blue-600 transition-colors">
            {username}
          </span>
          <span className="text-xs text-gray-600 line-clamp-1 overflow-hidden whitespace-normal text-ellipsis">
            {details}
          </span>
        </div>
      </div>
      <div className="w-3/12 text-end">
        <Link className="inline-block font-medium py-1.5 px-3 bg-gray-200 rounded-full text-gray-600 transition-colors hover:text-gray-50 hover:bg-gray-600">
          Follow
        </Link>
      </div>
    </div>
  );
};

export default Users;
