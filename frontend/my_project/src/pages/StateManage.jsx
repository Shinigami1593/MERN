import React from 'react'
import { useDeferredValue } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

export default function StateManage() {
    // state in functional component using useState
    const [data,setData] = useState("Default data")
    const [num,setNum] = useState(0)

    const updateCurrentData = () => {
      setData('New Data')
    }

    //use Effect, dependencies checker
    // 1. Initially logic (API calls)
    useEffect(
      () => {
        setData("Initial Data Change")
      },
      [] //empty for initial run
    )

    //2. State dependencies
    useEffect(
      () => {
        if(data == "Arya"){
          setNum(10000)
        }
      },
      [data] //list of states
    )

    //3. Logic num<0 data LEss else MOre
    useEffect(
      () => {
        if(num < 0){
          setData("Less")
        }else{
          setData("More")
        }
      },
      [num]
    )

  const handleName = (e) => setData(e.target.value)

  return (
    <div class ='bg-cyan-500' >
        {data} <br />
        <button onClick={updateCurrentData}>Click Me</button> <br />
        <button onClick={
          () => {
            setData("From callback")
          }
        }>Click to CallBack</button>

        <div>
          {num} <br />
          <button onClick={()=>setNum(num + 1)} >
            +
          </button>
          <button onClick={()=>setNum(num - 1)}>
            -
          </button>
        </div>

        <div>
          <input onChange={handleName} />
        </div>

    </div>   
  )

}
