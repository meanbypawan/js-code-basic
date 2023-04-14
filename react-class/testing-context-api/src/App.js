import logo from './logo.svg';
import './App.css';
import { useContext, useState } from 'react';
import { createContext } from 'react';
import DataContext from './DataContext';
import YearContext from './YearContext';
function App() {
  const [data,setData] = useState(2000);
  const changeData = ()=>{
    setData(data+1);
  }
  return <>
   <button onClick={changeData}>Increment Data</button> 
   <DataContext.Provider value={{dataValue: data}}> 
     <YearContext.Provider value={{year: 2000}}>
     <div>
      <h1>App Component(Level - 1)</h1>    
      <First/>
     </div>
     </YearContext.Provider>
    </DataContext.Provider>
    </>;
}

function First(){
  return <>
     <h1>First Component (Level- 2)</h1>
     <Second/>
  </>
}
function Second(){
  return <>
   
     <h1>Second Component (Level - 3)</h1>
     <Third/>
 
  </>
}
function Third(){
  const {year} = useContext(YearContext);
  const {dataValue} = useContext(DataContext);
  return <>
     <h1>Third Component (Level - 4) {"Yeaer : "+year+" Data Value : "+dataValue} </h1>
     <Fourth/>
  </>
}
function Fourth(){
  const {dataValue} = useContext(DataContext);
  return <>
     <h1>Fourth Component (Level - 5) : {dataValue}</h1>
  </>
}
export default App;
