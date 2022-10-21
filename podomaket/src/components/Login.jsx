// 로그인 페이지
import React from "react";
import styled from "styled-components";

export const Login = () => {
  return (
    <MainBox>
      <h2>로그인</h2>
      <label>닉네임</label>
      <input />
      <label>비밀번호</label>
      <input />
      <button>중복확인</button>
    </MainBox>
  );
};

const MainBox = styled.div`
  background-color: #e19b9b;
  width: 500px;
  height: 500px;
  border-radius: 15px;
  display: block;
  margin: 0 auto;
  text-align: center;
  justify-content: center;
  & h2 {
    padding: 20px;
  }
  & label {
    padding: 20px;
  }
  & input {
    border: none;
    border-bottom: 2px solid black;
    background-color: transparent;
    margin-right: 10px;
  }
`;

export default Login;
