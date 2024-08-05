import styles from "./ButtonContainer.module.css";
const ButtonContainer = ({onButtonClick}) => {
  const ButtonName = [
    "c",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];

  return (
    <div className={styles.buttonsContainer}>
      {ButtonName.map((ButtonName) => (
        <button className={styles.buttons} onClick={() => onButtonClick(ButtonName) }>{ButtonName} </button>
      ))}
      
    </div>
  );
};

export default ButtonContainer;
