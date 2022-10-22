// 회원가입 페이지

import React, { useState, useEffect, useSelector } from "react";
import styled from "styled-components";

import { IoMdClose } from "react-icons/io";
import { useDispatch } from "react-redux";
import { __addUser } from "../features/podoSlice";
import { useNavigate } from "react-router-dom";

export const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [user, setUser] = useState(
    JSON.stringify({
      username: "",
      nickname: "",
      email: "",
      password: "",
      passwordCheck: "",
    })
  );
  console.log(user);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setUser((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleAddUsers = (e) => {
    e.preventDefault();
    dispatch(__addUser(user));
    setUser(
      JSON.stringify({
        username: "",
        nickname: "",
        email: "",
        password: "",
        passwordCheck: "",
      })
    );
  };

  return (
    <MainBox>
      <h4>
        <Close />
      </h4>
      <h2>회원가입</h2>
      <Box onSubmit={(e) => handleAddUsers(e)}>
        <p>닉네임</p>
        <input
          type="text"
          name="nickname"
          maxLength="5"
          placeholder="닉네임을 입력하세요"
          value={user.nickname}
          onChange={onChangeHandler}
        />
        <ReButton type="button">중복확인</ReButton>
        <p>비밀번호</p>
        <input
          type="password"
          name="password"
          minLength="8"
          placeholder="비밀번호를 입력하세요"
          value={user.password}
          onChange={onChangeHandler}
        />
        <p>비밀번호 재확인</p>
        <input
          type="Password"
          name="passwordCheck"
          minLength="8"
          placeholder="비밀번호를 다시 입력하세요"
          value={user.passwordCheck}
          onChange={onChangeHandler}
        />
        <p>이름</p>
        <input
          type="text"
          name="username"
          placeholder="이름을 입력하세요"
          value={user.username}
          onChange={onChangeHandler}
        />
        <p>e-mail</p>
        <input
          type="e-mail"
          name="email"
          placeholder="이메일을 입력해주세요"
          value={user.email}
          onChange={onChangeHandler}
        />
        <br />
        {/* <button>비밀번호를 잊어버리셨나요?</button> */}
        <MainButton
          type="submit"
          // onClick={() => {
          //   navigate("/");
          // }}
        >
          가입하기
        </MainButton>
        <Back>취소</Back>
      </Box>
    </MainBox>
  );
};

const MainBox = styled.div`
  background-color: #fcfcfc;
  box-shadow: 6px 6px 10px 3px #dfdfdf;
  width: 500px;
  height: 700px;
  border-radius: 15px;
  display: block;
  margin: 0 auto;
  margin-top: 80px;
  justify-content: center;
  & h2 {
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

const MainButton = styled.button`
  width: 100px !important;
  height: 40px !important;
  border: none;
  border-radius: 25px;
  background-color: #681170 !important;
  cursor: pointer;
  font-size: 14px;
  color: white !important;
  float: right;
  margin-right: 130px;
  margin-top: 90px;
`;

const Box = styled.form`
  & p {
    font-size: 13px;
    text-align: left;
    margin-left: 125px;
    margin-top: 20px;
  }
  & input {
    width: 200px;
    border: none;
    border-bottom: 1px solid black;
    background-color: transparent;
    margin-right: 10px;
    margin-left: 130px;
  }
`;

const ReButton = styled.button`
  background-color: transparent;
  color: #2b2b2b;
  border: none;
  float: right;
  cursor: pointer;
  margin-right: 90px;
`;

const Close = styled(IoMdClose)`
  font-size: 30px;
  padding: 15px;
`;

const Back = styled.button`
  width: 100px !important;
  height: 40px !important;
  border: none;
  border-radius: 25px;
  background-color: #c8c8c8 !important;
  cursor: pointer;
  font-size: 14px;
  color: #000000 !important;
  margin-top: 90px;
  margin-left: 130px;
`;

export default SignUp;
