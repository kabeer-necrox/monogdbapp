  import React, {useState}from 'react'

  
  const SignUp=()=> {
    const [name, setName]= useState("");
    const [password, setpassword] = useState("");
    const [email, setEmail] = useState("");


  const collectData=()=>{
    console.warn(name,password,email)

    const result = fetch('http:')
  }
    return (
      <div className='register'>
        <h1>Register</h1>
       
       
        <input className='inputBox' type='text'
         value={name} onChange={(e)=>setName(e.target.value)}  placeholder='enter your name' />
       
        <input className='inputBox' type='text'
           value ={ email}  onChange={(e)=>setEmail(e.target.value)}  placeholder='enter your email ' />

       
        <input className='inputBox' type='password' value={password}   onChange={(e)=>setpassword(e.target.value)} placeholder='enter your password' />

        <button className='appbutton' onClick={collectData} type='button'>sign up</button>
      </div>
    )
  }
  
  export default SignUp;