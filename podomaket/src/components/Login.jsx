// 로그인 페이지
import React, { useState } from "react";
import styled from "styled-components";
import { IoMdClose } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { __setUser } from "../features/userSlice";
import axios from "axios";
import kakao from "../img/kakao.png";
import SignUp from "./SignUp";

export const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const close = () => {
    navigate("/");
  };

  // const handleLogin = () => {
  //   fetch(`${setUserApi}/login`, {
  //     method: "POST",
  //     body: JSON.stringify({
  //       userId: this.state.userId,
  //       password: this.state.password,
  //     }),
  //   })
  //     .then((response) => response.json())

  //     .then((response) => {
  //       if (response.ACCESS_TOKEN) {
  //         localStorage.setItem("login-token", response.ACCESS_TOKEN);
  //       }
  //     });
  // };
  const logins = useSelector((state) => state.userSlice);

  const clickHandler = async () => {
    dispatch(__setUser(login));
    navigate("/");
  };

  const signup = () => {
    navigate("/users/signup");
  };

  const [login, setLogin] = useState({
    userId: "",
    password: "",
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setLogin((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const kakaoHandler = (e) => {
    window.location.href =
      "https://kauth.kakao.com/oauth/authorize?client_id=2d9446f9a3859a8aebc0b8a40164318d&redirect_uri=http://43.201.102.30:8080/users/kakao/callback&response_type=code";
  };

  const handleAddUsers = (e) => {
    e.preventDefault();
    dispatch(__setUser(login));
    setLogin({
      userId: "",
      password: "",
    });
  };

  return (
    <MainBox>
      <h4>
        <Close onClick={close} />
      </h4>
      <h2>로그인</h2>
      <Box onSubmit={(e) => handleAddUsers(e)}>
        <input
          type="text"
          placeholder="닉네임을 입력하세요"
          name="userId"
          value={login.userId}
          minLength="5"
          onChange={onChangeHandler}
          required
        />
        <input
          type="password"
          name="password"
          value={login.password}
          minLength="8"
          placeholder="비밀번호를 입력하세요"
          onChange={onChangeHandler}
          required
        />
        {/* <button>비밀번호를 잊어버리셨나요?</button> */}
      </Box>
      <Flex>
        <MainButton type="submit" onClick={clickHandler}>
          로그인
        </MainButton>
        <Button onClick={signup}>회원가입</Button>
      </Flex>
    </MainBox>
  );
};

const MainBox = styled.div`
  background-color: #fcfcfc;
  box-shadow: 6px 6px 10px 3px #dfdfdf;
  width: 500px;
  height: 600px;
  border-radius: 15px;
  display: block;
  margin: 0 auto;
  margin-top: 80px;
  justify-content: center;
  & h2 {
    margin-top: 60px;
    font-weight: 600;
    font-size: 30px;
    padding: 10px;
    text-align: center;
  }
  & p {
    text-align: center;
  }
  & h4 {
    text-align: right;
  }
`;

const Flex = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: auto 60px;
`;

const MainButton = styled.button`
  width: 100px;
  height: 40px;
  border: none;
  border-radius: 25px;
  background-color: #681170;
  cursor: pointer;
  font-size: 14px;
  color: white;
  float: right;
`;

const Box = styled.form`
  & p {
    text-align: left;
    margin-left: 100px;
    margin-top: 20px;
  }
  & input {
    width: 60%;
    height: 20px;
    background: #e0dede;
    justify-content: center;
    display: flex;
    margin: 30px auto;
    padding: 10px;
    border: none;
    outline: none;
    border-radius: 5px;
  }
  & button {
    background-color: transparent;
    color: gray;
    border: none;
    float: right;
    cursor: pointer;
    margin-right: 150px;
    margin-top: 10px;
  }
`;

const Button = styled.button`
  width: 100px;
  height: 40px;
  border: none;
  border-radius: 25px;
  background-color: #681170;
  cursor: pointer;
  font-size: 14px;
  color: white;
  float: right;
`;

const Close = styled(IoMdClose)`
  cursor: pointer;
  font-size: 30px;
  padding: 15px;
`;
export default Login;
