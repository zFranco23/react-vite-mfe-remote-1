import { Link } from "react-router";

const NotFound = () => {
  return (
    <main className="tw:grid tw:min-h-full tw:place-items-center tw:bg-white tw:px-6 tw:py-24 tw:sm:py-32 tw:lg:px-8">
      <div className="tw:text-center">
        <p className="tw:text-base tw:font-semibold tw:text-indigo-600">404</p>
        <h1 className="tw:mt-4 tw:text-5xl tw:font-semibold tw:tracking-tight tw:text-balance tw:text-gray-900 sm:tw:text-7xl">
          Page not found
        </h1>
        <p className="tw:mt-6 tw:text-lg tw:font-medium tw:text-pretty tw:text-gray-500 sm:tw:text-xl/8">
          Sorry, we couldn't find the page you're looking for.
        </p>
        <div className="tw:mt-10 tw:flex tw:items-center tw:justify-center tw:gap-x-6">
          <Link
            to="/"
            className="tw:rounded-md tw:bg-indigo-600 tw:px-3.5 tw:py-2.5 tw:text-sm tw:font-semibold tw:text-white tw:shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Go back home
          </Link>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
