// 회원가입 페이지

import React, { useState, useEffect, useSelector } from "react";
import styled from "styled-components";

import { IoMdClose } from "react-icons/io";
import { useDispatch } from "react-redux";
import { __addUser } from "../features/userSlice";
import { useNavigate } from "react-router-dom";

export const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [user, setUser] = useState({
    username: "",
    userId: "",
    email: "",
    password: "",
    passwordCheck: "",
  });
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
    setUser({
      username: "",
      userId: "",
      email: "",
      password: "",
      passwordCheck: "",
    });
  };

  //중복확인

  return (
    <MainBox>
      <h4>
        <Close />
      </h4>
      <h2>회원가입</h2>
      <Box onSubmit={(e) => handleAddUsers(e)}>
        <div>
          <input
            type="text"
            name="userId"
            minLength="5"
            placeholder="아이디를 입력하세요"
            value={user.userId}
            onChange={onChangeHandler}
          />
          <ReButton type="button">중복확인</ReButton>
        </div>
        <input
          type="password"
          name="password"
          minLength="8"
          placeholder="비밀번호를 입력하세요"
          value={user.password}
          onChange={onChangeHandler}
        />
        <input
          type="Password"
          name="passwordCheck"
          minLength="8"
          placeholder="비밀번호를 다시 입력하세요"
          value={user.passwordCheck}
          onChange={onChangeHandler}
        />
        <input
          type="text"
          name="username"
          placeholder="이름을 입력하세요"
          value={user.username}
          onChange={onChangeHandler}
        />
        <input
          type="e-mail"
          name="email"
          placeholder="이메일을 입력해주세요"
          value={user.email}
          onChange={onChangeHandler}
        />
        <br />
        <Div>
          <Back
            onClick={() => {
              navigate("/users/login");
            }}
          >
            취소
          </Back>
          <MainButton
            type="submit"
            // onClick={() => {
            //   navigate("/");
            // }}
          >
            가입하기
          </MainButton>
        </Div>
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
    margin-top: 30px;
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

const MainButton = styled.button`
  text-decoration: none;
  border: none;
  padding: 0.6rem 0.8rem;
  margin-left: 2vw;
  font-size: 1rem;
  cursor: pointer;
  background-color: #681170;
  border: 1.5px solid #f2f5f7;
  border-radius: 2em;
  font-weight: 600;
  color: #f2f5f7;
  &:hover {
    color: #f2f5f7;
    background-color: #2e0533;
    border: 1.5px solid #2e0533;
    transition: all ease-in-out 350ms;
  }
`;

const Box = styled.form`
  & p {
    font-size: 13px;
    text-align: left;
    margin-left: 125px;
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
  & input:nth-child(1) {
    width: 185px;
    margin-top: 33px;
    margin-bottom: 10px;
    margin-left: 90px;
  }
  & div {
    display: flex;
  }
`;

const ReButton = styled.button`
  text-decoration: none;
  border: none;
  padding: 0.6rem 0.8rem;
  margin-left: 2vw;
  font-size: 1rem;
  cursor: pointer;
  background-color: #681170;
  border: 1.5px solid #f2f5f7;
  border-radius: 2em;
  font-weight: 600;
  color: #f2f5f7;
  height: 46px;
  margin-top: 30px;
  margin-right: 89px;
  &:hover {
    color: #f2f5f7;
    background-color: #2e0533;
    border: 1.5px solid #2e0533;
    transition: all ease-in-out 350ms;
  }
`;

const Close = styled(IoMdClose)`
  font-size: 30px;
  padding: 15px;
`;
const Div = styled.div`
  display: flex;
  justify-content: center;
`;

const Back = styled.button`
  text-decoration: none;
  border: none;
  padding: 0.6rem 0.8rem;
  font-size: 1rem;
  cursor: pointer;
  background-color: #681170;
  border: 1.5px solid #f2f5f7;
  border-radius: 2em;
  font-weight: 600;
  color: #f2f5f7;
  &:hover {
    color: #f2f5f7;
    background-color: #2e0533;
    border: 1.5px solid #2e0533;
    transition: all ease-in-out 350ms;
  }
`;

export default SignUp;
