  import React, {useState}from 'react'
  import {useNavigate} from "react-router-dom"

  
  const SignUp=()=> {
    const [name, setName]= useState("");
    const [password, setpassword] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate("")


    const collectData = async () => {
      console.warn(name, password, email);
      let result = await fetch('http://localhost:5000/register',{
        method: "post",
        body: JSON.stringify({ name, email, password }),
        headers: {
          'Content-Type':'application/json'
        },
      });
      result = await result.json();
      console.warn(result);

      if(result){
        navigate('/')
      }
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

  




  