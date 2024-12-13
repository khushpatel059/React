import React, { useState } from 'react'

function Counter() {

    const [count, setCount]=useState(0)

    const increase = ()=> {
        setCount(count+1)
    }

    const decrease =()=>{
       
        if (count>0){
        setCount(count-1)
        }
    }
  return (
    
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Counter: {count}</h1>
      <button onClick={increase} style={{ marginRight: '10px', padding: '10px 20px', fontSize: '16px' }}>
        Increase
      </button>
      <button onClick={decrease} disabled={count<1} style={{ padding: '10px 20px', fontSize: '16px' }}>
        Decrease
      </button>
    </div>

  )
}

export default Counter
