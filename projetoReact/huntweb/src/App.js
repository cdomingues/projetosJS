import React from 'react';
import Header from './components/header';
import './styles.css';
import api from './services/api';
import Main from './pages/main';

const App = () =>(
  <div className="App">
         <Header/>
         <Main/>
      </div>
)


/* class App extends Component { 
  render(){
    return (
      <div className="App">
         <h1> Hello world!!</h1>
      </div>
    );
  }
 
} */
 
export default App;
