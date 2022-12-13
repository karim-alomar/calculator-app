import { MouseEventHandler, ReactNode } from "react";

interface btnType {
  btn: string | number | ReactNode;
  btnValue?: string | number;
  calcFun: MouseEventHandler<HTMLButtonElement>;
  classBtnType?: string;
}

export const CalcButton = ({
  btn,
  btnValue,
  calcFun,
  classBtnType = "",
}: btnType) => {
  return (
    <button
      value={btnValue}
      className={`calc-button ${classBtnType}`}
      onClick={calcFun}
    >
      {btn}
    </button>
  );
};
