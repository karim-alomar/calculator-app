import { useEffect, useState } from "react";
import "./app.css";
import { CalcButton } from "./components/CalcButton";
import { ModeButton } from "./components/ModeButton";
import { useAppSelector, useAppDispatch } from "./redux/hook";
import {
  deleteValue,
  getLastValue,
  incrementByAmount,
  resetValue,
} from "./redux/reducers/calcolaterReducers";
import { changeMode } from "./redux/reducers/modeReducer";
import { Calcolater } from "./style/Calcolater.style";
function App() {
  const { value } = useAppSelector((state) => state.calc);
  const { isDark } = useAppSelector((state) => state.mode);
  const dispatch = useAppDispatch();
  const handelSum = (num: number) => {
    dispatch(incrementByAmount(num));
    dispatch(getLastValue(num));
  };
  return (
    <div className="container">
      <Calcolater isDark={isDark}>
        <div className="buttons-mode-container">
          <ModeButton
            isDark={!isDark}
            handelMode={() => dispatch(changeMode(false))}
            iconElement={<i className="fa-solid fa-sun"></i>}
          />
          <ModeButton
            isDark={isDark}
            handelMode={() => dispatch(changeMode(true))}
            iconElement={<i className="fa-solid fa-moon"></i>}
          />
        </div>
        <div className="result">
          <span>{value}</span>
        </div>
        <div className="calc-container-buttons">
          <div className="calc-buttons">
            <CalcButton
              btn="AC"
              btnValue=""
              calcFun={() => dispatch(resetValue())}
              classBtnType="second-buttons"
            />
            <CalcButton
              btn="!"
              btnValue=""
              calcFun={() => handelSum(9)}
              classBtnType="second-buttons"
            />
            <CalcButton
              btn="%"
              btnValue="%"
              calcFun={() => handelSum(9)}
              classBtnType="second-buttons"
            />
            <CalcButton
              btn="/"
              btnValue="/"
              calcFun={() => handelSum(9)}
              classBtnType="main-buttons"
            />
          </div>
          <div className="calc-buttons">
            <CalcButton btn={7} btnValue={7} calcFun={() => handelSum(7)} />
            <CalcButton btn={8} btnValue={8} calcFun={() => handelSum(8)} />
            <CalcButton btn={9} btnValue={9} calcFun={() => handelSum(9)} />
            <CalcButton
              btn="X"
              btnValue="x"
              calcFun={() => handelSum(9)}
              classBtnType="main-buttons"
            />
          </div>
          <div className="calc-buttons">
            <CalcButton btn={4} btnValue={4} calcFun={() => handelSum(4)} />
            <CalcButton btn={5} btnValue={5} calcFun={() => handelSum(5)} />
            <CalcButton btn={6} btnValue={6} calcFun={() => handelSum(6)} />
            <CalcButton
              btn="-"
              btnValue="-"
              calcFun={() => handelSum(9)}
              classBtnType="main-buttons"
            />
          </div>
          <div className="calc-buttons">
            <CalcButton btn={1} btnValue={1} calcFun={() => handelSum(1)} />
            <CalcButton btn={2} btnValue={2} calcFun={() => handelSum(2)} />
            <CalcButton btn={3} btnValue={3} calcFun={() => handelSum(3)} />
            <CalcButton
              btn="+"
              btnValue="+"
              calcFun={() => handelSum(9)}
              classBtnType="main-buttons"
            />
          </div>
          <div className="calc-buttons">
            <CalcButton
              btn={<i className="fa-solid fa-arrow-rotate-left"></i>}
              btnValue=""
              calcFun={() => dispatch(deleteValue())}
            />
            <CalcButton btn={0} btnValue={0} calcFun={() => handelSum(9)} />
            <CalcButton btn="." btnValue="." calcFun={() => handelSum(9)} />
            <CalcButton
              btn="="
              btnValue="="
              calcFun={() => handelSum(9)}
              classBtnType="main-buttons"
            />
          </div>
        </div>
      </Calcolater>
    </div>
  );
}

export default App;
