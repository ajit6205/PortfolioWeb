import Display from "./components/Display";
import ButtonContainer from "./components/ButtonContainer";
import styles from "./App.module.css";
import { useState } from "react";

function App() {
  const [calval, setCalVal] = useState("");
  const onButtonClick = (buttonText) => {
    if (buttonText === "c") {
      setCalVal("");
    } else if (buttonText === "=") {
      const result = eval(calval);
      setCalVal(result);
    } else {
      const newDisplayValue = calval + buttonText;
      setCalVal(newDisplayValue);
    }
  };

  return (
    <div className={styles.calculator}>
      <Display displayValue={calval}></Display>
      <ButtonContainer onButtonClick={onButtonClick}></ButtonContainer>
    </div>
  );
}

export default App;
