// 제품 하나 상세보기 페이지

import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export const Detail = () => {
  const navigate = useNavigate();
  return (
    <MainBox>
      <TitleBox>
        <h2>title</h2>
        <h3>user</h3>
        <RightButton
          onClick={() => {
            navigate("/Chat");
          }}
        >
          채팅하기
        </RightButton>
      </TitleBox>
      <ImageBox></ImageBox>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis
        molestie, dictum est a, mattis tellus. Sed dignissim, metus nec
        fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus
        elit sed risus. Maecenas eget condimentum velit, sit amet feugiat
        lectus. Class aptent taciti sociosqu ad litora torquent per conubia
        nostra, per inceptos
      </p>
      <Like>💗 100 </Like>
    </MainBox>
  );
};

const MainBox = styled.div`
  background-color: #fcfcfc;
  box-shadow: 6px 6px 10px 3px #dfdfdf;
  width: 600px;
  height: 650px;
  margin: 0 auto;
  margin-top: 80px;
  & h2 {
    margin-left: 30px;
    font-size: 25px;
    font-weight: 600;
  }
  & h3 {
    font-size: 20px;
    margin-top: 5px;
    margin-left: 30px;
  }
  & p {
    padding: 50px;
  }
`;

const TitleBox = styled.div`
  display: flexbox;
  padding: 25px;
  margin-left: 20px;
  & button {
    margin-left: 270px;
    cursor: pointer;
  }
`;

const RightButton = styled.button`
  border: none;

  float: right;
  width: 100px;
  height: 35px;
  border-radius: 10px;
  margin-right: 80px;
  background-color: #681170;
  color: white;
`;

const ImageBox = styled.div`
  width: 500px;
  background-color: gray;
  height: 300px;
  margin: 0 auto;
`;

const Like = styled.button`
  margin-left: 50px;
  border: 1px solid #dbdbdb;
  font-weight: 600;
  font-size: 12px;
  height: 25px;
  border-radius: 10px;
  background-color: #f7f7f7;
  cursor: pointer;
`;

export default Detail;
