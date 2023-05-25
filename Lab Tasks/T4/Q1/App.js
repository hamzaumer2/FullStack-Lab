// import React from 'react';
// //import ReactDOM from 'react-dom/client';

// import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
// import Home from "./components/Home";
// import About from "./components/About";
// import Contact from "./components/Contact";
// function App(){
//     return(
//         <Router>
//             <div>
//                 <nav>
//                     <ul>
//                         <li>
//                             <Link to = "/">Home</Link>
//                         </li>
//                         <li>
//                             <Link to = "/about">About</Link>
//                         </li>
//                         <li>
//                             <Link to = "/contact">Contact</Link>
//                         </li>
//                     </ul>
//                 </nav>
//                 <Routes>
//                     <Route path = "/" element = {<Home/>}/>
//                     <Route path = "/about" element = {<About/>}/>
//                     <Route path = "/contact" element = {<Contact/>}/>
//                 </Routes>
//             </div>
//         </Router>
//     );
// }

// export default App;





// import React, { useState } from 'react';

// function Calculator() {
//   const [inputValue, setInputValue] = useState('0');
//   const [operator, setOperator] = useState(null);
//   const [previousValue, setPreviousValue] = useState(null);

//   const handleDigitClick = (digit) => {
//     setInputValue((prevValue) => {
//       if (prevValue === '0') {
//         return digit;
//       } else {
//         return prevValue + digit;
//       }
//     });
//   };

//   const handleOperatorClick = (op) => {
//     if (operator === null) {
//       setOperator(op);
//       setPreviousValue(parseFloat(inputValue));
//       setInputValue('0');
//     } else {
//       const currentValue = parseFloat(inputValue);
//       let result;

//       switch (operator) {
//         case '+':
//           result = previousValue + currentValue;
//           break;
//         case '-':
//           result = previousValue - currentValue;
//           break;
//         case '*':
//           result = previousValue * currentValue;
//           break;
//         case '/':
//           result = previousValue / currentValue;
//           break;
//         default:
//           result = currentValue;
//       }

//       setOperator(op);
//       setPreviousValue(result);
//       setInputValue('0');
//     }
//   };

//   const handleEqualsClick = () => {
//     const currentValue = parseFloat(inputValue);
//     let result;

//     switch (operator) {
//       case '+':
//         result = previousValue + currentValue;
//         break;
//       case '-':
//         result = previousValue - currentValue;
//         break;
//       case '*':
//         result = previousValue * currentValue;
//         break;
//       case '/':
//         result = previousValue / currentValue;
//         break;
//       default:
//         result = currentValue;
//     }

//     setInputValue(result.toString());
//     setOperator(null);
//     setPreviousValue(null);
//   };

//   const handleClearClick = () => {
//     setInputValue('0');
//     setOperator(null);
//     setPreviousValue(null);
//   };

//   return (
//     <div>
//       <input type="text" value={inputValue} readOnly />
//       <div>
//         <button onClick={() => handleDigitClick('1')}>1</button>
//         <button onClick={() => handleDigitClick('2')}>2</button>
//         <button onClick={() => handleDigitClick('3')}>3</button>
//         <button onClick={() => handleOperatorClick('+')}>+</button>
//       </div>
//       <div>
//         <button onClick={() => handleDigitClick('4')}>4</button>
//         <button onClick={() => handleDigitClick('5')}>5</button>
//         <button onClick={() => handleDigitClick('6')}>6</button>
//         <button onClick={() => handleOperatorClick('-')}>-</button>
//       </div>
//       <div>
//         <button onClick={() => handleDigitClick('7')}>7</button>
//         <button onClick={() => handleDigitClick('8')}>8</button>
//         <button onClick={() => handleDigitClick('9')}>9</button>
//         <button onClick={() => handleOperatorClick('*')}>*</button>
//       </div>
//       <div>
//         <button onClick={() => handleDigitClick('0')}>0</button>
//         <button onClick={() => handleClearClick()}>C</button>
//         <button onClick={() => handleEqualsClick()}>=</button>
//         <button onClick={() => handleOperatorClick('/')}>/</button>
//       </div>
//     </div>
 
//  );
// }

// export default Calculator;




import React, { useState } from 'react';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  const [activeComponent, setActiveComponent] = useState('home');

  const renderComponent = () => {
    switch (activeComponent) {
      case 'home':
        return <Home />;
      case 'about':
        return <About />;
      case 'contact':
        return <Contact />;
      default:
        return null;
    }
  };

  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">My Single-Page Application</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className={`nav-item ${activeComponent === 'home' ? 'active' : ''}`} onClick={() => setActiveComponent('home')}>
                <a className="nav-link" href="#">Home</a>
              </li>
              <li className={`nav-item ${activeComponent === 'about' ? 'active' : ''}`} onClick={() => setActiveComponent('about')}>
                <a className="nav-link" href="#">About</a>
              </li>
              <li className={`nav-item ${activeComponent === 'contact' ? 'active' : ''}`} onClick={() => setActiveComponent('contact')}>
                <a className="nav-link" href="#">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <main className="mt-4">
        {renderComponent()}
      </main>
    </div>
  );
}

export default App;
