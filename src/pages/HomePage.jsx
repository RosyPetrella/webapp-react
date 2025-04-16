import { useEffect, useState } from "react";

export default function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/movies")
      .then((res) => res.json()) // Corretta la sintassi qui
      .then((data) => {
        console.log(data);
        setMovies(data);
      });
  }, []);

  return (
    <div className="home-page">
      <h1>Home Page</h1>
      <p>Welcome in our website!</p>

      <h2>Movies</h2>

      <section>
        <div className="container">
          <div className="row">
            <div className="row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4">
              {movies.map((movie) => (
                <div key={movie.id}>
                  <h3>{movie.title}</h3>
                  <img
                    src={`http://localhost:3000/images/${movie?.image}`}
                    alt=""
                    className="card-img-top"
                  />
                  <p>{movie.director}</p>
                  <p>{movie.genre}</p>
                  <p>{movie.year}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
