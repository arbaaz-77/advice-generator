import "./App.css";

const url = "https://api.adviceslip.com/advice";

function App() {
  return (
    <main>
      <div class="card">
        <p class="number">Advice #000</p>
        <p class="advice">"Click the dice for random advice"</p>
        <img src="../images/pattern-divider-desktop.svg" alt="" />
      </div>
      <button class="dice">
        <img src="../images/icon-dice.svg" alt="" />
      </button>
    </main>
  );
}

export default App;
