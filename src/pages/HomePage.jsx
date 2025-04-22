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
      <div class="p-5 mb-4 bg-light rounded-3">
        <div class="container-fluid py-5">
          <h1 class="display-5 fw-bold">Our Movies</h1>
          <p class="col-md-8 fs-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore
            sunt reiciendis ipsa qui esse nihil nisi libero beatae sequi. Porro
            ut ipsum hic eos quasi necessitatibus exercitationem, commodi sint
            veniam.
          </p>
        </div>
      </div>

      <section>
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4">
            {movies.map((movie) => (
              <div key={movie.id}>
                <div className="card h-100">
                  <img
                    src={`http://localhost:3000/images/${movie?.image}`}
                    alt=""
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <h3 className="card-title">{movie.title}</h3>
                    <p>{movie.director}</p>
                    <p>{movie.genre}</p>
                    <p>{movie.year}</p>
                    <Link
                      to={`/movies/${movie.id}`}
                      className="btn btn-primary"
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
