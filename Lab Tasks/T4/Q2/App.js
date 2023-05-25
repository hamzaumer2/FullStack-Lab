
import React, { useState } from 'react';

function Calculator() {
  const [inputValue, setInputValue] = useState('0');
  const [operator, setOperator] = useState(null);
  const [previousValue, setPreviousValue] = useState(null);

  const handleDigitClick = (digit) => {
    setInputValue((prevValue) => {
      if (prevValue === '0') {
        return digit;
      } else {
        return prevValue + digit;
      }
    });
  };

  const handleOperatorClick = (op) => {
    if (operator === null) {
      setOperator(op);
      setPreviousValue(parseFloat(inputValue));
      setInputValue('0');
    } else {
      const currentValue = parseFloat(inputValue);
      let result;

      switch (operator) {
        case '+':
          result = previousValue + currentValue;
          break;
        case '-':
          result = previousValue - currentValue;
          break;
        case '*':
          result = previousValue * currentValue;
          break;
        case '/':
          result = previousValue / currentValue;
          break;
        default:
          result = currentValue;
      }

      setOperator(op);
      setPreviousValue(result);
      setInputValue('0');
    }
  };

  const handleEqualsClick = () => {
    const currentValue = parseFloat(inputValue);
    let result;

    switch (operator) {
      case '+':
        result = previousValue + currentValue;
        break;
      case '-':
        result = previousValue - currentValue;
        break;
      case '*':
        result = previousValue * currentValue;
        break;
      case '/':
        result = previousValue / currentValue;
        break;
      default:
        result = currentValue;
    }

    setInputValue(result.toString());
    setOperator(null);
    setPreviousValue(null);
  };

  const handleClearClick = () => {
    setInputValue('0');
    setOperator(null);
    setPreviousValue(null);
  };

  return (
    <div>
      <input type="text" value={inputValue} readOnly />
      <div>
        <button onClick={() => handleDigitClick('1')}>1</button>
        <button onClick={() => handleDigitClick('2')}>2</button>
        <button onClick={() => handleDigitClick('3')}>3</button>
        <button onClick={() => handleOperatorClick('+')}>+</button>
      </div>
      <div>
        <button onClick={() => handleDigitClick('4')}>4</button>
        <button onClick={() => handleDigitClick('5')}>5</button>
        <button onClick={() => handleDigitClick('6')}>6</button>
        <button onClick={() => handleOperatorClick('-')}>-</button>
      </div>
      <div>
        <button onClick={() => handleDigitClick('7')}>7</button>
        <button onClick={() => handleDigitClick('8')}>8</button>
        <button onClick={() => handleDigitClick('9')}>9</button>
        <button onClick={() => handleOperatorClick('*')}>*</button>
      </div>
      <div>
        <button onClick={() => handleDigitClick('0')}>0</button>
        <button onClick={() => handleClearClick()}>C</button>
        <button onClick={() => handleEqualsClick()}>=</button>
        <button onClick={() => handleOperatorClick('/')}>/</button>
      </div>
    </div>
 
 );
}

export default Calculator;