import React, { useState } from 'react';

const LoginForm = () => {
 const [email, setEmail] = useState('');
 const [password, setPassword] = useState('');

 const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: 'auto',
    width: '300px',
    border: '1px solid #ccc',
    padding: '20px',
    boxShadow: '0px 0px 5px #ccc',
    
 };

 const inputStyle = {
    marginBottom: '10px',
    padding: '5px',
    width: '100%',
    border: '1px solid #ccc',
    boxShadow: '0px 0px 2px #ccc',
 };

 const buttonStyle = {
    padding: '10px',
    width: '100%',
    backgroundColor: '#007BFF',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
    textAlign: 'center',
    boxShadow: '0px 0px 3px #007BFF',
   
 };

 const handleEmailChange = (e) => {
    setEmail(e.target.value);
 };

 const handlePasswordChange = (e) => {
    setPassword(e.target.value);
 };

 const handleSubmit = (e) => {
    e.preventDefault();
 };

 return (
    <form style={formStyle} onSubmit={handleSubmit}>
      <h1>Login</h1>
      <input
        type="email"
        placeholder="Email"
        style={inputStyle}
        value={email}
        onChange={handleEmailChange}
        
      />
      <input
        type="password"
        placeholder="Password"
        style={inputStyle}
        value={password}
        onChange={handlePasswordChange}
      />
      <p><a href="https://www.example.com/signup">Forgot password?</a></p>
      <button type="submit" style={buttonStyle}>
        Login
      </button>
      <p className='da'>Don't have an account? <a href="https://www.example.com/signup">Sign Up</a></p>
      <p>Or </p>
      <button style={buttonStyle} >Login with Facebook</button>
      <button style={buttonStyle}>Login with Google</button>
    </form>
 );
};
export default LoginForm;