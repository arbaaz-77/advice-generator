import { useState } from "react";
import dice from "./images/icon-dice.svg";
import lineDesktop from "./images/pattern-divider-desktop.svg";
import lineMobile from "./images/pattern-divider-mobile.svg";

const url = "https://api.adviceslip.com/advice";

function App() {
  const [quote, setQuote] = useState(null);

  const fetchData = () => {
    fetch(url)
      .then((rep) => rep.json())
      .then((data) => {
        setQuote(data.slip);
      });
  };

  return (
    <main>
      <div className="card">
        <p className="number">
          {quote ? `advice #${quote.id}` : "advice #000"}
        </p>
        <p className="advice">
          {quote ? `"${quote.advice}"` : "Roll dice for advice :D"}
        </p>
        <img className="desktop" src={lineDesktop} alt="" />
        <img className="mobile" src={lineMobile} alt="" />
      </div>
      <button className="dice" onClick={fetchData}>
        <img src={dice} alt="" />
      </button>
    </main>
  );
}

export default App;
