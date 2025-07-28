import { Link } from "react-router";

const LINKS = [
  {
    path: "/",
    label: "Go to home",
  },
  {
    path: "/showcase",
    label: "Go to showcase",
  },
  {
    path: "/zustand-example",
    label: "Go to zustand example",
  },
];

const Links = () => {
  return (
    <div className="flex gap-4">
      {LINKS.map((el) => (
        <Link
          key={el.path}
          to={el.path}
          className="text-blue-500 hover:underline"
        >
          {el.label}
        </Link>
      ))}
    </div>
  );
};

export default Links;
