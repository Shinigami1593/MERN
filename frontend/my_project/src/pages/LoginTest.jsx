import React from 'react'
import { useState } from 'react'

export default function LoginTest() {
    const [name,setName] = useState("Default")
  return (
    <div>
        <div className="form">
            <input type="text" />
            <input type="text" />
            <input type="text" />
        </div>
    </div>
  )
}
