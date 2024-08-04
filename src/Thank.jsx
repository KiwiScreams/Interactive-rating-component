import thankImage from "./assets/images/illustration-thank-you.svg";
const Thank = () => {
  return (
    <>
      <section className="container">
        <img src={thankImage} alt="" className="thankImage"/>
        <p className="selected-text">You selected 4 out of 5</p>
        <h2 className="center">Thank you!</h2>
        <p className="text center">
        We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!
        </p>
      </section>
    </>
  );
};

export default Thank;
