import { Link } from "react-router-dom";
export default function Header() {
  return (
    <>
      <header>
        <nav className="navbar navbar-expand navbar-light bg-light">
          <div className="nav navbar-nav">
            <Link
              className="nav-item nav-link active"
              to="/"
              aria-current="page"
            >
              Home <span className="visually-hidden">(current)</span>
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
}
