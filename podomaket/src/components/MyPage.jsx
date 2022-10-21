// 프로필 페이지
import React from "react";
import { Button, Main, Profile, Sub, Wrap } from "../style/myPage_styled";

export const MyPage = () => {
  return (
    <>
      <Wrap>
        <Profile></Profile>
        <Main>오성은</Main>
        <Sub>자기소개를 적어보세요! 본인 어필에 큰 도움이 됩니당</Sub>
        <Button>프로필 수정</Button>
      </Wrap>
      <hr />
    </>
  );
};

export default MyPage;
