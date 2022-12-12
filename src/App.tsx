import { useState } from "react";
import "./app.css";
const buttons = [
  ["AC", "!", "%", "/"],
  [7, 8, 9, "X"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  ["<-", 0, ".", "="],
];
function App() {
  const [result, setResult] = useState(0);
  return (
    <div className="container">
      <div className="calc-container">
        <div className="result">
          <span>{result}</span>
        </div>
        <div className="calc-container-buttons">
          {buttons.map((collection, collectionIndex) => (
            <div className="calc-buttons" key={collectionIndex}>
              {collection.map((btn, buttonIndex) => (
                <button
                  value={btn}
                  className={`calc-button 
                    ${buttonIndex == 3 ? "main-buttons" : "second-buttons"}
                  `}
                  key={buttonIndex}
                >
                  {btn}
                </button>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
