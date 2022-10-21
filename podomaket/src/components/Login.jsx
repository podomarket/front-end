// 로그인 페이지
import React from "react";
import styled from "styled-components";

export const Login = () => {
  return (
    <MainBox>
      <h2>로그인</h2>
      <Box>
        <p>닉네임</p>
        <br />
        <input type="text" placeholder="닉네임을 입력하세요" />
        <br />
        <p>비밀번호</p>
        <br />
        <input type="password" placeholder="비밀번호를 입력하세요" />
        <br />
        <button>비밀번호를 잊어버리셨나요?</button>
      </Box>
      <MainButton>로그인</MainButton>
      <br />
      <button>카카오톡으로 회원가입</button>
      <br />
      <button>회원가입</button>
    </MainBox>
  );
};

const MainBox = styled.div`
  background-color: #ffffff;
  box-shadow: 6px 6px 10px 2px #cdcdcd;
  width: 500px;
  height: 600px;
  border-radius: 15px;
  display: block;
  margin: 0 auto;
  margin-top: 100px;
  justify-content: center;
  & h2 {
    padding: 20px;
    text-align: center;
  }
`;

const MainButton = styled.button`
  width: 300px;
  height: 40px;
  border: none;
  border-radius: 25px;
  background-color: #681170;
  font-size: 14px;
  color: white;
  float: right;
  margin-right: 100px;
  margin-top: 80px;
`;

const Box = styled.div`
  & p {
    text-align: left;
    margin-left: 100px;
    margin-top: 20px;
  }
  & input {
    width: 250px;
    border: none;
    border-bottom: 1px solid black;
    background-color: transparent;
    margin-right: 10px;
    margin-left: 100px;
  }
  & button {
    background-color: transparent;
    color: gray;
    border: none;
    float: right;
    margin-right: 150px;
    margin-top: 10px;
  }
`;

export default Login;
