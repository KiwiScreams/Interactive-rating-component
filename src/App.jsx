import star from "./assets/images/icon-star.svg"
function App() {

  return (
    <>
      <section className="container">
        <div className="star-image">
          <img src={star} alt="icon-star" />
        </div>
        <h2>How did we do?</h2>
        <p className="text">Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
        <div className="numbers-container">
          <p>1</p>
          <p>2</p>
          <p>3</p>
          <p>4</p>
          <p>5</p>
        </div>
        <button>SUBMIT</button>
      </section>
    </>
  )
}

export default App
