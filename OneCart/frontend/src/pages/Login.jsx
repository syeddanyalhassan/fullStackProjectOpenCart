import React,{ useState } from 'react'
import Logo from '../assets/vcartlogo.png'; // Assuming you have a logo image
import { useNavigate } from 'react-router-dom';
import google from '../assets/google.png'; // Assuming you have a Google logo image
import { IoEyeOutline } from "react-icons/io5";
import { IoEye } from "react-icons/io5";
import { authDataContext } from '../context/authContext.jsx';
import axios from 'axios';



function Login() {
  let navigate = useNavigate();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  let {serverUrl} = React.useContext(authDataContext);

  const [show,setShow] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    try{
      let result = await axios.post(serverUrl + '/api/auth/login', {
        email,
        password
      },{withCredentials: true});
      console.log(result.data);
    } catch(error) {
      console.log(error);
    }
  }

  return (
    <div className='w-[100vw] h-[100vh] bg-gradient-to-l from-[#141414] to-[#0c2025] text-[white] flex flex-col items-center justify-start'>
      <div className='w-[100%] h-[80px] flex items-center justify-start px-[30px] gap-[10px] cursor-pointer' onClick={() => navigate('/')}>
        <img src={Logo} alt="Logo" className='w-[100px] h-[40px]' />
        <h1 className='text-[22px] font-sans' >One Cart</h1>
      </div>
      <div className='w-[100%] h-[100px] flex items-center justify-center flex-col gap-[10px]'>
        <span className='text-[25px] font-semibold'>Login Page</span>
        <span className='text-[16px]'>Welcome to OneCart , please place your order</span>
      </div>
      
      <div className='max-w-[600px] w-[90%] h-[500px] bg-[#00000025] border-[1px] border-[#96969635] backdrop:blur-2x1 rounded-lg shadow-lg flex items-center justify-center'>
        <form action="" onSubmit={handleLogin} className='w-[90%] h-[90%] flex flex-col items-center justify-start gap-[20px]'>
          <div className='w-[90%] h-[50px] bg-[#42656cae] rounded-lg flex items-center justify-center gap-[10px] py-[20px] cursor-pointer'> 
            <img src={google} alt="" className='w-[20px]' /> Login with Google
          </div>
          <div className='w-[100%] h-[20px] flex items-center justify-center gap-[10px]'>
            <div className='w-[40%] h-[1px] bg-[#96969635]'></div> Or <div className='w-[40%] h-[1px] bg-[#96969635]'></div>
          </div>
          <div className='w-[90%] h-[400px] flex flex-col items-center justify-start gap-[15px]'>
            <input 
              type="text" 
              placeholder='Email' 
              className='w-[100%] h-[50px] border-[2px] border-[#96969635] backdrop:blur-sm rounded-lg shadow-lg bg-transparent placeholder-[#ffffffc7] px-[20px] font-semibold' 
              required 
              onChange={(e) => setEmail(e.target.value)} 
              value={email}
            />
            <input 
              type={show ? "text":"password"} 
              placeholder='Password' 
              className='w-[100%] h-[50px] border-[2px] border-[#96969635] backdrop:blur-sm rounded-lg shadow-lg bg-transparent placeholder-[#ffffffc7] px-[20px] font-semibold' 
              required 
              onChange={(e) => setPassword(e.target.value)} 
              value={password}
            />
            
            {!show && <IoEyeOutline className='w-[20px] h-[20px] cursor-pointer absolute bottom-[248px] left-[62%] top-[54%]' onClick={() => setShow(prev => !prev)}/>}
            {show && <IoEye className='w-[20px] h-[20px] cursor-pointer absolute bottom-[248px] left-[62%] top-[54%]' onClick={() => setShow(prev => !prev)}/>}
          
            <button className='w-[100%] h-[50px] bg-[#6060f5] rounded-lg flex items-center justify-center mt-[20px] text-[17px] font semi-bold'> Login </button>
            <p className='flex gap-[10px]'>You have'nt any account?<span className='text-[#5555f6cf] text-[17px] font-semibold cursor-pointer' onClick={() => navigate('/signup')}>Create New Account</span></p>
          </div>
        </form>
      </div>
    </div> 
  )
}

export default Login