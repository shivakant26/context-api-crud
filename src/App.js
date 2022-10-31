import './App.css';
import { createContext, useEffect, useState } from 'react';
import Home from './Component/Home';

export const GlobalContext = createContext();


function App() {
  const message = "i am your Parent"
  const [textList ,setTextList] = useState([]);
  const [bool,setBool] = useState(false);
  const [Etext , setEText] = useState("");
  const [eId , setEId] = useState(null);

  const getData = (listdata) => {
    setTextList(listdata)
    setBool(!bool)
    console.log(123,textList)
  }
  const edit = (id) =>{
    console.log("editable id",id)
    let current_text = textList[id];
    setEText(current_text);
    setEId(id)
  }
  const del = (id) =>{
    textList.splice(id,1)
    setBool(!bool)
  }
  return (
    <div className="App">
      <GlobalContext.Provider value={{data:message,getData:getData,editText:Etext,id:eId}}> 
        <Home />
        <div className='parent-cmp'>
          <h1>Parent Component</h1>
        <div className='list'>
          <ul>
          {
            textList?.map((item,id)=>{
              return(
                <li key={id}>{item} 
                <button onClick={()=>edit(id)}>Edit</button>
                <button onClick={()=>del(id)}>delete</button>
                </li>
              )
            })
          }
          </ul>
        </div>
        </div>
      </GlobalContext.Provider>
    </div>
  );
}

export default App;
