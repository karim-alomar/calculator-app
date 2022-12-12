import "./app.css";
const buttons = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function App() {
  return (
    <div className="container">
      <div className="calc-container">
        <div className="result">
          <span>250</span>
        </div>
        <div className="calc-container-buttons">
          <div className="calc-buttons">
            <button className="calc-button second-buttons">AC</button>
            <button className="calc-button second-buttons">8</button>
            <button className="calc-button second-buttons">%</button>
            <button className="calc-button main-buttons">/</button>
          </div>
          <div className="calc-buttons">
            <button className="calc-button">7</button>
            <button className="calc-button">8</button>
            <button className="calc-button">9</button>
            <button className="calc-button main-buttons">X</button>
          </div>
          <div className="calc-buttons">
            <button className="calc-button">6</button>
            <button className="calc-button">5</button>
            <button className="calc-button">4</button>
            <button className="calc-button main-buttons">-</button>
          </div>
          <div className="calc-buttons">
            <button className="calc-button">3</button>
            <button className="calc-button">2</button>
            <button className="calc-button">1</button>
            <button className="calc-button main-buttons">+</button>
          </div>
          <div className="calc-buttons">
            <button className="calc-button">
              <i className="fa-solid fa-rotate-left"></i>
            </button>
            <button className="calc-button">0</button>
            <button className="calc-button">.</button>
            <button className="calc-button main-buttons">=</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
