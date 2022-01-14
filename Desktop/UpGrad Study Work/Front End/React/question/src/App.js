import { useState } from 'react';
import PasswordStrengthMeter from './components/PasswordStrengthMeter'

const App = () => {
  const [password,setPassword]=useState('');
  
  return (
    <>
      <div className="container">
<div className='col-md-6-mx-auto'>
  <h3 className="text-center my-5">Password Strength</h3>
  <div className="form-group mb-1">
    <input type="password" 
    className='form-control shadow-none' 
    placeholder='Enter Your Password Here'
    onChange={e=>setPassword(e.target.value)}
     />
  </div>
  <PasswordStrengthMeter password={password}/>
</div>
<p>Minimum 8 character long</p>
<p>Atleast 1 capital letter</p>
<p>Atleast 1 number</p>
<p>Atleast 1 special character</p>
</div>

    </>
  )
}

export default App;
