import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="flex items-center justify-between w-screen p-4 bg-background-secondary">
      <a className="text-3xl md:text-5xl" href="/">
        Story Dragon
      </a>
      <Link className="text-2xl md:text-4xl" to="/User/Registration">
        Sign-Up
      </Link>
    </nav>
  );
}
