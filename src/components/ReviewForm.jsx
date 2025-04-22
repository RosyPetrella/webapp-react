import { useState } from "react";
import { useLoader } from "../GlobalContentx";

export default function ReviewForm({ movieId, onReviewSubmit }) {
  const [formData, setFormData] = useState({
    vote: 5,
    text: "",
    name: "",
  });

  const { showLoader, hideLoader } = useLoader();

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`http://localhost:3000/api/movies/${movieId}/reviews`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then(() => {
        setFormData({ vote: 5, text: "", name: "" });
        if (onReviewSubmit) onReviewSubmit(); // callback per aggiornare le review
      })
      .catch((err) => {
        console.error("Error submitting review:", err);
      });
  };

  return (
    <div className="mt-4">
      <h4 className="mt-5">Add a review</h4>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Your Name</label>
          <input
            type="text"
            className="form-control"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
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
            onChange={(e) => setFormData({ ...formData, vote: e.target.value })}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Review</label>
          <textarea
            className="form-control"
            rows="3"
            value={formData.text}
            onChange={(e) => setFormData({ ...formData, text: e.target.value })}
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
