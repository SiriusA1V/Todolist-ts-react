import React, { useState, useReducer } from 'react'

const initialStaet = { count: 0 }

type ACTIONTYPE =
  | { type: 'increment'; payload: number }
  | { type: 'decrement'; payload: string }

function treducer(state: typeof initialStaet, action: ACTIONTYPE) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + action.payload }
    case 'decrement':
      return { count: state.count - Number(action.payload) }
    default:
      throw new Error()
  }
}

// function test_reducer(){
//     const [state, dispatch] = useReducer(treducer, initialStaet);

//     return(
//         <>
//             count : {state.count}
//             <button onClick={()=> dispatch({type : "decrement", payload: "5"})}>-</button>
//             <button onClick={()=> dispatch({type : "increment", payload: 5})}>＋</button>
//         </>
//     )
// }

function Test() {
  // initialise with null, but tell TypeScript we are looking for an HTMLInputElement
  const inputEl = React.useRef<HTMLInputElement>(null!)
  const onButtonClick = () => {
    // strict null checks need us to check if inputEl and current exist.
    // but once current exists, it is of type HTMLInputElement, thus it
    // has the method focus! ✅
    if (inputEl && inputEl.current) {
      inputEl.current.focus()
    }
  }
  return (
    <>
      {/* in addition, inputEl only can be used with input elements. Yay! */}
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
    </>
  )
}

export default Test
