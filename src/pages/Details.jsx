import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReviewForm from "../components/ReviewForm";
import { useLoader } from "../GlobalContentx";

export default function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const { showLoader, hideLoader } = useLoader();

  useEffect(() => {
    showLoader();
    fetch(`http://localhost:3000/api/movies/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setMovie(data);
      })
      .finally(() => {
        hideLoader();
      });
  }, [id, showLoader, hideLoader]);

  if (!movie) {
    return <div className="container my-5">Loading...</div>;
  }

  return (
    <>
      <div className="container my-5 text-light">
        <div className="row align-items-center mb-5">
          <div className="col-md-4 mb-3 mb-md-0">
            <img
              src={`http://localhost:3000/images/${movie.image}`}
              alt={movie.title}
              className="img-fluid rounded shadow"
            />
          </div>
          <div
            className="col-md-8"
            style={{
              backgroundColor: "#2e2e2e",
              borderRadius: "10px",
              padding: "2rem",
            }}
          >
            <div className="p-4 rounded" style={{ backgroundColor: "#2e2e2e" }}>
              <h1>{movie.title}</h1>
              <p className="lead">Director: {movie.director}</p>
              <p>Genre: {movie.genre}</p>
              <p>Year: {movie.release_year}</p>
              <p>Abstract: {movie.abstract}</p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <div className="mb-4">
              <h3 className="mb-3">Reviews</h3>
              {movie.reviews.map((review) => (
                <div
                  key={review.id}
                  className="card mb-3 bg-dark text-light border-0 shadow-sm"
                >
                  <div className="card-body">
                    <h5 className="card-title">Rating: {review.vote}/5</h5>
                    <p className="card-text">{review.text}</p>
                    <p className="card-text">
                      <small className="text-light">{review.name}</small>
                    </p>
                  </div>
                </div>
              ))}

              <ReviewForm
                movieId={movie.id}
                onReviewSubmit={() => {
                  fetch(`http://localhost:3000/api/movies/${movie.id}`)
                    .then((res) => res.json())
                    .then((data) => {
                      setMovie(data);
                    });
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
