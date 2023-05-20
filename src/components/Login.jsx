import React, { useState } from 'react'

const Login = () => {
    const [username,setUserName]=useState("")
    const [password,setPassword]=useState("")
  return (
      <div>
          <form action="">
              <input type="text" placeholder='enter name' value={username} />
              <input type="password" placeholder='enter password' value={password} />
              <button>login</button>
          </form>
    </div>
  )
}

export default Login