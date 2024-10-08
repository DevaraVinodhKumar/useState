import React from 'react'

export const Counter = () => {
    const [count,setCount] = useState(0);

    function increment(){
        setCount(count+1)
    }

    function decrement(){
        setCount(count-1)
    }

    function double(){
        setCount(count*2)
    }
  return (
      <div className='counter'>
         {/* heading*/}
        <h1 data-field="counter-header">Counter</h1>

        {/*display the counting number*/}
        <h4 data-field="count-display">
            {count}
        </h4>

        {/*Buttons*/}
        <button data-field="btn-add" onClick={increment}>+</button>
        <button data-field="btn-subtract" onClick={decrement}>-</button>
        <button data-field="btn-double" onClick={double}>double</button>
      </div>
    )
}
