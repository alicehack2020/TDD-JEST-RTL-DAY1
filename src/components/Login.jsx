// import axios from 'axios'
import React, { useState } from 'react'

const Login = () => {
    const [username,setUserName]=useState("")
    const [password, setPassword] = useState("")
    const [error,setError]=useState(false)
    const [loading,setLoading]=useState(false)
    const [user,setUser]=useState()
  
  
  // const handdleClick = async (e) => {
  //   e.preventDefault()
  //   try {
  //     const {data}=await axios.get("https://jsonplaceholder.typicode.com/todos/1")
  //     setUser(data)
  //   } catch (error) {
      
  //   }
    
  // }
  const handdleClick = (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      setTimeout(() => {
        setLoading(false) 
      },5000)
    } catch (error) {
      console.log(error)
      setError(true)
      setLoading(false) 
    }
     
  }
  
  return (
      <div>
          <form action="">
        <input type="text" placeholder='enter name' value={username} onChange={e => setUserName(e.target.value)} />
        <input type="password" placeholder='enter password' value={password} onChange={e => setPassword(e.target.value)} />
        <button disabled={!username || !password} onClick={handdleClick}>{loading?"please wait":"login"}</button>
        <span data-testid="error" style={{visibility:error?"visible":"hidden"}}>some thing went wrong</span>
          </form>
    </div>
  )
}

export default Login