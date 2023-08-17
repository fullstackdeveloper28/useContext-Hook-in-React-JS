
import { createContext } from 'react';
import './App.css';
import ChildA from './ChildA';

const data=createContext();
const data1=createContext()
function App() {
  const fname ="FullStack";
  const lname="Developer28";
  return (
    <div className="App">
      <data.Provider value={fname}>
        <data1.Provider value={lname}>
      <ChildA/>
      </data1.Provider>
      </data.Provider>
    </div>
  );
}

export default App;
export {data,data1}
