import NumberSquare from "./components/numbersquare/NumberSquare";
import "./App.css"
import { useEffect, useState } from "react";

function App() {
  const [sudoku, setSudoku] = useState<number[]>(Array(81).fill(0)) 

  const setNumber = (boxIndex: number) => (index : number) => {
    setSudoku((prev) => {
      const newSudoku = [...prev];
      newSudoku[boxIndex] = index;
      return newSudoku;
    })
  }

  useEffect(() => {
    console.log(sudoku);
  },[sudoku]);

  return (
    <div className="container">
      <div className="boxContainer">
        {sudoku.map((number, i) => {
          return <NumberSquare number={number} boxIndex={number} setNumber={setNumber(i)}/>

        })}
      </div>
    </div>
  );
}

export default App
