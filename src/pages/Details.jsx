import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/api/movies/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setMovie(data);
      });
  }, [id]);

  if (!movie) {
    return <div className="container my-5">Loading...</div>;
  }

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-4">
          <img
            src={`http://localhost:3000/images/${movie.image}`}
            alt={movie.title}
            className="img-fluid rounded"
          />
        </div>
        <div className="col-md-8">
          <h1>{movie.title}</h1>
          <p className="lead">Director: {movie.director}</p>
          <p>Genre: {movie.genre}</p>
          <p>Year: {movie.release_year}</p>
          <p>Abstract: {movie.abstract}</p>

          <h3 className="mt-4">Reviews</h3>
          {reviews.map((review) => (
            <div key={review.id} className="card mb-3">
              <div className="card-body">
                <h5 className="card-title">Rating: {review.vote}/5</h5>
                <p className="card-text">{review.text}</p>
                <p className="card-text">{review.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
