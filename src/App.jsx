import { useState } from "react";
import star from "./assets/images/icon-star.svg";
function App() {
  const [selectedRating, setSelectedRating] = useState(null);
  const handleRatingClick = (rating) => {
    setSelectedRating(rating);
  };
  return (
    <>
      <section className="container">
        <div className="star-image">
          <img src={star} alt="icon-star" />
        </div>
        <h2>How did we do?</h2>
        <p className="text">
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
        <div className="numbers-container">
          {[1, 2, 3, 4, 5].map((rating) => (
            <p
              key={rating}
              className={selectedRating === rating ? "active" : ""}
              onClick={() => handleRatingClick(rating)}
            >
              {rating}
            </p>
          ))}
        </div>
        <button>SUBMIT</button>
      </section>
    </>
  );
}

export default App;
