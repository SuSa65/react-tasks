import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter,setcounter]=useState(0);
  const [resource,setResource]=useState("post");
  const [items,setItems]=useState();
  
  const add=()=>{
    setcounter(counter+1)
  }
  const sub=()=>{
    if(counter<1){
      setcounter(0)
    }
    else{
    setcounter(counter-1)
    }
  }

  useEffect(()=>{
    console.log('resource');
    fetch('https://jsonplaceholder.typicode.com${resource}')
      .then(response => response.json())
      .then(json => setItems(json));
  },[resource]) ;
  return (
    <>
      <h1>counter : {counter}</h1>
      <button onClick={add}>Add</button>
      <button onClick={sub}>remove</button>
+
      <button onClick={()=>setResource("post")}>post</button>
      <button onClick={()=>setResource("comment")}>comment</button>
      <button onClick={()=>setResource("post")}>post</button>
      <p>{resource}</p>
      <p>currennt value : {counter}</p>
      
      {
        items.map(item =>{
          return <pre>{json.stringify(item)}</pre>
        })
      }
    </>
  )
}

export default App
