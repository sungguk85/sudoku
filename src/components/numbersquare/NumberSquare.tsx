import React, { useEffect, useRef, useState } from "react";
import { NumberSquareStyle } from "./NumberSquare.styles";
import ChooseNumber from "../choosenumber/ChooseNumber";

interface Props {
  number: number;
  boxIndex: number;
  setNumber: (index: number) => void;
}

const NumberSquare = ({ number, boxIndex, setNumber }: Props) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const row = Math.floor(boxIndex / 9);
  const col = boxIndex % 9;

  const handleClick = () => {
    setOpen((value) => !value);
  };

  const borderStyles = `
    ${row % 3 === 2 && row !== 8 ? "border-bottom: 2px solid": ""};
    ${col % 3 === 2 && col !== 8 ? "border-right: 2px solid": ""};
  `

  const handleClickOutside = (e: MouseEvent) => {
    if (ref.current && !ref.current.contains(e.target as Node)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <NumberSquareStyle.Container onClick={handleClick} borderStyles={borderStyles} isOpen={open}>
      <NumberSquareStyle.Number>{number}</NumberSquareStyle.Number>
      {open && <ChooseNumber setNumber={setNumber} setIsOpen={setOpen} />}
    </NumberSquareStyle.Container>
  );
};

export default NumberSquare;
