import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReviewForm from "../components/ReviewForm";

export default function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  // const [reviews, setReviews] = useState([]);
  // const [formData, setFormData] = useState({
  //   vote: 5,
  //   text: "",
  //   name: "",
  // });

  useEffect(() => {
    fetch(`http://localhost:3000/api/movies/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setMovie(data);
      });
  }, [id]);

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   fetch(`http://localhost:3000/api/movies/${id}/reviews`, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(formData),
  //   })
  //     .then((res) => res.json())
  //     .then(() => {
  //       // Refresh movie data
  //       fetch(`http://localhost:3000/api/movies/${id}`)
  //         .then((res) => res.json())
  //         .then((data) => {
  //           setMovie(data);
  //           setFormData({ vote: 5, text: "", name: "" });
  //         });
  //     });
  // };

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
          {movie.reviews.map((review) => (
            <div key={review.id} className="card mb-3">
              <div className="card-body">
                <h5 className="card-title">Rating: {review.vote}/5</h5>
                <p className="card-text">{review.text}</p>
                <p className="card-text">{review.name}</p>
              </div>
            </div>
          ))}

          <ReviewForm
            movieId={movie.id}
            onReviewSubmit={() => {
              fetch(`http://localhost:3000/api/movies/${movie.id}`)
                .then((res) => res.json())
                .then((data) => {
                  setMovie(data); // aggiorna la lista di recensioni
                });
            }}
          />

          {/* <h4 className="mt-5">Add a review</h4>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Your Name</label>
              <input
                type="text"
                className="form-control"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Rating (1-5)</label>
              <input
                type="number"
                className="form-control"
                min="1"
                max="5"
                value={formData.vote}
                onChange={(e) =>
                  setFormData({ ...formData, vote: e.target.value })
                }
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Review</label>
              <textarea
                className="form-control"
                rows="3"
                value={formData.text}
                onChange={(e) =>
                  setFormData({ ...formData, text: e.target.value })
                }
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form> */}
        </div>
      </div>
    </div>
  );
}
