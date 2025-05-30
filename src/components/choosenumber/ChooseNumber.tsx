import React from "react";
import { ChooseNumberStyle } from "./ChooseNumber.styles";

interface Props {
    setNumber: any; // not defined yet
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ChooseNumber = ({setNumber , setIsOpen} : Props) => {
    const handleClick = (index: number) => (e:React.MouseEvent<HTMLDivElement>) =>{
        e.stopPropagation();
        setNumber(index);
        setIsOpen(false);
    }

  return (
    <ChooseNumberStyle.Container>
      {Array(10)
        .fill(0)
        .map((_, index) => {
          return (
            <ChooseNumberStyle.NumberBox
            key ={index} onClick={handleClick(index)}>
              <ChooseNumberStyle.Number>{index}</ChooseNumberStyle.Number>
            </ChooseNumberStyle.NumberBox>
          );
        })}
    </ChooseNumberStyle.Container>
  );
};

export default ChooseNumber;
