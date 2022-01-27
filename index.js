const element = (
  <div className="main-container">
    <h1 className="heading">Congratulations</h1>
    <div className="person-container">
      <img
        className="image"
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
      />
      <h1 className="heading1">Kiran V</h1>
      <p className="para">
        Vishnu Institute of Computer Education and Technology Bhimavaram.
      </p>
      <img
        className="image"
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
