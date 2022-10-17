import logo from './logo.svg';
import Header from './Components/Header'
import Options from './Components/Options';
import AddOption from './Components/AddOption';
import Action from './Components/Action';
import Counter from './Components/Counter';
import './App.css';
import React from 'react';


class App extends React.Component{
  render(){
    const title = 'MyBookApp'
        const subtitle = 'Help me to decide a book'
        const options = ['Book1','Book2','Book3','Book4']
    return(
      <div>
        <Header title={title} subtitle={subtitle} />
        <Options options={options} />
        {/* <Option /> */}
        <AddOption />
        <Action />
        <Counter />

      </div>
    );
  }
}

export default App;

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
