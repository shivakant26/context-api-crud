import React, { useContext, useEffect, useState } from 'react'
import { GlobalContext } from '../App';

const Home = () => {
    const data = useContext(GlobalContext);
    console.log(data)
    const [state , setState] = useState({
        text:""
    });

    const [tList, setTList] = useState([]);
    const submit = () =>{
        if(data.editText){
            tList.splice(data.id,1,state.text)
        }else{
            tList.push(state.text)
        }
        data.getData(tList);
        setState({text:""});
    }

    useEffect(()=>{
        if(data.editText){
            setState({text:data.editText})
        }
    },[data.editText])

    return (
      <div>
        <h2>Child Component</h2>
        <div className='form'>
            <input type="text" 
            placeholder='enter Text'
            value={state.text}
            onChange={(e)=>setState({...state,text:e.target.value})}
            />
            <button onClick={submit}>
                submit    
            </button>
        </div>
      </div>
    )
}

export default Home;