import { useEffect, useState } from "react";
import { CalcButton } from "./components/CalcButton";
import { ModeButton } from "./components/ModeButton";
import { useAppSelector, useAppDispatch } from "./redux/hook";
import {
  updateCalc,
  resetValue,
  handelEval,
  removeValue,
  EquelValue,
  plusMinusValue,
} from "./redux/reducers/calcolaterReducers";
import { changeMode } from "./redux/reducers/modeReducer";
import { Calcolater } from "./style/Calcolater.style";
import { GlobalStyle } from "./style/GlobalStyle";
function App() {
  const { value, result } = useAppSelector((state) => state.calc);
  const { isDark } = useAppSelector((state) => state.mode);
  const ops = ["/", "*", "+", "-", ".", "%", "="];
  const dispatch = useAppDispatch();
  const handelUpdateCalc = (num: string) => {
    if (
      (ops.includes(num) && value == "") ||
      (ops.includes(num) && ops.includes(value.slice(-1)))
    ) {
      return false;
    }
    dispatch(handelEval(num));
    dispatch(updateCalc(num));
  };
  // useEffect(() => {
  //   console.log(dispatch(plusMinusValue()));
  //   console.log(value);
  // }, [value]);
  return (
    <>
      <GlobalStyle isDark={isDark} />
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
            <span className="small">({result || "0"})</span>
            <span>{value || "0"}</span>
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
                btn={<i className="fa-solid fa-plus-minus"></i>}
                btnValue=""
                calcFun={() => dispatch(plusMinusValue())}
                classBtnType="second-buttons"
              />
              <CalcButton
                btn="%"
                btnValue="%"
                calcFun={() => handelUpdateCalc("%")}
                classBtnType="second-buttons"
              />
              <CalcButton
                btn="/"
                btnValue="/"
                calcFun={() => handelUpdateCalc("/")}
                classBtnType="main-buttons"
              />
            </div>
            <div className="calc-buttons">
              <CalcButton
                btn={7}
                btnValue={7}
                calcFun={() => handelUpdateCalc("7")}
              />
              <CalcButton
                btn={8}
                btnValue={8}
                calcFun={() => handelUpdateCalc("8")}
              />
              <CalcButton
                btn={9}
                btnValue={9}
                calcFun={() => handelUpdateCalc("9")}
              />
              <CalcButton
                btn="*"
                btnValue="*"
                calcFun={() => handelUpdateCalc("*")}
                classBtnType="main-buttons"
              />
            </div>
            <div className="calc-buttons">
              <CalcButton
                btn={4}
                btnValue={4}
                calcFun={() => handelUpdateCalc("4")}
              />
              <CalcButton
                btn={5}
                btnValue={5}
                calcFun={() => handelUpdateCalc("5")}
              />
              <CalcButton
                btn={6}
                btnValue={6}
                calcFun={() => handelUpdateCalc("6")}
              />
              <CalcButton
                btn="-"
                btnValue="-"
                calcFun={() => handelUpdateCalc("-")}
                classBtnType="main-buttons"
              />
            </div>
            <div className="calc-buttons">
              <CalcButton
                btn={1}
                btnValue={1}
                calcFun={() => handelUpdateCalc("1")}
              />
              <CalcButton
                btn={2}
                btnValue={2}
                calcFun={() => handelUpdateCalc("2")}
              />
              <CalcButton
                btn={3}
                btnValue={3}
                calcFun={() => handelUpdateCalc("3")}
              />
              <CalcButton
                btn="+"
                btnValue="+"
                calcFun={() => handelUpdateCalc("+")}
                classBtnType="main-buttons"
              />
            </div>
            <div className="calc-buttons">
              <CalcButton
                btn={<i className="fa-solid fa-arrow-rotate-left"></i>}
                btnValue=""
                calcFun={() => dispatch(removeValue())}
              />
              <CalcButton
                btn={0}
                btnValue={0}
                calcFun={() => handelUpdateCalc("0")}
              />
              <CalcButton
                btn="."
                btnValue="."
                calcFun={() => handelUpdateCalc(".")}
              />
              <CalcButton
                btn="="
                calcFun={() => dispatch(EquelValue())}
                classBtnType="main-buttons"
              />
            </div>
          </div>
        </Calcolater>
      </div>
    </>
  );
}

export default App;
