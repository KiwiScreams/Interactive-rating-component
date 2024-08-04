import { useState } from "react"
import star from "./assets/images/icon-star.svg"
import Thank from "./Thank";
function App() {
  const [selectedRating, setSelectedRating] = useState(null);
  const handleRatingClick = (rating) =>
  {
    setSelectedRating(rating);
  }
  return (
    <>
      <section className="container">
        <div className="star-image">
          <img src={star} alt="icon-star" />
        </div>
        <h2>How did we do?</h2>
        <p className="text">Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
        <div className="numbers-container">
          <p onClick={() => handleRatingClick(1)}>1</p>
          <p onClick={() => handleRatingClick(2)}>2</p>
          <p onClick={() => handleRatingClick(3)}>3</p>
          <p onClick={() => handleRatingClick(4)}>4</p>
          <p onClick={() => handleRatingClick(5)}>5</p>
          {selectedRating && <Thank selectedRating={selectedRating} />}
        </div>
        <button>SUBMIT</button>
      </section>
    </>
  )
}

export default App
