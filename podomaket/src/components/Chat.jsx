// 채팅 페이지
import React from "react";
import styled from "styled-components";
import { IoMdClose } from "react-icons/io";

export const Chat = () => {
  return (
    <ChatBox>
      <HeaderBox>
        <h2>UserName</h2>
        <Close></Close>
      </HeaderBox>
      <UserTextBox>안녕하세요???</UserTextBox>
      <br />
      <Soyoung>
        <Circle></Circle>
        <NextUserTextBox>안녕 못해요</NextUserTextBox>
      </Soyoung>
    </ChatBox>
  );
};

const ChatBox = styled.div`
  width: 600px;
  height: 700px;
  background-color: #fcfcfc;
  box-shadow: 6px 6px 10px 3px #dfdfdf;
  margin: 0 auto;
  margin-top: 80px;
  border-radius: 30px;
`;

const HeaderBox = styled.div`
  width: 600px;
  height: 60px;
  background-color: #681170;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  display: flexbox;
  justify-content: space-between;
  & h2 {
    color: white;
    padding: 20px;
    font-size: 18px;
    font-weight: 600;
  }
`;

const Close = styled(IoMdClose)`
  font-size: 20px;
  padding: 20px;
  cursor: pointer;
  color: white;
`;

const UserTextBox = styled.div`
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
  border-top-right-radius: 15px;
  padding: 10px;
  font-size: 13px;
  background: #924e98;
  color: white;
  float: right;
  margin-top: 20px;
  margin-right: 10px;
`;

const NextUserTextBox = styled.div`
  border-top-left-radius: 15px;
  border-bottom-right-radius: 15px;
  border-top-right-radius: 15px;
  padding: 10px;
  font-size: 13px;
  background: #dcdcdc;
  max-width: 250px;
  height: fit-content;
  float: right;
  margin-left: 10px;
`;

const Circle = styled.div`
  background-color: #d0d0d0;
  border-radius: 50px;
  width: 50px;
  height: 50px;
  margin-left: 15px;
  float: left;
`;

const Soyoung = styled.div`
  display: flex;
  margin-top: 60px;
`;

export default Chat;
