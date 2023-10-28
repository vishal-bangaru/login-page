import React, { useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const Login = () => {
  useEffect(() => {
    const form = document.querySelector('.login-form');
    if (form) {
      form.classList.add('animate__animated', 'animate__zoomIn');
       // Using animate.css for animations
    }
  }, []);

  return (
    <LoginPage>
      <LoginForm className="login-form">
        <Title>Login</Title>
        <Input type="text" placeholder="Username" />
        <Input type="password" placeholder="Password" />
        <SubmitButton>Submit</SubmitButton>
      </LoginForm>
    </LoginPage>
  );
};

export default Login;

// Styled Components
const LoginPage = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to right, #fc6076, #ff9a44);
  font-family: 'Arial', sans-serif;
 
`;

const LoginForm = styled.div`
background-color: #f9f9f9;
   padding: 80px;
  padding-left:50px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  width: 90%;
  @media (max-width: 768px) {
    width: 80%;
  }

  @media (max-width: 480px) {
    width: 90%;
  }
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  color: #333;
  font-size: 24px;
`;

const Input = styled.input`
  width: 100%;
  padding: 15px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 6px;
  outline: none;
  transition: border-color 0.3s;
  font-family: 'Arial', sans-serif;
  color: #555; /* Updated text color */
  &:hover {
    transform: scale(1.05);
  }
  &:focus {
    border-color: #ff9a44;
  }
  @media (max-width: 480px) {
    margin-bottom: 15px;
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 15px;
  margin-left:15px;
  border: none;
  border-radius: 6px;
  background: linear-gradient(to right, #fc6076, #ff9a44);
  color: #fff;
  cursor: pointer;
  transition: background 0.3s, transform 0.2s;
  font-family: 'Arial', sans-serif;
  color: #fff; /* Updated text color */

  &:hover {
    background: linear-gradient(to right, #fc6076, #ff9a44);
    transform: scale(1.05);
  }
`;
