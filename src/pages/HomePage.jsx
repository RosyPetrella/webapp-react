import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLoader } from "../GlobalContentx";

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const { showLoader, hideLoader } = useLoader();

  useEffect(() => {
    showLoader();
    fetch("http://localhost:3000/api/movies")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data);
      })
      .finally(() => {
        hideLoader();
      });
  }, [showLoader, hideLoader]);

  return (
    <>
      <div
        class="bg-dark text-light text-center py-5"
        style={{
          backgroundImage: "linear-gradient(to bottom, #212529, #2e2e2e)",
        }}
      >
        <div class="container-fluid py-5">
          <h1 class="display-4 fw-bold">Explore Our Movie Collection</h1>
          <p class="lead">
            Discover stories, directors, and unforgettable characters.
          </p>
        </div>
      </div>

      <section>
        <div className="container mt-5">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4">
            {movies.map((movie) => (
              <div key={movie.id} className="col">
                <div
                  className="card h-100 text-light border-0 shadow"
                  style={{ backgroundColor: "#2e2e2e" }}
                >
                  <img
                    src={`http://localhost:3000/images/${movie?.image}`}
                    alt=""
                    className="card-img-top"
                    style={{ height: "300px", objectFit: "cover" }}
                  />
                  <div className="card-body d-flex flex-column">
                    <h3 className="card-title">{movie.title}</h3>
                    <p className="mb-1">{movie.director}</p>
                    <p className="mb-1">{movie.genre}</p>
                    <p className="mb-3">{movie.year}</p>
                    <Link
                      to={`/movies/${movie.id}`}
                      className="btn btn-outline-light mt-auto"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
