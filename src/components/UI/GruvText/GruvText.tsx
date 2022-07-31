import React from "react";

//props interface
interface Props {
  text: string;
  divider: number;
  startFrom?: number;
}

//styles
import Styles from "./gruvText.module.css";

const GruvText: React.FC<Props> = (props) => {
  const { text, divider, startFrom = 0 } = props;

  const gruvColors = [
    Styles.red,
    Styles.orange,
    Styles.green,
    Styles.yellow,
    Styles.blue,
    Styles.purple,
    Styles.aqua,
  ];

  const getClass = (index: number): string => {
    let classIndex = index + startFrom;
    const colorsArrSize = gruvColors.length;
    if (classIndex >= colorsArrSize) {
      classIndex =
        classIndex - colorsArrSize * Math.trunc(classIndex / colorsArrSize);
    }
    return gruvColors[classIndex];
  };

  const divide = (text: string, divider: number): string[] => {
    const chars = [];
    let parsed = 0;
    while (parsed < text.length) {
      chars.push(text.substring(parsed, parsed + divider));
      parsed += divider;
    }
    return chars;
  };

  return (
    <p className={Styles.gruvText}>
      {divide(text, divider).map((char: string, index: number) => {
        return (
          <span key={`${index}_${char}`} className={getClass(index)}>
            {char}
          </span>
        );
      })}
    </p>
  );
};

export default GruvText;
